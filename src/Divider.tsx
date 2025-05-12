import { StyleSheet, View } from "react-native";
import { Colors } from "@app/Colors";
import { Spacing } from "@app/Spacing";

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.gray2,
    marginVertical: Spacing.xxSmall,
  },
});
