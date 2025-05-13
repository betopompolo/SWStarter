import { StyleSheet, View } from "react-native";
import { TextInput } from "@app/components/TextInput";
import { Spacing, SpacingView } from "@app/components/Spacing";
import { Text } from "@app/components/typography/Text";
import { RadioButton } from "@app/components/RadioButton";
import { useState } from "react";
import { Button } from "@app/components/Button";
import { SearchType } from "@app/hooks/useSearch";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/Screen";

export function SearchScreen() {
  const [searchType, setSearchType] = useState<SearchType>("character");
  const [query, setQuery] = useState("");
  const navigation = useNavigation();

  const handleCharRadioBtnTap = () => {
    setSearchType("character");
  };

  const handleMoviesRadioBtnTap = () => {
    setSearchType("movie");
  };

  const handleSearchButtonTap = () => {
    navigation.navigate("SearchResults", { query, searchType });
  };

  return (
    <Screen>
      <Text type="body">What are you searching for?</Text>
      <SpacingView space="medium" />
      <View style={styles.radioGroup}>
        <RadioButton
          isChecked={searchType === "character"}
          onTap={handleCharRadioBtnTap}
          label={"People"}
        />
        <RadioButton
          isChecked={searchType === "movie"}
          onTap={handleMoviesRadioBtnTap}
          label={"Movies"}
        />
      </View>
      <TextInput
        placeholder={"e.g. Chewbacca, Yoda"}
        value={query}
        onChangeText={setQuery}
      />
      <View style={styles.spacer} />
      <Button
        text={"Search"}
        onTap={handleSearchButtonTap}
        disabled={!query.length}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
  radioGroup: {
    flexDirection: "row",
    gap: Spacing.xLarge,
    marginBottom: Spacing.small,
  },
});
