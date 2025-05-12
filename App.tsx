import {Navigation} from "@app/Navigation";
import {useEffect} from "react";
import {Montserrat_400Regular, Montserrat_700Bold, useFonts} from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen';

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

  return <Navigation/>;
}
