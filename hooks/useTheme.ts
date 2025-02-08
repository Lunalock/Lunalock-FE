import { LLThemeConfig } from "@/constants/Theme";
import { useColorScheme } from "react-native";

function useTheme() {
    const colorScheme = useColorScheme()

    return colorScheme === "dark" ?
        LLThemeConfig.dark :
        LLThemeConfig.light
}

export { useTheme }
