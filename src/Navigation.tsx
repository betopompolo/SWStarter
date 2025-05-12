import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { SearchScreen } from "@app/SearchScreen";
import { NavigationHeader } from "@app/NavigationHeader";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: SearchScreen,
    },
  },
  screenOptions: {
    header: (props) => <NavigationHeader title={"SWStarter"} {...props} />,
  },
});
export const Navigation = createStaticNavigation(RootStack);
