import {StyleSheet, Text, TextProps} from "react-native";


type BodyProps = Pick<TextProps, 'children'>;

export function Body({children}: BodyProps) {
  return (
    <Text style={styles.body}>
      {children}
    </Text>
  );
}

export const Fonts = {
  regular: 'Montserrat_400Regular',
  bold: 'Montserrat_700Bold',
}

export const styles = StyleSheet.create({
  body: {
    fontFamily: Fonts.regular,
  },
});
