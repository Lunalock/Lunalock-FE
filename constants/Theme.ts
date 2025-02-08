// import { Colors } from "./Colors";
import { config as colors } from "@/components/ui/gluestack-ui-provider/config"

export const Theme = {
    borderRadius: {
        xs: 3,
        sm: 5,
    },
    colors: { ...colors },
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