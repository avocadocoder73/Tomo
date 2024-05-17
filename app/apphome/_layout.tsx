import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Separator } from "tamagui";
import Feed from "../svgs/feed";
import Explore from "../svgs/explore";
import { Pressable } from "react-native";
import Message from "../svgs/msg";
import Profile from "../svgs/profile";
import { useRouter } from "expo-router";
import Globe from "../svgs/globe";
import { StyleSheet } from "react-native";
/*

*/

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
         <Stack>
                    <Stack.Screen name="appmain" options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name="maps" options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name="messages" options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name="msgstuff/[msgroomid]" options={{headerShown: false}}></Stack.Screen>
                    
        </Stack>
        <SafeAreaView>
            <Separator borderColor={"#7f5539"} borderWidth={1} zIndex={-1} backgroundColor={"#7f5539"} style={styles.shadowProp} position={"absolute"} width={"100%"} ></Separator>
                <View style={{height:"2%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <Feed onPress={() => router.navigate('/apphome/appmain')}></Feed>
                    <Explore></Explore>
                    <Pressable onPress={() => router.navigate('/apphome/maps')}><Globe></Globe></Pressable>
                    <Message onPress={() => router.navigate('/apphome/messages')}></Message>
                    <Profile></Profile>
                </View>
        </SafeAreaView>
    </View>)
}