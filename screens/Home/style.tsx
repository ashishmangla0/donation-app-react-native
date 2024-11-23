import { StyleSheet } from "react-native";
// import {
//   horizontalScale,
//   scaleFontSize,
//   verticalScale,
// } from '../../assets/styles/scaling';

const Style = StyleSheet.create({
  header: {
    marginTop: 20,
    // marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIntroText: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#636776",
  },
  username: {
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  searchBox: {
    // marginHorizontal: 24,
    marginTop: 20,
  },
  highlightedImageContainer: {
    // marginHorizontal:24,
    marginTop: 24,
  },
  highlightedImage: {
    width: "100%",
    height: 160,
    marginBottom:24
  },
  categoryHeader: {
    marginHorizontal: 24,
    marginBottom: 16,
    marginTop: 6,
  },
  categories: {
    marginLeft: 24,
  },
  categoryItem: {
    marginRight: 10,
  },
  donationItemsContainer: {
    marginTop: 20,
    // marginHorizontal: 24,
    flexWrap:'wrap',
    flexDirection:'row',
    
  },
  singleItem:{
     width: '50%',
     paddingInline:8,
     marginBottom:16
  }
});

export default Style;
