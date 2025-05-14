import { StyleSheet, View } from "react-native";
import { Screen } from "@app/components/Screen";
import { Text } from "@app/components/typography/Text";
import {
  StackActions,
  StaticScreenProps,
  useNavigation,
} from "@react-navigation/native";
import { MovieDetails, useMovieDetails } from "@app/hooks/useMovieDetails";
import { ContentSectionView } from "@app/components/ContentSectionView";
import { LinkButton } from "@app/components/LinkButton";
import { Fragment } from "react";
import { Button } from "@app/components/Button";
import { Spacing } from "@app/components/Spacing";
import { PlaceholderView } from "@app/components/PlaceholderView";

type MovieDetailsScreenProps = StaticScreenProps<{
  movieId: string;
}>;

export const MovieDetailsScreen = (props: MovieDetailsScreenProps) => {
  const { movieDetails, isMovieDetailsLoading } = useMovieDetails(
    props.route.params.movieId,
  );
  const navigation = useNavigation();

  const handleCharacterLinkTap =
    (character: MovieDetails["characters"][0]) => () => {
      navigation.navigate("CharacterDetails", { characterId: character.id });
    };

  const handleBackToSearchTap = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <Screen>
      <View style={styles.content}>
        {isMovieDetailsLoading ? (
          <PlaceholderView text={"Loading..."} />
        ) : (
          <>
            {movieDetails ? (
              <View style={{ gap: Spacing.large }}>
                <Text type={"h1"} bold>
                  {movieDetails.name}
                </Text>
                <ContentSectionView title="Opening Crawl">
                  <Text type={"body"}>{movieDetails.openingCrawl}</Text>
                </ContentSectionView>
                <ContentSectionView title="Characters">
                  <View style={styles.charactersWrapper}>
                    {movieDetails.characters.map((character, index) => (
                      <Fragment key={character.id}>
                        <LinkButton
                          text={character.name}
                          onTap={handleCharacterLinkTap(character)}
                        />
                        {index !== movieDetails.characters.length - 1 ? (
                          <Text type={"body"}>, </Text>
                        ) : null}
                      </Fragment>
                    ))}
                  </View>
                </ContentSectionView>
              </View>
            ) : (
              <PlaceholderView
                text={`No movie was found with id ${props.route.params.movieId}`}
              />
            )}
          </>
        )}
      </View>
      <Button text={"Back to search"} onTap={handleBackToSearchTap} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, alignItems: "stretch" },
  charactersWrapper: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
});
