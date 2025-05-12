import { Navigation } from "@app/Navigation";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { DefaultTheme, Theme as RNTheme } from "@react-navigation/native";
import { Colors } from "@app/components/Colors";
import { Fonts } from "@app/components/typography/Fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLoadAssets } from "@app/useLoadAssets";

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
      fontFamily: Fonts.montserratRegular,
    },
    bold: {
      ...DefaultTheme.fonts.bold,
      fontFamily: Fonts.montserratBold,
    },
  },
};

SplashScreen.preventAutoHideAsync().catch(() => null);
const queryClient = new QueryClient();

export default function App() {
  const { loaded, error } = useLoadAssets();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().catch(() => null);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation theme={SWTheme} />
    </QueryClientProvider>
  );
}
