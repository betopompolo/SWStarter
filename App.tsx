import { Navigation } from "@app/Navigation";
import { useEffect } from "react";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { DefaultTheme, Theme as RNTheme } from "@react-navigation/native";
import { Colors } from "@app/Colors";
import { Fonts } from "@app/typography/Fonts";

const SWTheme: RNTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    primary: Colors.primary,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      ...DefaultTheme.fonts.regular,
      fontFamily: Fonts.regular,
    },
    bold: {
      ...DefaultTheme.fonts.bold,
      fontFamily: Fonts.bold,
    },
  },
};

SplashScreen.preventAutoHideAsync().catch(() => null);

export default function App() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().catch(() => null);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Navigation theme={SWTheme} />;
}
