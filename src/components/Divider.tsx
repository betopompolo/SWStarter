import { StyleSheet, View } from "react-native";
import { Colors } from "@app/components/Colors";
import { Spacing } from "@app/components/Spacing";

type DividerProps = {
  space?: number;
};
export const Divider = ({ space = Spacing.xxSmall }: DividerProps) => {
  return <View style={[styles.divider, { marginVertical: space }]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.gray2,
  },
});
