import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Style from "./style";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Search from "../../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../redux/store";
import { updateSelectedCatgoryId } from "../../redux/reducers/categoriesSlice";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { updateSelectedDonationId } from "../../redux/reducers/donationSlice";
import { Routes } from "../../navigation/Routes";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const donations = useSelector((state) => state.donations);
  const user = useSelector((state) => state.user);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false); // New state

  const categoryPageSize = 4;

  const [donationItems, setDonationItems] = useState([]);

  const handleClick = (value) => {
    dispatch(updateSelectedCatgoryId(value));
  };

  useEffect(() => {
    const items = donations.items;

    const filteredItems = items.filter((value) =>
      value.categoryIds.includes(categories?.selectedCategoryId)
    );

    setDonationItems(filteredItems);
  }, [categories?.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    // Simulate loading delay with a timer
    setTimeout(() => {
      const newData = pagination(
        categories?.categories,
        categoryPage,
        categoryPageSize
      );
      setCategoryList(newData);
      setCategoryPage((prev) => prev + 1);
      setIsLoadingCategories(false);

      // Check if fully loaded
      if (newData.length === categories?.categories?.length) {
        setIsFullyLoaded(true);
      }
    }, 2000);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  const handleEndReached = () => {
    if (isLoadingCategories || isFullyLoaded) {
      return;
    }
    setIsLoadingCategories(true);

    setTimeout(() => {
      const newData = pagination(
        categories.categories,
        categoryPage,
        categoryPageSize
      );
      if (newData.length > 0) {
        setCategoryList((prevState) => [...prevState, ...newData]);
        setCategoryPage((prevState) => prevState + 1);

        // Check if fully loaded
        if (
          [...categoryList, ...newData].length ===
          categories?.categories?.length
        ) {
          setIsFullyLoaded(true);
        }
      }
      setIsLoadingCategories(false);
    }, 1500);
  };

  const renderFooter = () => {
    return isLoadingCategories && <ActivityIndicator size={"large"} />;
  };

  const handleSingleItemClick = (donationItemId,categoryInformation) => {
    console.log("handle click");
    console.log(donationItemId);

    dispatch(updateSelectedDonationId(donationItemId));
    navigation.navigate(Routes.SingleDonationItem, {
      categoryInformation
    });
  };

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, { padding: 24 }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>{isLoadingCategories ? "loading" : "done"}</Text>
        </View>
        <View style={Style.header}>
          <View>
            <Text style={Style.headerIntroText}>Hello,</Text>
            <View style={Style.username}>
              <Header title={`${user.firstname} ${user.lastname}. 👋`} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={Style.profileImage}
            resizeMode={"contain"}
          />
        </View>
        <View style={Style.searchBox}>
          <Search />
        </View>
        <Pressable style={Style.highlightedImageContainer}>
          <Image
            style={Style.highlightedImage}
            source={require("../../assets/images/highlighted_image.png")}
            resizeMode={"contain"}
          />
        </Pressable>
        <View style={Style.categoryHeader}>
          <Header title={"Select Category"} styleType={2} />
        </View>
        <View>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={handleEndReached}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <View style={Style.categoryItem} key={item?.categoryId}>
                <Tab
                  tabId={item?.categoryId}
                  onPress={handleClick}
                  title={item?.name}
                  isInactive={
                    item?.categoryId !== categories?.selectedCategoryId
                  }
                />
              </View>
            )}
            ListFooterComponent={renderFooter}
          />
        </View>

        <View style={Style.donationItemsContainer}>
          {donationItems?.map((singleItem) => {
            const categoryInformation = categories.categories.find(
              (val) => val.categoryId === categories.selectedCategoryId
            );
            return (
              <View style={Style.singleItem}>
                <SingleDonationItem
                  donationItemId={singleItem.donationItemId}
                  onPress={() =>
                    handleSingleItemClick(singleItem.donationItemId,categoryInformation)
                  }
                  key={singleItem.donationItemId}
                  uri={singleItem.image}
                  donationTitle={singleItem.name}
                  price={parseFloat(singleItem.price)}
                  badgeTitle={
                    categories.categories.filter(
                      (val) => val.categoryId === categories.selectedCategoryId
                    )[0].name
                  }
                />
              </View>
            );
          })}
        </View>

        {/* Display this when fully loaded */}
        {/* {isFullyLoaded && (

          <Text style={{ textAlign: "center", marginTop: 10 }}>
            All categories loaded 🎉
          </Text>

        )} */}

        <Button title="clear memory" onPress={() => persistor.purge()}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
