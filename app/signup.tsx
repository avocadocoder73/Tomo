import { Link , Stack} from "expo-router";
import { Input, Label, View, Select, Text, Button } from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "./logo";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function SignUp()
{

    const router = useRouter()

    const styles = StyleSheet.create({
        inputs:{
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 150
        },
        inputsize:{
            width: 300,
            height: 60,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0.1,
            fontSize: 18,
            paddingLeft: 7,
            paddingBottom: 0,
            paddingTop: 12,
            backgroundColor: "#e6ccb2",
            borderRightColor: "#bd9b7d",
            borderTopColor: "#bd9b7d",
            borderLeftColor: "#bd9b7d",
             color: "#7f5539",
        },
        inputsize2:{
            width: 300,
            height: 60,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
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
            left: 12,
            color: "#ba9b82"
        },
        Text:{
            marginTop: 5,
            width: 315,
            color: "#ba9b82"
        },
        Text2:{
            
            color:"#ba9b82"
        },
        But:{
            backgroundColor: "#7f5539",
            width: 300,
            marginTop: 20,
            height: 50,
            fontSize: 23,
            textAlign: "center"
        }
    })

    return(<View  style={{backgroundColor: "#ecded1", height:'100%'}}><SafeAreaView>
        
        <Pressable onPress={() => router.navigate('/home')} ><SvgComponent width={"200px"} style={{marginTop:50, marginBottom:-130, alignSelf:"center"}} ></SvgComponent></Pressable>
        <View style={styles.inputs}>
        
        <View>
        <Label style={styles.labels}>Country/Region </Label>
        <Input style={styles.inputsize} borderWidth={2} >
        

        </Input>
        </View>
        <View>
        <Label style={styles.labels}>Phone Number</Label>
        <Input keyboardType="numeric" maxLength={10} style={styles.inputsize2} borderWidth={2}></Input>
        
        </View>
         <Text style={styles.Text}>We'll text you a confirmation number. Standard</Text>
         <Text style={styles.Text2}>message and data rates apply.</Text> 
        </View>
        <View style={{display:"flex", alignItems:"center"}}>
       <Button style={styles.But} onPress={() => router.push('/forms/tellus')}>Continue</Button>
       </View>
    </SafeAreaView></View>)
}