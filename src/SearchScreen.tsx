import { StyleSheet, View } from "react-native";
import { TextInput } from "@app/TextInput";
import { Spacing, SpacingView } from "@app/Spacing";
import { Text } from "@app/typography/Text";
import { RadioButton } from "@app/RadioButton";
import { useState } from "react";

export function SearchScreen() {
  const [isMovieSearch, setIsMovieSearch] = useState(false);

  const handlePeopleRadioBtnTap = () => {
    setIsMovieSearch(false);
  };

  const handleMoviesRadioBtnTap = () => {
    setIsMovieSearch(true);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchView}>
        <Text type="body">What are you searching for?</Text>
        <SpacingView space="medium" />
        <View style={styles.radioGroup}>
          <RadioButton
            isChecked={!isMovieSearch}
            onTap={handlePeopleRadioBtnTap}
            label={"People"}
          />
          <RadioButton
            isChecked={isMovieSearch}
            onTap={handleMoviesRadioBtnTap}
            label={"Movies"}
          />
        </View>
        <TextInput placeholder={"e.g. Chewbacca, Yoda"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  searchView: {
    padding: Spacing.large,
  },
  radioGroup: {
    flexDirection: "row",
    gap: Spacing.xLarge,
    marginBottom: Spacing.small,
  },
});
