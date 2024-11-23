import { Pressable, SafeAreaView, ScrollView } from "react-native"
import globalStyle from "../../assets/styles/globalStyle"
import Button from "../Button/Button"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Style from "./Style";


const BackButton = (props) =>{
    const {onPress} = props
return(
    <Pressable onPress={onPress} style={Style.container}>
       <FontAwesome6 name="arrow-left" size={24} color="black" />
    </Pressable>
)
}

export default BackButton