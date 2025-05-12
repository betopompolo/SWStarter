import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Header, HeaderTitle } from "@react-navigation/elements";
import { Colors } from "@app/Colors";
import { Fonts } from "@app/typography/Fonts";

type NavigationHeaderProps = NativeStackHeaderProps & { title: string };
export const NavigationHeader = (props: NavigationHeaderProps) => {
  return (
    <Header
      {...props}
      title={props.title}
      headerTintColor={Colors.primary}
      headerShadowVisible={false}
      headerStyle={{
        backgroundColor: Colors.white,
      }}
      headerTitle={(props) => (
        <HeaderTitle {...props} style={{ fontFamily: Fonts.poppinsBold }} />
      )}
      headerBackButtonDisplayMode="minimal"
      headerTitleAlign="center"
      headerBackgroundContainerStyle={{
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
      }}
    />
  );
};
