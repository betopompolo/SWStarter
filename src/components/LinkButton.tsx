import { Pressable } from "react-native";
import { Text } from "@app/components/typography/Text";
import { Colors } from "@app/components/Colors";

type LinkButtonProps = {
  text: string;
  onTap: () => void;
};

export const LinkButton = ({ text, onTap }: LinkButtonProps) => {
  return (
    <Pressable accessibilityRole={"button"} onPress={onTap}>
      <Text type={"body"} color={Colors.selected}>
        {text}
      </Text>
    </Pressable>
  );
};
