import { LLThemeConfig } from "@/constants/Theme";
import { StyleSheet } from "react-native";

function generateGlobalStyles(theme: typeof LLThemeConfig.light | typeof LLThemeConfig.dark) {
    return StyleSheet.create({
        marginXl: {
            margin: theme.spacing.xl,
        },
        colorRed: {
            backgroundColor: 'red'
        },
        colorBlue: {
            backgroundColor: 'blue'
        }
    });
}

type GlobalStyles = ReturnType<typeof generateGlobalStyles>;

export { generateGlobalStyles, type GlobalStyles };
