import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";
import {SearchScreen} from "@app/SearchScreen";


const RootStack = createNativeStackNavigator({
  screens: {
    Home: SearchScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
