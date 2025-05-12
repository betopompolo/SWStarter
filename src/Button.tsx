import { Pressable, StyleSheet } from "react-native";
import { Colors } from "@app/Colors";
import { useMemo } from "react";
import { Text } from "@app/typography/Text";

type ButtonProps = {
  text: string;
  onTap: () => void;
  disabled?: boolean;
};
export const Button = ({ text, onTap, disabled = false }: ButtonProps) => {
  const backgroundColor = useMemo(() => {
    if (disabled) {
      return Colors.gray1;
    }

    return Colors.primary;
  }, [disabled]);

  return (
    <Pressable
      onPress={onTap}
      disabled={disabled}
      style={[styles.default, { backgroundColor }]}
      accessibilityRole={"button"}
    >
      <Text type={"body"} bold color={Colors.white}>
        {text.toUpperCase()}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  default: {
    width: "100%",
    height: 35,
    borderRadius: 26.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
