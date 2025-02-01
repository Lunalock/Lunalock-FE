import { MD3Theme, MD3DarkTheme } from "react-native-paper"

const LLDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "red"
  }
}

export default LLDarkTheme
