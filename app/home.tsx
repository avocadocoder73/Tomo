import { View, Stack, Button, Form, Text, Image, Card, Separator, Group, Circle } from "tamagui";
import { SafeAreaView, Pressable, Platform } from "react-native";
import { Link, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import SvgComponent from "./logo";
import { LinearGradient } from 'expo-linear-gradient';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import * as AppleAuthentication from 'expo-apple-authentication';



export default function Login()
{

    const styles = StyleSheet.create({
        fonts:{
            fontSize: 35,
            color: "#DDB892",
            fontFamily:"SatoshiBold"
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
            marginTop: -25,
            marginBottom:25,
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
            marginTop: 85,
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
           
            <SvgComponent width={"150px"}></SvgComponent>
         

           
            <View style={{marginTop:10, marginBottom:-35, display:"flex", alignItems:'center', }}>
            <Text style={styles.fonts}>Welcome to</Text>
            <View style={{position:"absolute", width:3, height:35, backgroundColor:"white", top: 0, zIndex:"-1"}}></View>
            <View style={{position:"absolute", width:3, height:35, backgroundColor:"white", top: 10, left:65, transform:"rotate(-45deg)", zIndex:"-1"}}></View>
            <View style={{position:"absolute", width:3, height:35, backgroundColor:"white", top: 10, left:125, transform:"rotate(45deg)",zIndex:"-1"}}></View>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}><View style={{width:55, height:3, backgroundColor:"white",  marginRight:10}}></View><Circle size={30} backgroundColor={"white"} ></Circle><View style={{width:55, height:3, backgroundColor:"white", marginLeft:10}}></View></View>
            <View style={{position:"absolute", width:3, height:35, backgroundColor:"white", top: 80, zIndex:"-1"}}></View>
            <View style={{position:"absolute", width:3, height:35, backgroundColor:"white", top: 70, left:65, transform:"rotate(45deg)", zIndex:"-1"}}></View>
            <View style={{position:"absolute", width:3, height:35, backgroundColor:"white", top: 70, left:125, transform:"rotate(-45deg)", zIndex:"-1"}}></View>
            <Text style={styles.centerfont}>Tomo</Text>
            </View>
           

            
            
            <Button onPress={() => router.push('/signup')} style={styles.SignUp}>Sign Up For Free</Button>
                  
            
           
            <View style={{display:"flex", flexDirection:"row", alignItems:"center", width:"50%", justifyContent:"space-between"}}>
                <View style={{width:"100px"}}><Separator borderColor={"#DDB892"} borderWidth={"1px"} borderRightWidth={"70px"}  ></Separator></View>
                <Text style={{fontSize:20, color:"#DDB892"}}>or</Text>
            <View style={{width:"100px"}}><Separator borderColor={"#DDB892"} borderWidth={"1px"} borderRightWidth={"70px"}></Separator></View>
            </View>
            <View>

                <AppleAuthentication.AppleAuthenticationButton style={{width:320, height:44, marginTop: 25,}} cornerRadius={10} buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE} onPress={() => console.log("TEST")}/>
                 <Button style={styles.Social} >Continue with Google</Button>
                <Button style={styles.Social} >Continue with Phone #</Button>
            </View>
            <View>
                <Text style={styles.Forgot}>Forgot Password?</Text>
            </View>
            <View>
                <Text style={styles.Terms}>By signing up for Tomo, you agree to our Terms and Privacy Policy</Text>
            </View>
            
        
    </View></SafeAreaView></View>)
}