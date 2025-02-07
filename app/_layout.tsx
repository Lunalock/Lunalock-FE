import { useFonts } from 'expo-font';
import "@/assets\\css\\global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "@/assets/css/global.css"
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Theme } from '@/constants/Theme';

SplashScreen.preventAutoHideAsync();

const themes = {
  rnDarkTheme: { ...DarkTheme, colors: { ...DarkTheme.colors, ...Theme.colors.dark }},
  rnLightTheme: { ...DefaultTheme, colors: { ...DefaultTheme.colors, ...Theme.colors.light }},
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={themes.rnDarkTheme}>
      <GluestackUIProvider mode="dark">
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
