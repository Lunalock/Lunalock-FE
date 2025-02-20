import { generateGlobalStyles, GlobalStyles } from "@/assets/styles/globalstyles";
import { LLThemeConfig } from "@/constants/Theme";
import { createContext, ReactNode, useContext } from "react";

const GlobalStylesContext = createContext<GlobalStylesContextProps | null>(null)

const GlobalStylesProvider = ({ currentTheme, children }: GlobalStylesProviderProps) => {
    const value = {
        globalStyles: generateGlobalStyles(currentTheme)
    }
    
    return (
        <GlobalStylesContext.Provider value={value}>
            {children}
        </GlobalStylesContext.Provider>
    )
}

const useGlobalStyles = () => {
    const context = useContext(GlobalStylesContext)

    if (!context) {
        throw new Error("useGlobalStyles must be used within an GlobalStylesProvider");
    }

    return context
}

type GlobalStylesContextProps = {
    globalStyles: GlobalStyles
}

type GlobalStylesProviderProps = {
    currentTheme: typeof LLThemeConfig.light | typeof LLThemeConfig.dark
    children: ReactNode
}

export { GlobalStylesProvider, useGlobalStyles }
