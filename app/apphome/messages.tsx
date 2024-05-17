import { Separator, View, Text, ScrollView, Circle } from "tamagui";
import { StyleSheet } from "react-native";
import { Image } from "react-native-svg";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
export default function Messages()
{

    const router = useRouter()

    const styles = StyleSheet.create({
        textheader1:{
            color:"#7F5539",
            fontSize:30,
            marginLeft:25,
            fontFamily:"SatoshiBold",
            marginBottom:10
        
        },
        textheader2:{
             color:"#7F5539",
            fontSize:30,
            marginRight:25,
            fontFamily:"SatoshiBold",
            marginBottom:10
        },
        textheader3:{
            color:"#B08968",
            fontSize:30,
            fontFamily:"SatoshiBold",
            marginTop:5
        },
        circle:{
            borderWidth:2,
            borderColor:"#B08968",
            backgroundColor:"#e6ccb2",
            marginLeft:15,
            marginBottom:10
            
        },
        circle1:{
            borderWidth:2,
            borderColor:"#B08968",
            backgroundColor:"#e6ccb2",
            marginBottom:10
        },
        circle2:{
            borderWidth:2,
            borderColor:"#B08968",
            backgroundColor:"#e6ccb2",
            marginLeft:20,
            
        }
    })

    const images = [
        {
            test: "Test"
        },
        {
            test: "Test"
        },
        {
            test: "Test"
        },
        
        
    ]

    const messagedata = [
        {
            name: "Kyle",
            summary: "Yeah same man surfing is such a fun hobby. I used to go all the time but"
        },
        {
            name:"John",
            summary: "I'd love to go to the aquarium, I think it's one of the best spots in the city"
        },
        {
            name:"Gwen",
            summary: "I'd say it's probably picasso, his art just stands out from the rest for me"
        }
    ]

    return(<View style={{height:"100%"}}>
                <View style={{height:"15%", display:"flex", flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
                    
                        <Text style={styles.textheader1}>Messages</Text>
                        <Text style={styles.textheader2}>Group Chats</Text>
                  
                </View>
                <Separator borderWidth={1} borderBlockColor={"#7F5539"} backgroundColor={"#7F5539"}></Separator>

                <View style={{height:"20%", display:"flex", flexDirection:"column", alignItems:'center'}}>
                        <Text style={styles.textheader3}>Recent Matches</Text>
                       
                        <View style={{display:"flex", flexDirection:"row", alignItems:"flex-end", height:"70%"}}><Circle style={styles.circle1}  size={95}><Image></Image></Circle><View style={{display:"flex", flexDirection:"row", alignItems:"flex-end"}}>{images.map((data) => <Circle style={styles.circle}  size={65}><Image></Image></Circle>)}</View></View>
                </View>
                

                <Separator borderBlockColor={"#7F5539"} backgroundColor={"#7F5539"}></Separator>

                <View style={{height:"65%"}}>
                        {messagedata.map((data) => <Pressable onPress={() => router.navigate('/apphome/msgstuff/test')} key={data.name}><View style={{height:110}}>
                                <Text style={{fontSize:20, fontFamily:"SatoshiBold", color:"#7F5539", marginLeft:85, marginTop:10}}>{data.name}</Text>
                                <View style={{display:"flex", flexDirection:"row"}}>
                                    <Circle style={styles.circle2} size={60}></Circle>
                                    <Text style={{flexWrap:"wrap", width:290, marginLeft:15, marginTop:13, color:"#B08968"}}>{data.summary + "..."}</Text>
                                </View>

                            
                        </View><Separator borderBlockColor={"#7F5539"} backgroundColor={"#7F5539"}></Separator></Pressable>)}
                </View>
    </View>)
}