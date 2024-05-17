import { Card, Separator, Text, View } from "tamagui";
import { ImageBackground, StyleSheet } from "react-native";
import { Image } from "tamagui";
import { WebView } from 'react-native-webview';
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useState } from "react";



export default function ProfCard()
{

    const [like, setLike] = useState(0)

    const styles = StyleSheet.create({
        card:{
            width: 350,
            height: 190,
            backgroundColor:"#E6CCB2",
            borderColor:"#7F5539",
            borderWidth: 2,
            display:"flex",
            flexDirection:"row"
        },
        photohold:{
                height:"100%",
                width:150,
                borderRightWidth: 2,
                borderColor:"#7F5539",
                
        },
        datahold:{
            width:"56%",
            height:"100%",
            
        },
        shadowProp: {
    shadowColor: '#7f5539',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  aboutme:{
    marginTop:4,
    marginLeft:6,
    width:"100%"
  },
  aboutmedata:{
    color:"#7f5539",
    textAlign:"left",
    fontSize:10.5,
    marginTop:4
  },
  favorite:{
    width:"100%",
    height: 50
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

  const swipe = (progress : any, dragX : any) => {

    
    

    if(progress > 1)
    {
      console.log("TEST")
      setLike(2)
    }

    return (<View style={{width:"100%", zIndex:99, backgroundColor:"green"}}>
        <Text>🤝</Text>
    </View>)
  }

  const swipeleft = (progress : any, dragX : any) => {
    console.log(progress)

    if(progress > 1)
    {
      setLike(1)
      
    }
     return (<View style={{backgroundColor:"red", width:"100%"}}>
        <Text>✖️</Text>
    </View>)
  }

    return (<Swipeable  containerStyle={{width:"100%", display:"flex", alignItems:'center'}} rightThreshold={0} leftThreshold={0} onSwipeableOpen={() => console.log("TEST")} dragOffsetFromLeftEdge={2} renderLeftActions={swipe} renderRightActions={swipeleft}><Card style={[styles.card, styles.shadowProp]}>
       {like == 1 ? <View style={{width:50, zIndex:99, position:"absolute"}}><Text fontSize={40}>🤝</Text></View>: <View style={{width:50, zIndex:99, position:"absolute"}}><Text fontSize={40}>✖️</Text></View>}
        <ImageBackground imageStyle={{borderTopLeftRadius: 7, borderBottomLeftRadius: 7, width:"100%"}} source={require('../../../assets/dummyphotos/guypfp.jpg')} style={styles.photohold}>
                <View style={{width:"100%", height:"18%", backgroundColor:"rgba(0, 0, 0, 0.1)", borderTopLeftRadius: 7,}}>
                        
                        <Text style={{color:"#EDE0D4", fontFamily:"SatoshiBold", fontSize:25, marginLeft:8}}>Kyle, 26</Text>
                </View>
                <View style={{height:"57%"}}>

                </View>
                <View style={{display:"flex", flexDirection:"row", flexWrap: "wrap", width:"100%"}}>
                        <Options data={"Hiking"}></Options>
                        <Options data={"Kayaking"}></Options>
                        <Options data={"Camping"}></Options>
                        <Options data={"Rock Climbing"}></Options>
                        <Options data={"Sailing"}></Options>
                </View>
        </ImageBackground>
        <View style={styles.datahold}>
                <View style={styles.aboutme}>
                        <Text style={{fontSize:12}}>About me</Text>
                        <Text style={styles.aboutmedata}>Tech nerd, Aries, Coffee Drinker, Drawing enthusiast, and new in town</Text>
                </View>
                <Separator marginTop={4} borderBlockColor={"white"} ></Separator>
                <View style={styles.favorite}>
                        <Text style={{fontSize:12,  marginTop:4, marginLeft:6,}}>Favorite Song</Text>
                        <View style={{height:55, zoom:"50%"}}>
                        <WebView 
          style={{ height: 75, width: 250, backgroundColor:"transparent", marginLeft:10, marginTop:5, zoom: "200%"}}
          scrollEnabled={false}
            directionalLockEnabled={false}
          source={{
            html: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7bBG4rcAW8Y0R4UFmMy54M?utm_source=generator" width="40%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            
          }}
          ></WebView>
          </View>
                </View>
                <Separator marginTop={20} borderBlockColor={"white"}></Separator>
                    
                <View>
                    <Text style={{fontSize:12,  marginTop:4, marginLeft:6}}>HomeTown</Text>
                    <Text style={{fontSize:12,  marginTop:4, marginLeft:10, color:"#7f5539"}}>Chicago</Text>
                </View>
        </View>
    </Card></Swipeable>)
}