import {StyleSheet, View} from "react-native";
import {TextInput} from "@app/TextInput";
import {Colors} from "@app/Colors";
import {Spacing} from "@app/Spacing";
import {Text} from "@app/typography/Text";
import {RadioButton} from "@app/RadioButton";
import {useState} from "react";

export function SearchScreen() {
  const [isMovieSearch, setIsMovieSearch] = useState(false);

  const handlePeopleRadioBtnTap = () => {
    setIsMovieSearch(false);
  }

  const handleMoviesRadioBtnTap = () => {
    setIsMovieSearch(true);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.searchView}>
        <Text type='body'>What are you searching for?</Text>
        <View style={styles.radioGroup}>
          <RadioButton isChecked={!isMovieSearch} onTap={handlePeopleRadioBtnTap} label={'People'} />
          <RadioButton isChecked={isMovieSearch} onTap={handleMoviesRadioBtnTap} label={'Movies'} />
        </View>

        <TextInput placeholder={"e.g. Chewbacca, Yoda"}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchView: {
    padding: Spacing.medium,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: Spacing.large,
  }
});
