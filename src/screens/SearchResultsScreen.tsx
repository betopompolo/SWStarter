import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { Text } from "@app/components/typography/Text";
import { Divider } from "@app/components/Divider";
import { Colors } from "@app/components/Colors";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { Button } from "@app/components/Button";
import { Screen } from "@app/components/Screen";
import { SearchResult, SearchType, useSearch } from "@app/useSearch";
import { useMemo } from "react";
import { Spacing, SpacingView } from "@app/components/Spacing";

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
    console.log(item);
  };

  const renderItem: ListRenderItem<SearchResult> = ({ item }) => {
    return (
      <View style={{ width: "100%" }}>
        <Text type={"body"} bold>
          {item.title}
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
          <Text type="body" bold color={Colors.gray2} textAlign="center">
            {placeholderText}
          </Text>
        ) : (
          <FlatList data={results} renderItem={renderItem} />
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
