import { View, Button, Text, Label, Input, Separator } from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "../logo";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CakeSvg from "../cake";
export default function FormOne()
{
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
        text1:{
            fontSize: 40,
            color:"#7f5539",
            fontWeight:"100",
            width: 280,
            textAlign: "left",
            fontFamily: 'SatoshiVar',
            marginLeft:32,
            height:150,
            marginTop:30
        },
        labels:{
            position: "absolute",
            zIndex: 9,
            top: -9,
            left: -5,
            paddingLeft:15,
            
            color: "#ba9b82"
        },
        inputsize:{
            width: 100,
            height: 60,
            fontSize: 18,
            
            paddingLeft: 7,
            paddingBottom: 0,
            paddingTop: 12,
            backgroundColor: "#e6ccb2",
            borderTopColor: "#bd9b7d",
            borderRightColor: "#bd9b7d",
            borderBottomColor: "#bd9b7d",
            borderLeftColor: "#bd9b7d",
            color: "#7f5539",
        },
        inputsize2:{
            width: 70,
            height: 60,
            fontSize: 18,
            
            paddingLeft: 7,
            paddingBottom: 0,
            paddingTop: 12,
            backgroundColor: "#e6ccb2",
            borderTopColor: "#bd9b7d",
            borderRightColor: "#bd9b7d",
            borderBottomColor: "#bd9b7d",
            borderLeftColor: "#bd9b7d",
            color: "#7f5539",
            
        }
    })

    return(<View style={{height:'100%'}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView>
          <View style={{display:'flex', width: "100%", flexDirection: "row", justifyContent:'center', marginTop:-40}}>
        <View style={{width:100, height:10, backgroundColor:"#B08968", }}></View>
        <View style={{width:100, height:10, backgroundColor:"#B08968", marginRight:10, marginLeft:10 }}></View>
        <View style={{width:100, height:10, backgroundColor:"white"}}></View>
        </View>
        <View>
            <Text style={styles.text1}>When's your birthday?</Text>
        </View>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <View>
                <Label style={styles.labels}>Month</Label>
                <Input keyboardType={"name-phone-pad"} style={styles.inputsize2} borderWidth={2}></Input>
            </View>
            <View style={{marginLeft: 35, marginRight: 35}}>
                <Label style={styles.labels}>Day</Label>
                <Input keyboardType={"number-pad"} style={styles.inputsize2} borderWidth={2}></Input>
            </View>
            <View>
                <Label style={styles.labels}>Year</Label>
                <Input keyboardType={"number-pad"} style={styles.inputsize} borderWidth={2}></Input>
            </View>
           
        </View>
        <View style={{display:"flex", flexDirection:"row", marginTop:15, width:"85%"}}>
            <Separator zIndex={99} borderColor={"white"} borderWidth={2}  vertical marginHorizontal={15}></Separator>
            <Text>
                Please use your real age! Anyone under the age of 18 isn't allowed to be on Tomo.
           </Text>
           </View>
            <View  style={{marginTop:-20}}>
                <CakeSvg></CakeSvg>
            </View>
    </SafeAreaView>
        <Button style={styles.continuebut} onPress={() => router.push('/forms/photos')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button>
    </View>)
}