import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

export const useLoadAssets = () => {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Poppins_700Bold,
  });

  return {
    loaded,
    error,
  };
};
