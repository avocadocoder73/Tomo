import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Separator, Button, Circle, Card, TextArea, Input, Sheet, ScrollView } from "tamagui";
import { Pressable, StyleSheet } from "react-native";



export default function MessageRoom()
{


    type TextMessage = {
        role: String,
        text: String
    }

    const [messages , setMessages] = useState([] as any)

    const  {msgroomid} = useLocalSearchParams()

    useEffect(() => {


        const newmsgs = [
            {
                role:"sender",
                text:"Hey kyle, what type of drawing do you do?"
            },
            {
                role:"recipient",
                text:"Hey man whats up! Lately I've been drawing a lot of nature, but really I draw just about everything."
            },
            {
                role:"recipient",
                text:"Hbu??"
            },
            {
                role:"sender",
                text:"Lately, animals, especially my little kitten that I just got! but also same, pretty much anything and everything"
            },
            {
                role:"sender",
                text:"Lately, animals, especially my little kitten that I just got! but also same, pretty much anything and everything"
            },
             {
                role:"sender",
                text:"Lately, animals, especially my little kitten that I just got! but also same, pretty much anything and everything"
            }


        ]

        setMessages(newmsgs)
        
        

    }, [])


    const styles = StyleSheet.create({
        circle:{
             borderWidth:2,
            borderColor:"#B08968",
            backgroundColor:"#e6ccb2",
            marginLeft:10,
            marginTop:15
           
        },
        textbox:{
            borderWidth:2,
            width:350,
            height:40,
            backgroundColor:"transparent",
            borderColor:"#DDB892",
            borderRadius:20,
            fontFamily:"SatoshiBold",
            display:"flex",
            flexDirection:"row",
            alignItems:'center',
            paddingLeft:20,
            paddingTop:10,
            color:"#7F5539"
        },
        sender:
        {
            color:"#DDB892",
         
            maxWidth:250,
            padding:10,
        },
        recipient:{
            color:"#9C6644",
             maxWidth:250,
            padding:10,
           


        },
        senderbox:{
            backgroundColor:"#7F5539",
            borderRadius:10,
            maxWidth:250,
            marginLeft:130,
            marginTop:30,
        },
        recipientbox:{  
              backgroundColor:"#DDB892",
              borderRadius:10,
            maxWidth:250,
            marginLeft:10,
            marginTop:10,
        }

        
    })

    function Options(props:{data : any})
{
    const style = StyleSheet.create({
    shadowProp: {
    shadowColor: '#7f5539',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  }
    })
    
    return (
        <Card bordered={1.2} borderRadius={40} borderColor={"#7f5539"} style={[style.shadowProp,{alignItems:"center", height:17, backgroundColor:"#E6CCB2", margin:2, boxShadow:`0px 5px 10px 4px #7f5539`}]}><Text style={{margin:1, fontSize:8.1, marginLeft:5, marginRight:5, fontFamily:"SatoshiBold", color:"#7f5539" }}>{props.data}</Text></Card>)
}
    

    return(<View style={{height:"100%"}}>
        <View style={{height:"30%", backgroundColor:"#E6CCB2"}}>
                <SafeAreaView style={{marginTop:-10}}>
                   
                    <View style={{display:"flex", flexDirection:"row", alignItems:'center'}}>
                        <Button onPress={Keyboard.dismiss} style={{width:40}}></Button>
                        <Text style={{fontSize:22, fontFamily:"SatoshiBold"}}>Rasmithianus, 28</Text>
                    </View>
                    <View style={{display:"flex", flexDirection:'row'}}>
                        <View>
                            <Circle style={styles.circle} size={100}></Circle>
                        </View>
                        <View>
                            <View style={{width:180, marginLeft:10}}>
                                <Text style={{marginBottom:5, fontFamily:"SatoshiBold"}}>About me</Text>
                                <Text style={{fontSize:11, color:"#7F5539", fontFamily:"SatoshiBold"}}>Tech nerd, Aries, Coffee Drinker, Drawing enthusiast, and new in town</Text>
                            </View>
                            <Separator marginLeft={15} marginTop={5} borderColor={"white"} backgroundColor={"white"}></Separator>
                            <View style={{width:180, marginLeft:10}}>
                                     <Text style={{marginBottom:2, fontFamily:"SatoshiBold"}}>Hometown</Text>
                                     <Text style={{fontSize:11, color:"#7F5539", fontFamily:"SatoshiBold"}}>Chicago</Text>
                                     <Text style={{fontSize:11, color:"#7F5539", fontFamily:"SatoshiBold", marginTop:5}}>Lives 6.3 miles away in Beverly Hills</Text>
                            </View>
                        </View>
                        <Separator vertical borderColor={"white"} backgroundColor={"white"}></Separator>
                        <View style={{display:"flex", flexDirection:'column', alignItems:'center', width:"23%"}}>
                            <Text style={{fontSize:10, marginBottom:10}}>Similar Interests</Text>
                            <Options data={"Hiking"}></Options>
                            <Options data={"Kayaking"}></Options>
                            <Options data={"Sailing"}></Options>
                            <Options data={"Camping"}></Options>
                            <Options data={"Rock Climbing"}></Options>
                        </View>
                    </View>




                </SafeAreaView>
        </View>
        <Separator></Separator>










        <View style={{height:"70%"}}>
                <ScrollView keyboardDismissMode={"on-drag"} style={{width:"100%", height:"90%"}}>
                    {messages.map((data : TextMessage) => <View style={data.role == "sender" ? styles.senderbox: styles.recipientbox}><Text style={data.role == "sender" ? styles.sender: styles.recipient}>{data.text}</Text></View>)}
                </ScrollView>
                <Pressable onPress={Keyboard.dismiss} onPressOut={Keyboard.dismiss} style={{position:'absolute', bottom:0, display:'flex', flexDirection:'row', justifyContent:'center', width:"100%", marginBottom:10}}><KeyboardAvoidingView enabled behavior="position" keyboardVerticalOffset={690}><View style={{backgroundColor:'#EDE0D4', width:"100%", paddingLeft:30, paddingRight:30, paddingBottom:5, display:'flex', height:"100%", alignItems:'center'}}><TextArea placeholderTextColor={"#7F5539"} onSubmitEditing={() => Keyboard.dismiss} unstyled placeholder="Message" style={styles.textbox}></TextArea></View></KeyboardAvoidingView></Pressable>
        </View>
    </View>)
}