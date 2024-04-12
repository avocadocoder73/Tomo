import { SafeAreaView } from "react-native-safe-area-context";
import { View, Button, Text, Separator } from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";


export default function NowLets()
{
    const router = useRouter()

    const styles = StyleSheet.create({
        continuebut:{
            position: "absolute",
            bottom:50,
            alignSelf:"center",
            
            width: 300,
            backgroundColor:"#7f5539",
            fontSize: 22,
            height: 45,
            fontWeight: "600",
            fontFamily: 'SatoshiVar'
        },
         buttxt:{
            fontSize: 23,
            fontWeight: "900",
            fontFamily: 'SatoshiMed'
        },
        text1:{
            fontSize: 40,
            marginTop: -10,
            color:"#7f5539",
            fontWeight:"100",
            textAlign:"left",
            width: 330,
            fontFamily: 'SatoshiVar'
        },
        text2:{
            fontFamily: 'SatoshiBold'
        }
    })

    return(<View style={{height:"100%"}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView>

        <View style={{display:"flex", alignItems:"center", textAlign:"left"}}>
            <Text style={styles.text1}>Now let's figure out your interests!</Text>
        </View>
        <View style={{display:"flex", flexDirection:"row", marginTop:15, width:"85%"}}>
            <Separator zIndex={99} borderColor={"white"} borderWidth={2}  vertical marginHorizontal={15}></Separator>
            <Text style={styles.text2}>You can select up to 15 interests with a minimum of 5 interests.The more you select the easier it is to match with people similar to you!</Text>
        </View>

    </SafeAreaView>
    <Button style={styles.continuebut} onPress={() => router.push('/forms/picksomeint')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button>
    </View>)
}