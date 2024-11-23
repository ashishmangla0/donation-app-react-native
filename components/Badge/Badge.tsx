import { Pressable, Text, View } from "react-native";
import Style from "./Style";
import { getFontFamily } from "../../assets/fonts/helper";
import { useRef, useState } from "react";

const Badge = (props) => {
  const { title, onPress, isInactive = false } = props;
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;

  return (
    <View style={Style.badgeWrap}>
      <View style={Style.badge}>
        <Text style={[Style.title, { fontFamily: getFontFamily("600") }]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Badge;
