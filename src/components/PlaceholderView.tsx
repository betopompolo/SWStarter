import { StyleSheet, View } from "react-native";
import { Colors } from "@app/components/Colors";
import { Text } from "@app/components/typography/Text";

type PlaceholderViewProps = {
  text: string;
};

export const PlaceholderView = ({ text }: PlaceholderViewProps) => {
  return (
    <View style={styles.wrapper}>
      <Text type={"body"} bold textAlign="center" color={Colors.gray2}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
