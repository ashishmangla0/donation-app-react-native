import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Style from "./Style";
import globalStyle from "../../assets/styles/globalStyle";
import BackButton from "../../components/BackButton/BuckButton";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
const SingleDonationItem = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  console.log("ashish single");

  console.log(donationItemInformation);
  const categoryInformation = route.params.categoryInformation;

  console.log(categoryInformation);

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, { padding: 24 }]}
    >
        <StatusBar/>
      <ScrollView showsVerticalScrollIndicator={false} style={Style.contaoner}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }}
          style={Style.image}
        />
        <View style={Style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header styleType={1} title={donationItemInformation.name} />
        <Text style={Style.description}>
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={Style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
