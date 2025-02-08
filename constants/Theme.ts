import { DarkTheme, DefaultTheme } from "@react-navigation/native"
import { config as gsColors } from "@/components/ui/gluestack-ui-provider/config"

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

const LLThemeConfig = {
    dark: {
        ...DarkTheme,
        ...themeTokens,
        colors: {
            ...DarkTheme.colors,
            ...gsColors.dark as Record<GluestackThemeColorKeys, string>
        }
    },

    light: {
        ...DefaultTheme,
        ...themeTokens,
        colors: {
            ...DefaultTheme.colors,
            ...gsColors.light as Record<GluestackThemeColorKeys, string>
        }
    },
}

export { LLThemeConfig }

type GluestackThemeColorKeys =
  | "--color-primary-0"
  | "--color-primary-50"
  | "--color-primary-100"
  | "--color-primary-200"
  | "--color-primary-300"
  | "--color-primary-400"
  | "--color-primary-500"
  | "--color-primary-600"
  | "--color-primary-700"
  | "--color-primary-800"
  | "--color-primary-900"
  | "--color-primary-950"
  | "--color-secondary-0"
  | "--color-secondary-50"
  | "--color-secondary-100"
  | "--color-secondary-200"
  | "--color-secondary-300"
  | "--color-secondary-400"
  | "--color-secondary-500"
  | "--color-secondary-600"
  | "--color-secondary-700"
  | "--color-secondary-800"
  | "--color-secondary-900"
  | "--color-secondary-950"
  | "--color-tertiary-0"
  | "--color-tertiary-50"
  | "--color-tertiary-100"
  | "--color-tertiary-200"
  | "--color-tertiary-300"
  | "--color-tertiary-400"
  | "--color-tertiary-500"
  | "--color-tertiary-600"
  | "--color-tertiary-700"
  | "--color-tertiary-800"
  | "--color-tertiary-900"
  | "--color-tertiary-950"
  | "--color-error-0"
  | "--color-error-50"
  | "--color-error-100"
  | "--color-error-200"
  | "--color-error-300"
  | "--color-error-400"
  | "--color-error-500"
  | "--color-error-600"
  | "--color-error-700"
  | "--color-error-800"
  | "--color-error-900"
  | "--color-error-950"
  | "--color-success-0"
  | "--color-success-50"
  | "--color-success-100"
  | "--color-success-200"
  | "--color-success-300"
  | "--color-success-400"
  | "--color-success-500"
  | "--color-success-600"
  | "--color-success-700"
  | "--color-success-800"
  | "--color-success-900"
  | "--color-success-950"
  | "--color-warning-0"
  | "--color-warning-50"
  | "--color-warning-100"
  | "--color-warning-200"
  | "--color-warning-300"
  | "--color-warning-400"
  | "--color-warning-500"
  | "--color-warning-600"
  | "--color-warning-700"
  | "--color-warning-800"
  | "--color-warning-900"
  | "--color-warning-950"
  | "--color-info-0"
  | "--color-info-50"
  | "--color-info-100"
  | "--color-info-200"
  | "--color-info-300"
  | "--color-info-400"
  | "--color-info-500"
  | "--color-info-600"
  | "--color-info-700"
  | "--color-info-800"
  | "--color-info-900"
  | "--color-info-950"
  | "--color-typography-0"
  | "--color-typography-50"
  | "--color-typography-100"
  | "--color-typography-200"
  | "--color-typography-300"
  | "--color-typography-400"
  | "--color-typography-500"
  | "--color-typography-600"
  | "--color-typography-700"
  | "--color-typography-800"
  | "--color-typography-900"
  | "--color-typography-950"
  | "--color-outline-0"
  | "--color-outline-50"
  | "--color-outline-100"
  | "--color-outline-200"
  | "--color-outline-300"
  | "--color-outline-400"
  | "--color-outline-500"
  | "--color-outline-600"
  | "--color-outline-700"
  | "--color-outline-800"
  | "--color-outline-900"
  | "--color-outline-950"
  | "--color-background-0"
  | "--color-background-50"
  | "--color-background-100"
  | "--color-background-200"
  | "--color-background-300"
  | "--color-background-400"
  | "--color-background-500"
  | "--color-background-600"
  | "--color-background-700"
  | "--color-background-800"
  | "--color-background-900"
  | "--color-background-950"
  | "--color-background-error"
  | "--color-background-warning"
  | "--color-background-success"
  | "--color-background-muted"
  | "--color-background-info"
  | "--color-indicator-primary"
  | "--color-indicator-info"
  | "--color-indicator-error";
