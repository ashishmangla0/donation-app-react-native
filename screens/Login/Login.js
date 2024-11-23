import { Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Style from "./Style";
import Button from "../../components/Button/Button";
import { Routes } from "../../navigation/Routes";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlEmailChange = (email) => {
    console.log(email);
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    console.log(password);
  };
  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, { padding: 24 }]}
    >
      <StatusBar />
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header styleType={1} title={"Welcome Back"} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Email"
            keyboardType={"email-address"}
            value={email}
            onChange={handlEmailChange}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Password"
            keyboardType={"default"}
            value={password}
            onChange={handlePasswordChange}
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Login'} />
        </View>
        <Pressable style={Style.registrationButton} onPress={()=>navigation.navigate(Routes.Register)}>
          <Header color={'#156CF7'} styleType={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
