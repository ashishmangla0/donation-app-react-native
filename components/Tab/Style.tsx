import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  tab: {
    padding: 16,
    backgroundColor: "#2979F2",
    justifyContent: "center",
    borderRadius: 50,
  },
  title: {
    flex: 1,
    fontSize: 14,
    lineHeight: 19,
    color: "#ffffff",

    textAlign: "center",
  },
  inActiveTab: {
    backgroundColor: "#F3F5F9",
  },
  inactiveTitle: {
    color: "#79869F",
  },
  singleItem:{
    maxWidth:'50%',
    backgroundColor:'red'
  }

});

export default Style;
