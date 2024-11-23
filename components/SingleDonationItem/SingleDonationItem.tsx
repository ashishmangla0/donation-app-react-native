import { Image, Pressable, Text, View } from "react-native";
import Header from "../Header/Header";
import Badge from "../Badge/Badge";
import Style from "./Style";

const SingleDonationItem = (props) => {
  const { badgeTitle = "", uri = "", donationTitle = "", price = 20,onPress,donationItemId } = props;  
  return (
    <Pressable
    onPress={onPress}>
      <View>
        <View style={Style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{ uri: uri }} style={Style.image}  resizeMode={'cover'}/>
      </View>
      <View style={Style.donationInformation}>
        <Header title={donationTitle} styleType={3} color={"#0A043C"}   numberOfLines={1} />
        <View style={Style.price}>
          <Header
            title={"$" + price?.toFixed(2)}
            styleType={3}
            color={"#156CF7"}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
