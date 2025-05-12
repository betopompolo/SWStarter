import { StyleSheet, View, ViewProps } from "react-native";
import { Spacing } from "@app/components/Spacing";

type ScreenProps = Pick<ViewProps, "children"> & {};

export const Screen = ({ children }: ScreenProps) => {
  return <View style={styles.screen}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: Spacing.large },
});
