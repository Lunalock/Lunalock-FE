import React, { createContext, useContext, useState, ReactNode } from "react";
import { LLThemeConfig } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ColorSchemeName } from "react-native";

const LLThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const LLThemeProvider = ({ children }: ThemeProviderProps) => {
    const colorSheme = useColorScheme()
    const [themeTitle, setTheme] = useState<ColorSchemeName>(colorSheme);

    const value = {
        themeTitle,
        setTheme,
        currentTheme: themeTitle === "dark" ? LLThemeConfig.dark : LLThemeConfig.light,
    };

    return (
        <LLThemeContext.Provider value={value}>
            {children}
        </LLThemeContext.Provider>
    );
};

// Custom hook to consume LLThemeProvider
const useLLTheme = () => {
    const context = useContext(LLThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within an LLThemeProvider");
    }

    return context;
};

interface ThemeContextProps {
    themeTitle: ColorSchemeName;
    setTheme: (themeTitle: ColorSchemeName) => void;
    currentTheme: typeof LLThemeConfig.light | typeof LLThemeConfig.dark;
}

type ThemeProviderProps = {
    children: ReactNode
}

export { LLThemeProvider, useLLTheme }