import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Separator, View, Text } from "tamagui";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import ProfCard from "./components/profcard";
import Profile from "../svgs/profile";
import Globe from "../svgs/globe";
import Message from "../svgs/msg";
import Feed from "../svgs/feed";
import Explore from "../svgs/explore";

export default function AppHome()
{

    const router = useRouter()

    const styles = StyleSheet.create({
        text1:{
            fontSize: 40,
            marginLeft:-20, 
            marginBottom:3,
           
            color:"#7f5539",
            

            fontFamily: 'SatoshiVar'
        },
        shadowProp: {
    shadowColor: '#7f5539',
    shadowOffset: {width: -1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
        }
    })

    return(<View style={{height:"100%"}}>
        <SafeAreaView>
                <View style={{height:40, width:"100%", display:'flex', flexDirection:'row', justifyContent:"center", alignItems:"center", marginBottom:20}}>
                        <View style={{display:"flex", justifyContent:"center", flexDirection:"row", width:120, height:80, alignItems:'flex-end'}}>
                        <SvgComponent onPress={() => router.push('/forms/photos')} style={{padding:0, margin:0}}></SvgComponent>
                     
                        </View>
                        
                </View>
                <Separator borderColor={"#7f5539"} borderWidth={1} zIndex={-1} backgroundColor={"#7f5539"} style={styles.shadowProp}></Separator>
                
                   <View style={{display:"flex", alignItems:'center', justifyContent:'space-between', height:"86%", marginTop:20, marginBottom:20}}>
                        <ProfCard ></ProfCard>
                        <ProfCard ></ProfCard>
                        <ProfCard ></ProfCard>
                    </View>


                
                
        </SafeAreaView>
        
    </View>)
}




