
import {View, Button, Text, ToggleGroup, Card} from 'tamagui'
import { Pressable, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import SvgComponent from '../logo'
import { StyleSheet } from 'react-native'
import { useState } from 'react'


export default function Vices()
{

    const router = useRouter()

     const [data, setData] = useState([] as any)

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
            textAlign:"center",
            fontSize:12,
            color:"#7f5539",
            
            
        },
        text1:{fontSize: 40,
            marginTop: -10,
            color:"#7f5539",
            fontWeight:"100",
            textAlign:"left",
            width: 330,
            fontFamily: 'SatoshiVar'
        }
    })

      function Options(props:{data : any})
{
    const style = StyleSheet.create({
    shadowProp: {
    shadowColor: '#7f5539',
    shadowOffset: {width: -1, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
  }
    })
    
    return (
        <Card bordered={2} borderRadius={40} borderColor={"#7f5539"} style={[style.shadowProp,{alignItems:"center", height:50, backgroundColor:data.includes(props.data) ? "#7f5539": "#E6CCB2", margin:3, boxShadow:`0px 5px 10px 4px #7f5539`}]}><Text style={{margin:10, fontSize:18, marginLeft:20, marginRight:20, fontFamily:"SatoshiMed", color:data.includes(props.data) ? "#DDB892" : "#7f5539" }}>{props.data}</Text></Card>)
}

    const cannabis = [
"Regularly",
"Occasionally",
"Socially",
"For medical use",
"Rarely",
"I used to",
"Never",
    ]

    const alcohol = [
"Regularly",
"Occasionally",
"Socially",
"Rarely",
"I used to",
"Never",
    ]


    return(<View style={{height:"100%"}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView>
        <View style={{margin:30}}>
            <Text style={styles.text1}>Do you use cannabis?</Text>
            <ToggleGroup unstyled type='single' style={{flexWrap:"wrap", paddingTop:10, width:350}}>
                {cannabis.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>)}
            </ToggleGroup>
        </View>
        <View style={{marginLeft:30}}>
            <Text style={styles.text1}>Do you drink Alcohol</Text>
            <ToggleGroup  unstyled type='single' style={{flexWrap:"wrap", paddingTop:10, width:350}}>
                {alcohol.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>)}
            </ToggleGroup>
        </View>
        
        <Button unstyled style={{width:50, padding:0, backgroundColor:"transparent", color:"#7f5539", position:"absolute", bottom: -60, left:310}}><Button.Text>Skip</Button.Text></Button>
        </SafeAreaView><Button style={styles.continuebut} onPress={() => router.push('/forms/sexuality')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button></View>)
}