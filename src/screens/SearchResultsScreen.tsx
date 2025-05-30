import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { Text } from "@app/components/typography/Text";
import { Divider } from "@app/components/Divider";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { Button } from "@app/components/Button";
import { Screen } from "@app/components/Screen";
import { SearchResult, SearchType, useSearch } from "@app/hooks/useSearch";
import { useMemo } from "react";
import { Spacing, SpacingView } from "@app/components/Spacing";
import { PlaceholderView } from "@app/components/PlaceholderView";

type SearchResultsScreenProps = StaticScreenProps<{
  query: string;
  searchType: SearchType;
}>;

export const SearchResultsScreen = (props: SearchResultsScreenProps) => {
  const navigation = useNavigation();
  const { query, searchType } = props.route.params ?? {};

  const { isSearching, results } = useSearch({
    query,
    type: searchType,
  });

  const placeholderText = useMemo(() => {
    return isSearching
      ? "Searching..."
      : "There are zero matches. Use the form to search for People or Movies.";
  }, [isSearching]);

  const handleDetailsBtnTap = (item: SearchResult) => () => {
    const actionsRecord: Record<SearchType, () => void> = {
      character(): void {
        navigation.navigate("CharacterDetails", { characterId: item.id });
      },
      movie(): void {
        navigation.navigate("MovieDetails", { movieId: item.id });
      },
    };
    actionsRecord[item.type]();
  };

  const renderItem: ListRenderItem<SearchResult> = ({ item }) => {
    return (
      <View style={{ width: "100%" }}>
        <Text type={"body"} bold>
          {item.name}
        </Text>
        <SpacingView space={"small"} />
        <Button text={"See details"} onTap={handleDetailsBtnTap(item)} />
      </View>
    );
  };
  return (
    <Screen>
      <Text type="h1" bold>
        Results
      </Text>
      <Divider />
      <View style={styles.contentWrapper}>
        {isSearching || results.length === 0 ? (
          <PlaceholderView text={placeholderText} />
        ) : (
          <FlatList
            data={results}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Divider space={Spacing.medium} />}
          />
        )}
      </View>
      <Button text={"Back to Search"} onTap={navigation.goBack} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: Spacing.small,
  },
});
