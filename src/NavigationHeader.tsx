import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Header } from "@react-navigation/elements";
import { Colors } from "@app/Colors";

type NavigationHeaderProps = NativeStackHeaderProps & { title: string };
export const NavigationHeader = (props: NavigationHeaderProps) => {
  return (
    <Header
      {...props}
      title={props.title}
      headerShadowVisible={false}
      headerStyle={{
        backgroundColor: Colors.white,
      }}
      headerTitleAlign="center"
      headerBackgroundContainerStyle={{
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
      }}
    />
  );
};
