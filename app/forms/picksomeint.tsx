import { SafeAreaView } from "react-native";
import { Separator, View, Button, Text, Card, ToggleGroup, ScrollView} from "tamagui";
import { Pressable } from "react-native";
import SvgComponent from "../logo";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import OutDoors from "../svgs/outdoors";
import Art from "../svgs/paintbrush";
import HeadPhones from "../svgs/headphones";
import Books from "../svgs/books";
import Food from "../svgs/food";
import { useState } from "react";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Form } from "tamagui";
import Volunteer from "../svgs/volunteer";
import { FlatList } from "react-native";
import Gaming from "../svgs/gaming";
import Technology from "../svgs/technology";
import Sports from "../svgs/sports";
import Travel from "../svgs/travel";
import Language from "../svgs/language";

export default function PickSome()
{
    const router = useRouter()
    const ref = useRef<FlatList>(null)
    const [index, setIndex] = useState(0)
    const [position, setPosition] = useState([0,0] as any)
    const [data, setData] = useState([] as any)
    useEffect(() => {

        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5
        })

    }, [index])

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
        div:{
            width:100,
            height:5,
            backgroundColor:"white",
            position:"absolute",
            bottom: -4,
            left: position
        }
    })

    function changeCol(integer : any)
    {
        let arr = []
        for(let i = 0; i < position.length; i++)
        {
            arr[i] = 0
        }

        arr[integer] = 1

       
        setPosition(arr)
        console.log(position)
    }

/*
<RadioGroup.Item value="5" unstyled><View style={{width:75,  display:"flex", flexDirection:"column", }}><OutDoors></OutDoors><Text style={styles.categories}>Outdoors     & Adventure</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75, transition: "all 0.5s ease 0s"}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="95" unstyled><View style={{width:75, display:"flex", flexDirection:"column", alignItems:"center"}}><Art style={{marginBottom:18}}></Art><Text style={styles.categories}>Arts & Culture</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="160" unstyled><View style={{width:85,  display:"flex", flexDirection:"column", alignItems:"center"}}><HeadPhones style={{marginBottom:13 }}></HeadPhones><Text style={styles.categories}>Music & Entertainment</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="250" unstyled><View style={{width:75,  display:"flex", flexDirection:"column", alignItems:"center"}}><Books style={{marginBottom:-3}}></Books><Text style={styles.categories}>Books & Literature</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="323" unstyled><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><Food style={{marginBottom:7}}></Food><Text style={styles.categories}>Food & Drinks</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="1" unstyled><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><Volunteer style={{marginBottom:7}}></Volunteer><Text style={styles.categories}>Volunteering</Text><View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 75}}></View></View></RadioGroup.Item>
                    <RadioGroup.Item value="1" unstyled></RadioGroup.Item>
                    <RadioGroup.Item value="1" unstyled></RadioGroup.Item>
                    <RadioGroup.Item value="1" unstyled></RadioGroup.Item>*/

    const categories = [
        {
            data: <Pressable onPress={() => setIndex(0)}><View style={{width:75, marginLeft:10, display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={80}><OutDoors></OutDoors></View><Text style={styles.categories}>Outdoors     & Adventure</Text>{index == 0 ? <View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width:80, backgroundColor:"white"}}></View>: ''}</View></Pressable>,
            name: 'Outdoors     & Adventure'
        },
        {

            data: <Pressable onPress={() => setIndex(1)}><View style={{width:75, display:"flex", flexDirection:"column",  alignItems:"center"}}><View height={50} width={90}><Art></Art></View><Text style={styles.categories}>Arts & Culture</Text>{index == 1 ? <View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 70, backgroundColor:"white"}}></View>: ''}</View></Pressable>,
            name: 'Arts & Culture'
        },
        {
            data: <Pressable onPress={() => setIndex(2)}><View style={{width:85,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={35}><HeadPhones></HeadPhones></View><Text style={styles.categories}>Music & Entertainment</Text>{index == 2 ? <View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 90, backgroundColor:"white"}}></View>: ''}</View></Pressable>,
        },
        {
            data: <Pressable onPress={() => setIndex(3)}><View style={{width:75,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={100}><Books ></Books></View><Text style={styles.categories}>Books & Literature</Text>{index == 3 ? <View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 70, backgroundColor:"white"}}></View>: ''}</View></Pressable>,
        },
        {
            data: <Pressable onPress={() => setIndex(4)}><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Food style={{marginBottom:7}}></Food></View><Text style={styles.categories}>Food & Drinks</Text>{index == 4 ? <View style={{position:"absolute", bottom:-4, zIndex:-1, height:5, width: 70, backgroundColor:"white"}}></View>: ''}</View></Pressable>
        },
        {
            data: <Pressable onPress={() => setIndex(5)}><View style={{width:80,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Volunteer style={{marginBottom:7}}></Volunteer></View><Text style={styles.categories}>Volunteering</Text>{index == 5 ? <View style={{position:"absolute", bottom:-18.5, zIndex:-1, height:5, width: 80, backgroundColor:"white"}}></View>: ''}</View></Pressable>
        },
        {
            data: <Pressable onPress={() => setIndex(6)}><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Gaming style={{marginBottom:7}}></Gaming></View><Text style={styles.categories}>Gaming</Text>{index == 6 ? <View style={{position:"absolute", bottom:-18.5, zIndex:-1, height:5, width: 50, backgroundColor:"white"}}></View>: ''}</View></Pressable>           
        },
        {
            data: <Pressable onPress={() => setIndex(7)}><View style={{width:70,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Technology style={{marginBottom:7}}></Technology></View><Text style={styles.categories}>Technology</Text>{index == 7 ? <View style={{position:"absolute", bottom:-18.5, zIndex:-1, height:5, width: 70, backgroundColor:"white"}}></View>: ''}</View></Pressable>          
        },
        {
            data: <Pressable onPress={() => setIndex(8)}><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Sports style={{marginBottom:7}}></Sports></View><Text style={styles.categories}>Sports</Text>{index == 8 ? <View style={{position:"absolute", bottom:-18.5, zIndex:-1, height:5, width: 50, backgroundColor:"white"}}></View>: ''}</View></Pressable>           
        },
        {
            data: <Pressable onPress={() => setIndex(9)}><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Travel style={{marginBottom:7}}></Travel></View><Text style={styles.categories}>Travel</Text>{index == 9 ? <View style={{position:"absolute", bottom:-18.5, zIndex:-1, height:5, width: 50, backgroundColor:"white"}}></View>: ''}</View></Pressable>
        },
        {
            data: <Pressable onPress={() => setIndex(10)}><View style={{width:60,  display:"flex", flexDirection:"column", alignItems:"center"}}><View height={50} width={75}><Language style={{marginBottom:7}}></Language></View><Text style={styles.categories}>Language</Text>{index == 10 ? <View style={{position:"absolute", bottom:-18.5, zIndex:-1, height:5, width: 70, backgroundColor:"white"}}></View>: ''}</View></Pressable>
        }
    ]

    const outdoors = [
        "Hiking",
        "Mountain Biking",
        "Camping",
        "Rock Climbing",
        "Boating",
        "Scuba Diving",
        "Skiing",
        "Snowboarding",
        "Paragliding",
        "Fishing",
        "Surfing",
        "Trail Running",
        "Backpacking",
        "Geocaching",
        "Bird Watching",
        "Nature Photography",
        "Horseback Riding",
        "Whitewater Rafting",
        "Sailing"
    ]

    const arts = [
        "Painting",
        "Drawing",
        "Sculpting",
        "Photography",
        "Theater",
        "Classical Music",
        "Museums",
        "Galleries",
        "Film Appreciation",
        "Dance",
        "Fashion Design",
        "Creative Writing",
        "Ceramics",
        "Architecture",
        "Opera",
        "Poetry",
        "DIY Crafts",
        "Art History",
        "Digital Art",
        "Printmaking",
    ]

    const sports = [
        "Gym Workouts",
        "Yoga",
        "Martial Arts",
        "Running/Jogging",
        "Swimming",
        "Cycling",
        "CrossFit",
        "Tennis",
        "Golf",
        "Basketball",
        "Soccer",
        "Volleyball",
        "Pilates",
        "Boxing",
        "Dance Fitness",
        "Hiking",
        "Triathlon",
        "Skiing",
        "Snowboarding",
        "Rock Climbing",
        "Skateboarding",
    ]

    const music = [
        "Musical Instruments",
        "Singing",
        "Concert Going",
        "Music Production",
        "DJing",
        "Karaoke",
        "Film Making",
        "Acting",
        "Stand-up Comedy",
        "Magic",
        "Podcasting",
        "Vinyl Collecting",
        "Movie Marathons",
        "Theater Production",
        "Dance",
        "Screenwriting",
        "Music Theory",
        "Choir",
        "Band Performance",
        "Voice Acting",
        
    ]

    const books = [
        "Fiction",
        "Non-Fiction",
        "Fantasy/Sci-Fi",
        "Historical Literature",
        "Mystery/Thriller",
        "Book Clubs",
        "Poetry Reading",
        "Writing Workshops",
        "Biographies",
        "Comics",
        "Graphic Novels",
        "Self-Help Books",
        "Children's Literature",
        "Classic Literature",
        "Literary Theory",
        "Memoirs",
        "Playwriting",
        "Literary Festivals",
        "Audiobooks",
        "Fan Fiction",
    ]

    const food = [
        "Cooking",
"Baking",
"Wine Tasting",
"Craft Beer Brewing",
"Vegan",
"Vegetarian",
"Pescatarian",
"Barbecue & Grilling",
"Mixology",
"Coffee Appreciation",
"Chocolate Making",
"Cheese Making",
"Food Photography",
"International Cuisines",
"Cake Decorating",
"Food Blogging",
"Farm-to-Table",
"Kombucha",
"Gourmet Dining",
"Healthy Eating",
"Street Food Exploring",
"Cooking Classes",
    ]

    const volunteering = [
"Environmental Conservation",
"Animal Welfare",
"Community Service",
"Human Rights",
"Health & Wellness",
"Education",
"Homelessness",
"Food Security",
"LGBTQ+ Activism",
"Disaster Relief",
"Political Activism",
"Social Justice",
"Historical Preservation",
"Elder Care",
"Mental Health Awareness",
"Arts & Culture",
"Science & Technology Education",
"Refugee Support",
"Blood Donation",
"Legal Aid & Advocacy",
    ]

    const gaming = [
"Action-Adventure",
"RPGs",
"Strategy",
"Sports",
"Racing",
"MOBAs",
"Simulation & Management",
"Indie Games",
"Puzzle",
"Board Games",
"Fighting",
"Platformer",
"Survival",
"Cards",
"Casinos",
"Educational",
"Virtual Reality",
"Esports",
"Mobile",
"Drama",
"Sandbox",
"Open World",
"Horror Games",
"Retro & Classic",
"Fortnite",
"League of Legends",
"Minecraft",
"PUBG",
"Call of Duty: Warzone",
"Apex Legends",
"Valorant",
"Roblox",
"Genshin Impact",
"FIFA series",
"Counter Strike 2",
    ]

    const technology = [
"Artificial Intelligence",
"Machine Learning",
"Cryptocurrency",
"Cybersecurity",
"Ethical Hacking",
"Internet of Things",
"Augmented Reality",
"Software Development",
"Programming Languages",
"Web Development & Design",
"Mobile App Development",
"Game Development",
"Robotics",
"Network & Information Systems",
"Quantum Computing",
"3D Printing",
"Wearable Technology",
"Digital Marketing",
"UX/UI Design",
"Sustainable Technologies",
"Tech Entrepreneur",
"Startups",
    ]

    const travel = [
"Backpacking",
"Cultural Exchange",
"World Cuisines",
"Historical Sites",
"Solo Travel",
"Volunteering Abroad",
"Road Trips",
"Adventure Travel",
"Luxury Travel",
"Eco-Tourism",
"Culinary Tours",
"International Festivals",
"Study Abroad",
"Van Life",
"Cruise Vacations",
"Wildlife Safaris",
"Photography Tours",
    ]

    const language = [
"Language Learning",
"Language Exchange",
"Mandarin Chinese",
"Spanish",
"English",
"Hindi",
"Bengali",
"Portuguese",
"Russian",
"Japanese",
"Punjabi",
"Marathi",
"Telugu",
"Wu Chinese",
"Turkish",
"Korean",
"French",
"German",
"Vietnamese",
"Tamil",
"Cantonese",
"Urdu",
"Italian",
"Arabic",
"Gujarati",
"Iranian Persian",
"Bhojpuri",
"Southern Min",
"Hakka",
"Jin Chinese",
"Hausa",
"Kannada",
"Indonesian",
"Polish",
"Yoruba",
"Xiang Chinese",
"Malayalam",
"Odia",
"Maithili",
"Burmese",
"Sunda",
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

            <View style={{width:"100%", height:100, display:"flex", marginTop:10}}>
                <View>
                    
                     
                        
                    <View>
                    <FlatList
                    ref={ref}
                    horizontal
                    initialScrollIndex={index}
                    data={categories}
                    renderItem={({item, index: findex}) => item.data}
                    style={{height:90}}>
                   
                    </FlatList>
                   <Separator borderColor={"#7f5539"} borderWidth={2} zIndex={-1} backgroundColor={"#7f5539"} ></Separator>
                  
                  </View>
                     
                </View>
                
                
            </View>
            <View style={{width:"100%", height:"75%",}}>
                 <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar>
                    
                        <ToggleGroup unstyled onValueChange={(e) => setData(e)}  type="multiple" style={{display:"flex", flexDirection:"row", width:"100%", flexWrap:"wrap", marginTop:20, marginLeft:10}}>
                   {index == 0 ? outdoors.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 1 ? arts.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 2 ? music.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 3 ? books.map((data) =><ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 4 ? food.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 5 ? volunteering.map((data) => <ToggleGroup.Item  unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 6 ? gaming.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 7 ? technology.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 8 ? sports.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 9 ? travel.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   {index == 10 ? language.map((data) => <ToggleGroup.Item unstyled value={data}><Options data={data}></Options></ToggleGroup.Item>) : ''}
                   </ToggleGroup>
                   
                    </ScrollView>
            </View>
           

        </SafeAreaView>
       

                

                        <Button style={styles.continuebut} onPress={() => console.log(data)}><Button.Text style={styles.buttxt}>Continue</Button.Text></Button>
         

          
        
    </View>)
}





