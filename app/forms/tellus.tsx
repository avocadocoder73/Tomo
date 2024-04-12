import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Square, Button } from "tamagui"
import { Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import SvgComponent from "../logo";

export default function TellUs()
{
     const router = useRouter()

    const styles = StyleSheet.create({
        
        text1:{
            fontSize: 40,
            marginTop: -10,
            color:"#7f5539",
            fontWeight:"100",
            textAlign:"left",
            width: 300,
            fontFamily: 'SatoshiVar'
        },
        continuebut:{
            position: "absolute",
            bottom:50,
            width: 300,
            backgroundColor:"#7f5539",
            fontSize: 22,
            height: 45,
            fontWeight: "600",
            fontFamily: 'SatoshiVar',
            alignSelf:"center"
        },
        buttxt:{
            fontSize: 23,
            fontWeight: "900",
            fontFamily: 'SatoshiMed'
        }
    })

    return(<View style={{height:'100%'}}><Pressable style={{alignItems:"center"}} onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10, marginTop:40}}></SvgComponent></Pressable><SafeAreaView>

        <View>
           
            <View style={{display:"flex", alignItems:"center", textAlign:"left"}}>
            <Text style={styles.text1}>Now it's time to tell us a little about yourself!</Text>
            </View>
            <View style={{ alignItems:'center', height:"100%"}}>
            
            
            </View>
        </View>
    </SafeAreaView><Button style={styles.continuebut} onPress={() => router.push('/forms/name')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button></View>)
}