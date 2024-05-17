
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Separator, View, Text, Sheet } from "tamagui";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import ProfCard from "./components/profcard";
import Profile from "../svgs/profile";
import Globe from "../svgs/globe";
import Message from "../svgs/msg";
import Feed from "../svgs/feed";
import Explore from "../svgs/explore";
import MapView, { PROVIDER_DEFAULT, Point } from 'react-native-maps'
import { useState, useEffect } from "react";
import * as Location from 'expo-location';





export default function Maps()
{

    const [sheet, openSheet] = useState(false)

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

      const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      

      const initialspot = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 2,
        longitudeDelta: 2
      }

      setLocation(initialspot as any);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


    return(<View style={{height:"100%"}}>
        <MapView onMarkerPress={(data) => console.log(data)} style={{width:"100%", height:"100%"}} provider={PROVIDER_DEFAULT} showsBuildings showsTraffic initialRegion={location != null ? location : undefined } showsUserLocation>

        
        </MapView>
       
        
              
        
    </View>)
}