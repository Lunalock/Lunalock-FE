import { StyleSheet } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native";
import { useLLTheme } from "@/providers/LLThemeProvider";

export default function HomeScreen() {
  const { currentTheme } = useLLTheme()

  return (
    <ScrollView>
      <Calendar
        onDayPress={(day:any) => console.log(day)}
        theme={{
          calendarBackground: currentTheme.colors.border
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

interface StatItem {
  label: string;
  date: string;
  subtext: string;
  bgColor?: string;
  iconHtml: any;
}