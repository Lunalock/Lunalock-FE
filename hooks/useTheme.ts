import { Theme } from "@/constants/Theme";
import { DarkTheme, DefaultTheme, type Theme as RnTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";

type LLTheme = RnTheme & {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    } & Record<`--${string}`, string>
}

function useTheme() {
    const colorScheme = useColorScheme()

    const themes: Record<string, LLTheme> = {
        darkTheme: { ...DarkTheme, colors: { ...DarkTheme.colors, ...Theme.colors.dark }},
        lightTheme: { ...DefaultTheme, colors: { ...DefaultTheme.colors, ...Theme.colors.light }},
    }

    return colorScheme === "dark" ?
        themes.darkTheme :
        themes.lightTheme
}

export { useTheme }
