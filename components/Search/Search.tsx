import { Pressable, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Style from "./Style";
import { getFontFamily } from "../../assets/fonts/helper";
import { useRef, useState } from "react";

const Search = (props) => {
  const { onSearch } = props;
  const [text, setText] = useState("");
  const textInputRef = useRef(null);

  const handleFocus = () => {
    textInputRef?.current?.focus();
  };
  const handleSearch = (searchValue) => {
    setText(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={Style.searchContainer} onPress={handleFocus}>
      <FontAwesome name="search" size={22} color={"#25C0FF"} />
      <TextInput
        value={text}
        ref={textInputRef}
        onChangeText={handleSearch}
        placeholder="Search"
        style={[Style.search, { fontFamily: getFontFamily("400") }]}
      />
    </Pressable>
  );
};

export default Search;
