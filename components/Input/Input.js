import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Style from "./Style";

const Input = (props) => {
  const { label = "", placeholder = "",secureTextEntry=false,keyboardType,value="",onChange } = props;
 
  return (
    <View>
      <Text style={Style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={Style.input}
        onChangeText={onChange}
        
      />
    </View>
  );
};

export default Input;
