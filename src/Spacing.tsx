import { View } from "react-native";

export const Spacing = {
  xSmall: 10,
  small: 15,
  medium: 20,
  large: 30,
  xLarge: 36,
};

type SpacingProps = {
  space: keyof typeof Spacing;
};

export function SpacingView({ space }: SpacingProps) {
  return <View style={{ width: Spacing[space], height: Spacing[space] }} />;
}
