import { Link, useRouter } from "expo-router"
import { View, Text, Square, Button, Input, Label } from "tamagui"
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgComponent from "../logo";
import NameTag from "../nametag";

export default function Name()
{

     const styles = StyleSheet.create({
        
        text1:{
            fontSize: 40,
            color:"#7f5539",
            fontWeight:"100",
            width: 280,
            textAlign: "left",
            fontFamily: 'SatoshiVar',
            marginLeft:32,
            height:150,
            marginTop:30
            
            
        },
        inputsize2:{
            width: 323,
            height: 60,
            fontSize: 18,
            
            paddingLeft: 7,
            paddingBottom: 0,
            paddingTop: 12,
            backgroundColor: "#e6ccb2",
            borderTopColor: "#bd9b7d",
            borderRightColor: "#bd9b7d",
            borderBottomColor: "#bd9b7d",
            borderLeftColor: "#bd9b7d",
            color: "#7f5539",
            
        },
        labels:{
            position: "absolute",
            zIndex: 9,
            top: -9,
            left: 35,
            paddingLeft:15,
            
            color: "#ba9b82"
        },
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
        }
     })

    const router = useRouter()
    //<Button style={{marginTop: "50px"}} onPress={() => router.push('/forms/tellus')}></Button>
    return(<View style={{height:"100%"}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView><View>
        <View style={{display:'flex', width: "100%", flexDirection: "row", justifyContent:'center', marginTop:-40}}>
        <View style={{width:100, height:10, backgroundColor:"#B08968", }}></View>
        <View style={{width:100, height:10, backgroundColor:"white", marginRight:10, marginLeft:10 }}></View>
        <View style={{width:100, height:10, backgroundColor:"white"}}></View>
        </View>
        <View>
            <Text style={styles.text1}>What's your preferred name?</Text>
        </View>
        <View style={{marginTop:20, display:'flex', alignItems:'center'}}>
        <Label style={styles.labels}>Name</Label>
        <Input style={styles.inputsize2} borderWidth={2}></Input>
        </View>
        <View style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:-40}}>
            <NameTag></NameTag>
             </View>
        </View>
        
    </SafeAreaView><Button style={styles.continuebut} onPress={() => router.push('/forms/birthday')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button></View>)
}