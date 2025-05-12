import { View } from "react-native";
import { Text } from "@app/components/typography/Text";
import { SpacingView } from "@app/components/Spacing";
import { Divider } from "@app/components/Divider";

type ContentSectionViewProps = {
  title: string;
  children: React.ReactNode;
};

export const ContentSectionView = ({
  title,
  children,
}: ContentSectionViewProps) => {
  return (
    <View>
      <Text type={"body"} bold>
        {title}
      </Text>
      <Divider />
      {children}
      <SpacingView space={"large"} />
    </View>
  );
};
