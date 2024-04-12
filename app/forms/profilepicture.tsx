import { Pressable } from "react-native"
import { View, Circle } from "tamagui"
import { Image } from "react-native"
import { StyleSheet } from "react-native"
import { useState } from "react"
import * as ImagePicker from 'expo-image-picker';


export default function ProfilePicture()
{

    const [image, setImage] = useState([] as any);


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


    return( <Pressable onPress={() => SelectPhoto(0, true)}>
        <View style={{display:"flex", alignItems:"center", justifyContent:"center", width:180}}>
            <Circle style={styles.circle} size={140} backgroundColor={"white"}><Image source={{uri: image[0]}} style={styles.image}></Image></Circle>
            <Circle style={styles.insidecir} size={30}><View style={styles.plus1}></View><View style={styles.plus2}></View></Circle>
        </View>
        </Pressable>)
}