import { Stack } from "expo-router";


export default function Forms()
{
    return(<Stack>
        <Stack.Screen name="tellus" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="name" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="birthday" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="location" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="photos" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="nowlets" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="picksomeint" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="vices" options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="sexuality" options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="religion" options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="relationship" options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="creating" options={{headerShown:false}}></Stack.Screen>
    </Stack>)
}