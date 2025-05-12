import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";
import { Fonts } from "./Fonts";

type TextProps = Pick<RNTextProps, "children"> & {
  type: Exclude<keyof typeof styles, "bold">;
  bold?: boolean;
};

export function Text({ children, type, bold = false }: TextProps) {
  return (
    <RNText style={[styles[type], bold ? styles.bold : null]}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  bold: {
    fontFamily: Fonts.bold,
  },
});
