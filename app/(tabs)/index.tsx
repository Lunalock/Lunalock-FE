import { StyleSheet, Text } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native";
import { useLLTheme } from "@/providers/LLThemeProvider";
import { useGlobalStyles } from "@/providers/GlobalStylesProvider";

const statsData: StatItem[] = [
  {
    label: "Next Period",
    date: "Mar 15, 2025",
    subtext: "In 7 days",
    bgColor: "bg-gradient-to-r from-red-800 to-red-700",
    iconHtml: (
      <FontAwesome5
        name={"calendar"}
        size={28}
        color={"#fff"}
        className="absolute right-12 top-1/2 -translate-y-1/2"
      />
    ),
  },
  {
    label: "Ovulation Day",
    date: "Mar 1, 2025",
    subtext: "High Fertility",
    bgColor: "bg-gradient-to-r from-purple-800 to-purple-500",
    iconHtml: (
      <FontAwesome5
        name={"egg"}
        size={28}
        color={"#fff"}
        className="absolute right-12 top-1/2 -translate-y-1/2"
      />
    ),
  },
  {
    label: "Cycle Length",
    date: "28 Days",
    subtext: "Regular",
    bgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
    iconHtml: (
      <Entypo
        name={"cycle"}
        size={28}
        color={"#fff"}
        className="absolute right-12 top-1/2 -translate-y-1/2"
      />
    ),
  },
];

export default function HomeScreen() {
  const { currentTheme } = useLLTheme()
  const { globalStyles } = useGlobalStyles()

  return (
    <ScrollView>
      <Text style={{ ...globalStyles.marginXl, color: "white" }}>
        Delete this test Text after merged
      </Text>
      
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