import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { SearchScreen } from "@app/SearchScreen";
import { NavigationHeader } from "@app/NavigationHeader";
import { SearchResultsScreen } from "@app/SearchResultsScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: SearchScreen,
    },
    SearchResults: {
      screen: SearchResultsScreen,
    },
  },
  screenOptions: {
    header: (props) => <NavigationHeader title={"SWStarter"} {...props} />,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
