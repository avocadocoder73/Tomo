
import { Link , Stack} from "expo-router";
import { Input, Label, View, Select, Text, Button } from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Spinner } from "tamagui";
import { ActivityIndicator } from "react-native";

export default function Creating()
{

    const router = useRouter()

    const styles = StyleSheet.create({
        text1:{
            fontSize: 30,
            
            margin:30,
            color:"#7f5539",
            fontWeight:"100",
            textAlign:"center",
            width: 320,
            fontFamily: 'SatoshiVar'
        }
    })


    return(<View  style={{backgroundColor: "#ecded1", height:'100%'}}><SafeAreaView>
        
       <Pressable onPress={() => router.navigate("/home")}><SvgComponent width={"200px"} style={{marginTop:50, marginBottom:-130, alignSelf:"center"}} ></SvgComponent></Pressable>
       <View style={{display:"flex", alignItems:'center', marginTop: 150}}>
        <ActivityIndicator size={"large"} color={"#7f5539"} ></ActivityIndicator>
        <Text style={styles.text1} >Setting up your profile</Text>        
        </View>
    </SafeAreaView></View>)
}