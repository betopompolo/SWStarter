import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { SearchScreen } from "@app/screens/SearchScreen";
import { NavigationHeader } from "@app/components/NavigationHeader";
import { SearchResultsScreen } from "@app/screens/SearchResultsScreen";
import { MovieDetailsScreen } from "@app/screens/MovieDetailsScreen";
import { CharacterDetailsScreen } from "@app/screens/CharacterDetailsScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: SearchScreen,
    },
    SearchResults: {
      screen: SearchResultsScreen,
    },
    MovieDetails: {
      screen: MovieDetailsScreen,
    },
    CharacterDetails: {
      screen: CharacterDetailsScreen,
    },
  },
  screenOptions: {
    header: (props) => <NavigationHeader title={"SWStarter"} {...props} />,
  },
  initialRouteName: "Home",
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line  @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
