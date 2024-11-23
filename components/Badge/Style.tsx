import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  badgeWrap: {
    flexDirection: "row",
  },
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#145855",
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  title: {
    fontSize: 10,
    lineHeight: 12,
    color: "#ffffff",
    textAlign: "center",
  }
});

export default Style;
