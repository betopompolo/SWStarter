import { StyleSheet, Text as RNText, TextStyle } from "react-native";
import { Fonts } from "./Fonts";
import { ReactNode } from "react";

type TextProps = Pick<TextStyle, "textAlign"> & {
  type: Exclude<keyof typeof styles, "bold">;
  children?: ReactNode;
  bold?: boolean;
  color?: string;
};

export function Text({
  children,
  type,
  bold = false,
  color = "black",
  textAlign,
}: TextProps) {
  return (
    <RNText
      style={[styles[type], bold ? styles.bold : null, { color, textAlign }]}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: Fonts.montserratRegular,
    fontSize: 18,
  },
  body: {
    fontFamily: Fonts.montserratRegular,
    fontSize: 14,
  },
  bold: {
    fontFamily: Fonts.montserratBold,
  },
});
