import { Pressable } from "react-native"
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  SharedValue,
  withSpring,
  useAnimatedGestureHandler
} from 'react-native-reanimated';
import { StyleSheet, Image } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { View, Circle } from "tamagui";
import * as ImagePicker from 'expo-image-picker';
import { useRef } from "react";

export function PhotoRect(number : any)
{
    const [image, setImage] = useState([] as any);
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(ref.current)
        {
            console.log(ref?.current?.getBoundingClientRect())
        }
    }, [])
    

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
        plus3:
        {
            width:15,
            height:2,
            backgroundColor:"#e6ccb2",
            position:"absolute",
            transform:"rotate(45deg)"
        },
        plus4:{
            width:15,
            height:2,
            backgroundColor:"#e6ccb2",
            position:"absolute",
            transform:"rotate(135deg)"
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

    async function SelectPhoto(index : any)
    {
       let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    
    
    if (!result.canceled) {
        
         
        const spot = [...image]
        spot[0] = result.assets[0].uri
        setImage(result.assets[0].uri)
        console.log(result.assets[0].uri)
        
    }
    


    }

    const positionY = useSharedValue(0)
    const position = useSharedValue(0)
    const positionY1 = useSharedValue(0)
    const position1 = useSharedValue(0)
    const context = useSharedValue({x: 0, y: 0})
    const context1 = useSharedValue({x: 0, y: 0})
    const END_POSITION = 200;

    const pan = Gesture.Pan().runOnJS(true).onStart(() => {

       
 
        context1.value = {x: position.value, y: positionY.value}
        context.value = {x: position.value, y: positionY.value}
    }).onUpdate((e) => {

        if(image.length == 0)
        {
            return
        }
        
        position.value = e.translationX + context.value.x
        positionY.value = e.translationY + context.value.y
       
    }).onEnd(() => {
        positionY.value = 0
        position.value = 0
    })

    
    

     const animatedStyle = useAnimatedStyle(() => ({
   
    transform: [{translateX: withSpring(position.value)}, {translateY: withSpring(positionY.value)}],
    
}));

    const deletephoto = () => {
        setImage([])

        console.log(image.length)
    }
    
  
    

        

    return(<GestureDetector gesture={pan}><Animated.View   style={[styles.rectangle, animatedStyle]}>{image.length > 0 ? <Image source={{uri: image }}  style={styles.imagerect}/>: ""}{image.length > 0 ? <Circle onPress={deletephoto} style={styles.insidecir2} size={30}><View  style={styles.plus3}></View><View style={styles.plus4}></View></Circle> : <Circle onPress={() => SelectPhoto(image.length)} style={styles.insidecir2} size={30}><View  style={styles.plus1}></View><View style={styles.plus2}></View></Circle>}</Animated.View></GestureDetector>)
}
