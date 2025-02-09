import { useFonts } from 'expo-font';
import "@/assets\\css\\global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "@/assets/css/global.css"
import { ThemeProvider } from '@react-navigation/native';
import { useTheme } from '@/hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const theme = useTheme()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <GluestackUIProvider mode={theme.dark ? "dark" : "light"}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          
          <StatusBar
            style={theme.dark ? "light" : "dark"}
            backgroundColor={theme.colors.background}
          />
        </SafeAreaView>
      </GluestackUIProvider>
    </ThemeProvider>
  );
}
