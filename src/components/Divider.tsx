import { StyleSheet, View } from "react-native";
import { Colors } from "@app/components/Colors";
import { Spacing } from "@app/components/Spacing";

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
