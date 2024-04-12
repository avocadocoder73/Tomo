import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import { LinearGradient } from 'expo-linear-gradient'
import '../tamagui-web.css'

import { config } from '../tamagui.config'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    SatoshiMed: require('../assets/fonts/OTF/Satoshi-Medium.otf'),
    SatoshiBold: require('../assets/fonts/OTF/Satoshi-Bold.otf'),
    SatoshiBlack: require('../assets/fonts/OTF/Satoshi-Black.otf'),
    SatoshiRegular: require("../assets/fonts/OTF/Satoshi-Regular.otf"),
    SatoshiVar: require("../assets/fonts/Satoshi-Variable.ttf")
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <Stack>
        
          <Stack.Screen name="home" options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='signup' options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='forms' options={{headerShown: false}}></Stack.Screen>
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
