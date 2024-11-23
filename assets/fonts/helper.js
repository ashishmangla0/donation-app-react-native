import { useFonts } from "expo-font";

export const getFontFamily = (weight="400",baseFont="Inter", ) => {
  const [fontIsLoaded] = useFonts({
    "Inter-Thin": require("./inter/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("./inter/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./inter/Inter-Light.ttf"),
    "Inter-Regular": require("./inter/Inter-Regular.ttf"),
    "Inter-Medium": require("./inter/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./inter/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./inter/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./inter/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./inter/Inter-Black.ttf"),
  });

  if (!fontIsLoaded) {
    return "";
  }

  switch (weight) {
    case "100":
      return `${baseFont}-Thin`;
    case "200":
      return `${baseFont}-ExtraLight`;
    case "300":
      return `${baseFont}-Light`;
    case "400":
      return `${baseFont}-Regular`;
    case "500":
      return `${baseFont}-Medium`;
    case "600":
      return `${baseFont}-SemiBold`;
    case "700":
      return `${baseFont}-Bold`;
    case "800":
      return `${baseFont}-ExtraBold`;
    case "900":
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
