import { StyleSheet, View } from "react-native";
import { Screen } from "@app/components/Screen";
import {
  CharacterDetails,
  useCharacterDetails,
} from "@app/hooks/useCharacterDetails";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { Text } from "@app/components/typography/Text";
import { Colors } from "@app/components/Colors";
import { Spacing } from "@app/components/Spacing";
import { ContentSectionView } from "@app/components/ContentSectionView";
import { Button } from "@app/components/Button";
import { Fragment } from "react";
import { LinkButton } from "@app/components/LinkButton";

type CharacterDetailsScreenProps = StaticScreenProps<{
  characterId: string;
}>;

export const CharacterDetailsScreen = (props: CharacterDetailsScreenProps) => {
  const { characterDetails, isCharacterDetailsLoading } = useCharacterDetails(
    props.route.params.characterId,
  );
  const navigation = useNavigation();

  const handleMovieLinkTap = (movie: CharacterDetails["movies"][0]) => () => {
    navigation.navigate("MovieDetails", { movieId: movie.id });
  };

  const handleBackToSearchTap = () => {
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <View style={styles.content}>
        {isCharacterDetailsLoading ? (
          <Text type={"body"} bold textAlign="center" color={Colors.gray2}>
            Loading
          </Text>
        ) : (
          <>
            {characterDetails ? (
              <View style={styles.content}>
                <Text type={"h1"} bold>
                  {characterDetails.name}
                </Text>
                <ContentSectionView title="Details">
                  <Text type={"body"}>
                    Birth Year: {characterDetails.birthYear}
                  </Text>
                  <Text type={"body"}>Gender: {characterDetails.gender}</Text>
                  <Text type={"body"}>
                    Eye Color: {characterDetails.eyeColor}
                  </Text>
                  <Text type={"body"}>
                    Hair Color: {characterDetails.hairColor}
                  </Text>
                  <Text type={"body"}>Height: {characterDetails.height}</Text>
                  <Text type={"body"}>Mass: {characterDetails.mass}</Text>
                </ContentSectionView>
                <ContentSectionView title="Movies">
                  <View style={styles.moviesWrapper}>
                    {characterDetails.movies.map((movie, index) => (
                      <Fragment key={movie.id}>
                        <LinkButton
                          text={movie.name}
                          onTap={handleMovieLinkTap(movie)}
                        />
                        {index !== characterDetails.movies.length - 1 ? (
                          <Text type={"body"}>, </Text>
                        ) : null}
                      </Fragment>
                    ))}
                  </View>
                </ContentSectionView>
              </View>
            ) : (
              <Text type={"body"} bold textAlign="center" color={Colors.gray2}>
                No character was found with id {props.route.params.characterId}
              </Text>
            )}
          </>
        )}
      </View>
      <Button text={"Back to search"} onTap={handleBackToSearchTap} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: Spacing.large,
  },
  moviesWrapper: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
});
