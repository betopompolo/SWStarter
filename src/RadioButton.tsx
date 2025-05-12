import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "@app/Colors";
import { Text } from "@app/typography/Text";
import { Spacing } from "@app/Spacing";

type RadioButtonProps = {
  isChecked: boolean;
  onTap: () => void;
  label: string;
};

// TODO: Accessibility
export function RadioButton({ isChecked, onTap, label }: RadioButtonProps) {
  return (
    <Pressable style={styles.row} onPress={onTap}>
      <View style={styles.indicator}>
        {isChecked ? (
          <View style={styles.indicatorFill}>
            <View style={styles.dot} />
          </View>
        ) : null}
      </View>
      <Text type={"body"} bold>
        {label}
      </Text>
    </Pressable>
  );
}

// TODO: Reanimated
const indicatorSize = 13;
const dotSize = 3;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xSmall,
  },
  indicator: {
    height: indicatorSize,
    width: indicatorSize,
    borderRadius: indicatorSize / 2,
    borderColor: Colors.gray2,
    borderWidth: 1,
  },
  indicatorFill: {
    position: "absolute",
    height: indicatorSize,
    width: indicatorSize,
    borderRadius: indicatorSize / 2,
    backgroundColor: Colors.selected,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: dotSize,
    width: dotSize,
    borderRadius: dotSize / 2,
    backgroundColor: Colors.white,
  },
});
