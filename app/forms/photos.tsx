
import { View, Button, Circle, Text } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable } from "react-native";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from "react";
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  SharedValue,
  withSpring,
  useAnimatedGestureHandler
} from 'react-native-reanimated';
import {PhotoRect} from "./draggable";
import ProfilePicture from "./profilepicture";

export default function Photos()
{

    const [image, setImage] = useState([] as any);

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
        rectangle:{
            width:100,
            height:150,
            backgroundColor:"#e6ccb2",
            borderRadius:7,
            borderColor:"#7f5539",
            borderWidth:3,
            marginLeft:23,
            marginBottom:20
        },
        circle:{
            
            borderWidth:3,
            borderColor:"#7f5539",
            backgroundColor:"#e6ccb2"
        },
        insidecir:{
            position:"absolute",
            top:122,
            backgroundColor:"#7f5539",
            borderWidth:3,
            borderColor:"#e6ccb2",
            
           
        },
        plus1:{
            width:2,
            height:15,
            backgroundColor:"#e6ccb2"
        },
        plus2:{
            width:15,
            height:2,
            backgroundColor:"#e6ccb2",
            position:"absolute"
        },
        insidecir2:{
            position:"absolute",
            top:130,
            left:75,
            backgroundColor:"#7f5539",
            borderWidth:3,
            borderColor:"#e6ccb2",
        },image: {
        width: 134,
        height: 134,
        borderRadius:400
        },imagerect:{
            width:94,
            height:144,
            borderRadius:4,
        }
        
    })

    async function SelectPhoto(index : any, pfp : boolean)
    {
       let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if(pfp && !result.canceled)
    {
        console.log("TEST")
        const spot = [...image]
        spot[0] = result.assets[0].uri
        setImage(spot)
    }
    else
    {
    if (!result.canceled) {

        const spot = [...image]
        if(index == 0)
            {
                index = 1
            }
        spot[index] = result.assets[0].uri


        setImage(spot);
        console.log(image)
    }
    }


    }

    const positionY = useSharedValue(0)
    const position = useSharedValue(0)
    const positionY1 = useSharedValue(0)
    const position1 = useSharedValue(0)
    const context = useSharedValue({x: 0, y: 0})
    const context1 = useSharedValue({x: 0, y: 0})
    const END_POSITION = 200;

    


     const animatedStyle = useAnimatedStyle(() => ({
   
    transform: [{translateX: withSpring(position.value)}, {translateY: withSpring(positionY.value)}],
    
}));
    const animatedStyle2 = useAnimatedStyle(() => ({
   
    transform: [{translateX: withSpring(position1.value)}, {translateY: withSpring(positionY1.value)}],
    
}));

 
  

    return(<GestureHandlerRootView><View style={{height:"100%"}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView>
        <View style={{display:"flex",flexDirection:"row", width:"100%"}}>
       
        <ProfilePicture></ProfilePicture>
        <View style={{width:200, height:"100%"}}>
            <Text>Add some photos to setup your profile!</Text>
        </View>
        </View>
       
        <View style={{marginTop:30, display:"flex", flexDirection:"column"}}>
            <View style={{display:"flex", flexDirection:"row"}}>
            <PhotoRect  number={0} ></PhotoRect>
            <PhotoRect  number={1}></PhotoRect>
            <PhotoRect  number={2}></PhotoRect>
           </View>
           
            <View style={{display:"flex", flexDirection:"row"}}>
            
              <PhotoRect id="phot3" number={3}></PhotoRect>
              <PhotoRect  id="phot4" number={4}></PhotoRect>
              <PhotoRect  id="phot5"number={5}></PhotoRect>
            
            </View>
        </View>
        
        </SafeAreaView><Button style={styles.continuebut} onPress={() => router.push('/forms/picksomeint')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button></View></GestureHandlerRootView>)
}


