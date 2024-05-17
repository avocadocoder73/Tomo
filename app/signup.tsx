import { Link , Stack} from "expo-router";
import { Input, Label, View, Select, Text, Button, Sheet, Adapt } from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "./logo";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { CountryCodes } from "./data";
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from "react";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function SignUp()
{

    const router = useRouter()

    const [verif, setVerif] = useState(false)

    const [phone, setPhone] = useState(['', ''] as any)

    const styles = StyleSheet.create({
        inputs:{
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 150
        },
        inputsize:{
            width: 300,
            height: 60,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0.2,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
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
            width: 300,
            height: 60,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
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
        labels:{
            position: "absolute",
            zIndex: 9,
            top: -9,
            left: 12,
            color: "#ba9b82"
        },
        Text:{
            marginTop: 5,
            width: 315,
            color: "#ba9b82"
        },
        Text2:{
            
            color:"#ba9b82"
        },
        But:{
            backgroundColor: "#7f5539",
            width: 300,
            marginTop: 20,
            height: 50,
            fontSize: 23,
            textAlign: "center"
        },
        itemholder:{
            display:"flex", 
            flexDirection:"row", 
            height:50,
            justifyContent:"space-between", 
            alignItems:"center", 
            backgroundColor:"#e6ccb2", 
            color:"white",
            borderWidth:1,
            fontFamily:"SatoshiBold",
            borderColor:"#bd9b7d"
            
        },
        dropdownMenu:{
            backgroundColor:"#e6ccb2", 
            borderRadius:10,
            
        }
    })

    /*  <Adapt when="sm" platform="touch">
          <Sheet
            native={true}
            modal
            dismissOnSnapToBottom
            animationConfig={{
              type: "spring",
              damping: 20,
              mass: 1.2,
              stiffness: 250,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>*/

            const handleSubmit = () => {
                console.log(phone)
            }

            const handleChange = (event : any) => {
                phone[1] = event.nativeEvent.text
            }
    

    return(<View onPress={Keyboard.dismiss}  style={{backgroundColor: "#ecded1", height:'100%'}}><SafeAreaView>
        
        <Pressable onPress={() => router.navigate('/home')} ><SvgComponent width={"200px"} style={{marginTop:50, marginBottom:-130, alignSelf:"center"}} ></SvgComponent></Pressable>
        <View style={styles.inputs}>
        
        <View>
        <Label style={styles.labels}>Country/Region </Label>
        <SelectDropdown search dropdownStyle={styles.dropdownMenu} onSelect={(selectedItem) => phone[0] = selectedItem.dial_code} renderButton={(selectedItem, isOpened) => {
            
            return(
                <View style={styles.inputsize}><Text style={{marginTop:12, fontSize:18, color:"#7f5539"}}>{selectedItem ? selectedItem.dial_code: "+1"}</Text></View>
            )
        }} data={CountryCodes} renderItem={(item, index, isSelected) => {
            return(<View style={styles.itemholder}>
                <Text style={{marginLeft:20, textWrap:"wrap", width:200,}}>{item.name}</Text><Text style={{marginRight:20}}>{item.dial_code}</Text>
                
               
            </View>)
        }}>

        </SelectDropdown>
        </View>
        <View>
        <Label style={styles.labels}>Phone Number</Label>
       <Input onChange={handleChange} onBlur={() => console.log(phone)} keyboardType="numeric" maxLength={10} style={styles.inputsize2} borderWidth={2}></Input>
        
        </View>
         <Text style={styles.Text}>We'll text you a confirmation number. Standard</Text>
         <Text style={styles.Text2}>message and data rates apply.</Text> 
        </View>
        <View style={{display:"flex", alignItems:"center"}}>
       <Button style={styles.But} onPress={handleSubmit} >{verif ? "Continue" : "Send Code"}</Button>
       </View>
    </SafeAreaView></View>)
}