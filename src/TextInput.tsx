import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Fonts } from "@app/typography/Fonts";
import { Colors } from "@app/Colors";
import { Spacing } from "@app/Spacing";

type TextInputProps = Pick<
  RNTextInputProps,
  "placeholder" | "onChangeText" | "value"
>;

export function TextInput({
  value,
  onChangeText,
  placeholder,
}: TextInputProps) {
  return (
    <RNTextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
    />
  );
}

// TODO: Android
const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: Colors.gray1,
    borderWidth: 1,
    padding: Spacing.xSmall,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
});
