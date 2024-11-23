import { Text } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import Style from "./Style";

export type headerType = {
  title?: string;
  styleType?: any;
  color?: any;
};

const Header = (props: headerType) => {
  const { title, styleType, color, numberOfLines } = props;

  const applyStyleType = (styleType: any) => {
    switch (styleType) {
      case 1:
        return Style.title;
      case 2:
        return Style.titleSecond;
      case 3:
        return Style.titleThired;
      default:
        return Style.title;
    }
  };
  return (
    <Text
      style={[
        applyStyleType(styleType),
        { fontFamily: getFontFamily("600") },
        color && { color: color },
        
      ]}
      numberOfLines={numberOfLines}
    >
      {title}
    </Text>
  );
};

export default Header;
