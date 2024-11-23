import { Pressable, Text } from "react-native";
import Style from "./Style";
import { getFontFamily } from "../../assets/fonts/helper";

const Button = (props) => {
  const { title, isDisabled = false, onPress } = props;
  return (
    <Pressable 
    style={[Style.button,isDisabled && Style.disabled]} 
    disabled={isDisabled} 
    onPress={onPress}>
      <Text style={[Style.title, { fontFamily: getFontFamily("500") }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
