import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  badge: {
    position: "absolute",
    zIndex: 1,
    top: 13,
    left: 10,
  },
  image: { width:'100%', height: 170, borderRadius: 20 },
  donationInformation: {
    marginTop: 16,
  },
  price: {
    marginTop: 5,
  },
});

export default Style;
