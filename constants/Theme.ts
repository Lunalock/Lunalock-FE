import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native"
import { Colors } from "./Colors"

const themeTokens = {
    borderRadius: {
        xs: 3,
        sm: 5,
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    typography: {
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
    },
    shadow: {
        elevation: 2,
    },
}

const LLDarkTheme = {
    ...DarkTheme,
    ...themeTokens,
    colors: {
        ...DarkTheme.colors,
        ...Colors
        // Add dark theme colors in here as necessary
    }
}

// Customize this for light theme when we decide to support it
const LLLightTheme = {
    ...LLDarkTheme
}

const LLThemeConfig = {
    dark: LLDarkTheme,
    light: LLLightTheme
}

export { LLThemeConfig }
