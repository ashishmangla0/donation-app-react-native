import { Pressable, Text } from "react-native";
import Style from "./Style";
import { getFontFamily } from "../../assets/fonts/helper";
import { useRef, useState } from "react";

const Tab = (props) => {
  const { title, onPress, isInactive = false, tabId } = props;

  // const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  // const paddingHorizontal = 33;
  // const handleSetWidth = (e) => {
  //   setWidth(e?.nativeEvent?.lines[0]?.width);
  // };

  // const tabWidth = {
  //   width: paddingHorizontal * 2 + width,
  // };

  return (
    <Pressable
      // style={[Style.tab, isInactive && Style.inActiveTab, tabWidth]}
        style={[Style.tab, isInactive && Style.inActiveTab]}
      onPress={() => onPress(tabId)}
    >
      <Text
        style={[
          Style.title,
          { fontFamily: getFontFamily("500") },
          isInactive && Style.inactiveTitle,
        ]}
        ref={textRef}
        // onTextLayout={handleSetWidth}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
