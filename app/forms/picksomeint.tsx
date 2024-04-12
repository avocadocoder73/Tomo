import { SafeAreaView } from "react-native";
import { Separator, View, Button, Text, RadioGroup } from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import OutDoors from "../svgs/outdoors";
import Art from "../svgs/paintbrush";
import HeadPhones from "../svgs/headphones";
import Books from "../svgs/books";
import Food from "../svgs/food";
import { useState } from "react";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function PickSome()
{
    const router = useRouter()

    const [position, setPosition] = useState([0,0] as any)

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
        categories:{
            textAlign:'center',
            fontSize:12,
            color:"#7f5539",
            marginTop:-30
        },
        div:{
            width:100,
            height:5,
            backgroundColor:"white",
            position:"absolute",
            bottom: -4,
            left: position
        }
    })

    function changeCol(integer : any)
    {
        let arr = []
        for(let i = 0; i < position.length; i++)
        {
            arr[i] = 0
        }

        arr[integer] = 1

       
        setPosition(arr)
        console.log(position)
    }

   const LineComp = (props: { props: string }) => {
    let distance = parseInt(props.props);
    console.log(props.props)
    let width = 85;

    if (distance === 95) {
        width = 55;
    } else if (distance === 160) {
        width = 87;
    } else if (distance === 250) {
        width = 65;
    } else if (distance === 323) {
        width = 55;
    }

   const fadeAnim = useRef(new Animated.Value(0)).current;
useEffect(() => {


     const transform = () => {
        Animated.timing(fadeAnim, {
            toValue: distance,
            duration: 100,
           useNativeDriver: false
        }).start()
        
    }
   
    transform()

}, [])
   
    
    return (
        <Animated.View
            style={[{
                width: width,
                height: 5,
                backgroundColor: "white",
                position: "absolute",
                bottom: -4,
                
            }, {left: fadeAnim}]}
        />
    );
}




    return(<View style={{height:"100%"}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView>

            <View style={{width:"100%", height:"30%", display:"flex", marginTop:10}}>
                <View>
                    <RadioGroup style={{height:"100%",display:"flex", flexDirection:
                "row", alignItems:"flex-end", marginBottom:0, justifyContent:"center"}} defaultValue="5" onValueChange={(e) => setPosition([position[0], e])}>
                    <RadioGroup.Item value="5" unstyled><View style={{width:75,  display:"flex", flexDirection:"column", }}><OutDoors></OutDoors><Text style={styles.categories}>Outdoors     & Adventure</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75, transition: "all 0.5s ease 0s"}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="95" unstyled><View style={{width:75, display:"flex", flexDirection:"column", alignItems:"center"}}><Art style={{marginBottom:18}}></Art><Text style={styles.categories}>Arts & Culture</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="160" unstyled><View style={{width:85,  display:"flex", flexDirection:"column", alignItems:"center"}}><HeadPhones style={{marginBottom:13 }}></HeadPhones><Text style={styles.categories}>Music & Entertainment</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="250" unstyled><View style={{width:75,  display:"flex", flexDirection:"column", alignItems:"center"}}><Books style={{marginBottom:-3}}></Books><Text style={styles.categories}>Books & Literature</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                   <RadioGroup.Item value="323" unstyled><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><Food style={{marginBottom:7}}></Food><Text style={styles.categories}>Food & Drinks</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    </RadioGroup>
                </View>
                
                <LineComp props={position}></LineComp>
                <Separator borderColor={"#7f5539"} borderWidth={2} zIndex={-1} backgroundColor={"#7f5539"} ></Separator>
            </View>
            <View>


            </View>


        </SafeAreaView>
        <Button style={styles.continuebut} onPress={() => router.push('/forms/picksomeint')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button>
    </View>)
}