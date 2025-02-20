import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeProvider } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LLThemeProvider, useLLTheme } from "@/providers/LLThemeProvider";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GlobalStylesProvider } from "@/providers/GlobalStylesProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <LLThemeProvider>
      <ThemedApp />
    </LLThemeProvider>
  );
}

function ThemedApp() {
  const { themeTitle, currentTheme } = useLLTheme();

  console.log(themeTitle)

  return (
    <ThemeProvider value={currentTheme}>
      <GlobalStylesProvider currentTheme={currentTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>

          <StatusBar
            style={currentTheme.dark ? "light" : "light"}
            backgroundColor={currentTheme.colors.background}
          />
        </SafeAreaView>
      </GlobalStylesProvider>
    </ThemeProvider>
  );
}
