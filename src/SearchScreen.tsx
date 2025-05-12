import {StyleSheet, Text, View} from "react-native";
import {Body} from "@app/Typography";
import {TextInput} from "@app/TextInput";
import {Colors} from "@app/Colors";
import {Spacing} from "@app/Spacing";

export function SearchScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.searchView}>
        <Body>What are you searching for?</Body>
        <View style={{flexDirection: 'row'}}>
          <Text>People</Text>
          <Text>Movies</Text>
        </View>

        <TextInput placeholder={"e.g. Chewbacca, Yoda"} />
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
});
