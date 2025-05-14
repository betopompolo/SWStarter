import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Fonts } from "@app/components/typography/Fonts";
import { Colors } from "@app/components/Colors";
import { Spacing } from "@app/components/Spacing";

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

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: Colors.gray1,
    borderWidth: 1,
    padding: Spacing.xSmall,
    fontFamily: Fonts.montserratBold,
    color: Colors.black,
  },
});
