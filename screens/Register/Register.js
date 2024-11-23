import { Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Style from "./Style";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BuckButton";

const Register = ({navigation}) => {

const initalState = {
  fullname:'',
  email:'',
  password:''
}
const [registerValues,setRegisterValues] = useState(initalState);



const handleRegisterChanges = (field, value) =>{
  setRegisterValues((prev) => ({
    ...prev,
    [field]: value, // Update only the specific field
}));
}





  const handleFormSubmit = () =>{
    console.log(initalState);
    console.log(registerValues);
    
  }


  
  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, { padding: 24 }]}
    >
      <StatusBar />
      <View style={Style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header styleType={1} title={"Hello and Welcome !"} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Full name"
            keyboardType={"default"}
            value={registerValues.fullname}
            onChange={(value)=> handleRegisterChanges('fullname',value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Email"
            keyboardType={"email-address"}
            value={registerValues.email}
            onChange={(value)=> handleRegisterChanges('email',value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="Password"
            keyboardType={"default"}
            value={registerValues.password}
            onChange={(value)=> handleRegisterChanges('password',value)}
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Register'} onPress={handleFormSubmit} />
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
