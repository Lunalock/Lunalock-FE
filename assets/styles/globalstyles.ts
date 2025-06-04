import { LLThemeConfig } from "@/constants/Theme";
import { StyleSheet } from "react-native";

function generateGlobalStyles(theme: typeof LLThemeConfig.light | typeof LLThemeConfig.dark) {
    return StyleSheet.create({
        marginXl: {
            margin: theme.spacing.xl,
        },
        red800: {
            backgroundColor: theme.colors.dark.bgRed800
        },
        red700: {
            backgroundColor: theme.colors.dark.bgRed700
        },
        purple500: {
            backgroundColor: theme.colors.dark.bgPurple500
        },
        purple800:{
            backgroundColor: theme.colors.dark.bgPurple800
        },
        blue500: {
            backgroundColor: theme.colors.dark.bgBlue500
        },
        blue800:{
            backgroundColor: theme.colors.dark.bgBlue800
        } ,
    }); 
}

type GlobalStyles = ReturnType<typeof generateGlobalStyles>;

export { generateGlobalStyles, type GlobalStyles };
