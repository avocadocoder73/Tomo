import { View, Stack, Button, Form, Text, Image, Card, Separator, Group, Circle } from "tamagui";
import { SafeAreaView, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import SvgComponent from "./logo";
import { LinearGradient } from 'expo-linear-gradient';
import { AppleButton } from '@invertase/react-native-apple-authentication';


export default function Login()
{

    const styles = StyleSheet.create({
        fonts:{
            fontSize: 35,
            color: "#DDB892",
            fontFamily:"SatoshiMed"
        },
         background: {
        position: 'absolute',
        right: 0,
        left: 0,
        height: 180,
        bottom: 0,
        transform: "scaleY(-1)"
        },
        centerfont:{
            fontSize: 60,
            color: "#DDB892",
            marginTop: 5,
            fontFamily:"SatoshiBold"
        },
        form:{
            marginTop: 10,
            display:"flex",
            
            alignItems:"center"
        },
        SignUp:{
            backgroundColor: "#B08968",
            fontSize: 20,
            marginTop: 40,
            width: 260,
            marginBottom: 25,
            color: "#DDB892",
        },
        Sep:{
            backgroundColor: "#B08968"
        },
        Social:{
            backgroundColor: "#DDB892",
            fontSize: 20,
            marginTop: 25,
            width: 320,
            marginBottom: 5,
            color: "#B08968",
        },
        Forgot: {
            marginTop: 10,
            fontSize: 18,
            color: "#B08968",
        },
        Terms:{
            marginTop: 95,
            fontSize: 12,
            width: 250,
            textAlign: "center",
            color: "#ddb892"
        }
    })

    const router = useRouter()


    function onApplePress()
    {
        console.log("LOGGING INTO APPLE")
    }
    

    return(<View><LinearGradient 
        colors={['#885f43', '#ede0d4']}
        style={styles.background}
        
      />
      <SafeAreaView style={{display:'flex', justifyContent:"center", alignItems:"center"}}><View style={{height:"100%", width:"100%", display:"flex", alignItems:"center"}}>
           
            <SvgComponent width={"100px"}></SvgComponent>
            <Form style={styles.form} onSubmit={() => console.log("TEST")}>

            <View style={{display:"flex", flexDirection:"row", alignItems:"center", width:"50%", justifyContent:"space-between"}}>
                <View style={{width:"100px"}}><Separator borderColor={"#DDB892"} borderWidth={"1px"} borderRightWidth={"50px"}  ></Separator></View>
                <View>
                
                <Circle size={30} backgroundColor={"white"} ></Circle>
                
                </View>
            <View style={{width:"100px"}}><Separator borderColor={"#DDB892"} borderWidth={"1px"} borderLeftWidth={"50px"}></Separator></View>
            </View>
            <View style={{marginTop:40, marginBottom:-40, display:"flex", alignItems:'center'}}>
            <Text style={styles.fonts}>Welcome to</Text>
            <Text style={styles.centerfont}>Tomo</Text>
            </View>
           

            
            
            <Button onPress={() => router.push('/forms/picksomeint')} style={styles.SignUp}>Sign Up For Free</Button>
                  
            
           
            <View style={{display:"flex", flexDirection:"row", alignItems:"center", width:"50%", justifyContent:"space-between"}}>
                <View style={{width:"100px"}}><Separator borderColor={"#DDB892"} borderWidth={"1px"} borderRightWidth={"70px"}  ></Separator></View>
                <Text style={{fontSize:20, color:"#DDB892"}}>or</Text>
            <View style={{width:"100px"}}><Separator borderColor={"#DDB892"} borderWidth={"1px"} borderRightWidth={"70px"}></Separator></View>
            </View>
            <View>

                <Button style={styles.Social}>Continue with Apple</Button>
                <Button style={styles.Social}>Continue with Google</Button>
                <Button style={styles.Social} >Continue with Phone #</Button>
            </View>
            <View>
                <Text style={styles.Forgot}>Forgot Password?</Text>
            </View>
            <View>
                <Text style={styles.Terms}>By signing up for Tomo, you agree to our Terms and Privacy Policy</Text>
            </View>
            </Form>
        
    </View></SafeAreaView></View>)
}