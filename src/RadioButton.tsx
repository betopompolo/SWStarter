import React from "react";
import {Pressable, StyleSheet, View} from "react-native";
import {Colors} from "@app/Colors";
import {Text} from "@app/typography/Text";
import {Spacing} from "@app/Spacing";

type RadioButtonProps = {
  isChecked: boolean;
  onTap: () => void;
  label: string;
};

// TODO: Accessibility
export function RadioButton({isChecked, onTap, label}: RadioButtonProps) {
  return (
    <Pressable style={styles.row} onPress={onTap}>
      <View style={styles.indicator}>
        {isChecked ? <View style={styles.indicatorChecked} /> : null}
      </View>
      <Text type={'body'} bold>{label}</Text>
    </Pressable>
  );
}

// TODO: Reanimated
const indicatorSize = 13;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xSmall,
  },
  indicator: {
    height: indicatorSize,
    width: indicatorSize,
    borderRadius: indicatorSize / 2,
    borderColor: Colors.gray2,
    borderWidth: 1,
  },
  indicatorChecked: {
    position: 'absolute',
    height: indicatorSize,
    width: indicatorSize,
    borderRadius: indicatorSize / 2,
    backgroundColor: Colors.primary,
  }
})
