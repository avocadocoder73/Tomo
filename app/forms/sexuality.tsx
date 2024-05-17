import { View, Button, Text, ToggleGroup, Card } from "tamagui"
import { SafeAreaView } from "react-native"
import { Pressable, StyleSheet } from "react-native"
import SvgComponent from "../logo"
import { useRouter } from "expo-router"
import { useState } from "react"

export default function Sexuality()
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
        },text1:{
            fontSize: 40,
            marginTop: -10,
            color:"#7f5539",
            fontWeight:"100",
            textAlign:"left",
            width: 330,
            fontFamily: 'SatoshiVar'
        }
       
      
    })

    const options = [
"Heterosexual",
"Bisexual",
"Asexual",
"Pansexual",
"Queer",
"Questioning",
"Lesbian",
"Gay",
"Demisexual",
"Polysexual",
"Omnisexual",
    ]



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


    return(<View style={{height:"100%"}}><Pressable onPress={() => router.navigate('/signup')} ><SvgComponent width={"75px"} style={{marginLeft:10}}></SvgComponent></Pressable><SafeAreaView>
        <View style={{margin:30}}>
            <Text style={styles.text1}>What's your Sexuality?</Text>
            <ToggleGroup onValueChange={(e) => setData(e)} unstyled type="single" style={{flexWrap:"wrap", paddingTop:10, width:350, marginLeft:-10}}>
            {options.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>)}
            </ToggleGroup>
        </View>

        <Button unstyled style={{width:50, padding:0, backgroundColor:"transparent", color:"#7f5539", position:"absolute", bottom: -220, left:310}}><Button.Text>Skip</Button.Text></Button>
       
    </SafeAreaView><Button style={styles.continuebut} onPress={() => router.push('/forms/religion')}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button></View>)
}