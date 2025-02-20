import { LLThemeConfig } from "@/constants/Theme";

function generateGlobalStyles(theme: typeof LLThemeConfig.light | typeof LLThemeConfig.dark) {
    return {
        marginXl: {
            margin: theme.spacing.xl
        }
    } as const
}

type GlobalStyles = ReturnType<typeof generateGlobalStyles>

export { generateGlobalStyles, type GlobalStyles }