import { StyleSheet } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { verifyInstallation } from "nativewind";
import { GsBox, GsText } from "@/components/gs-components";
import React from "react";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native";
import { Theme } from "@/constants/Theme";
import { useTheme } from "@/hooks/useTheme";

interface StatItem {
  label: string;
  date: string;
  subtext: string;
  bgColor?: string;
  iconHtml: any;
}

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
  const theme = useTheme()

  console.log(theme)
  
  return (
    <ScrollView>
      <GsBox className="w-full pb-4 pt-4 px-3">
        {statsData.map((stat) => (
          <GsBox
            key={stat.label}
            className={`relative p-4 rounded-xl shadow-lg mb-4 ${stat.bgColor}`}
          >
            <GsBox className="flex flex-col gap-1 w-[70%]">
              <GsText className="text-sm font-semibold opacity-85">
                {stat.label}
              </GsText>

              <GsText className="text-xl font-bold">{stat.date}</GsText>

              <GsText className="text-sm opacity-75">{stat.subtext}</GsText>
            </GsBox>
            {stat.iconHtml}
          </GsBox>
        ))}
        <GsBox className="rounded-xl overflow-hidden mb-4 bg-gray-900">
          <Calendar
            onDayPress={(day:any) => console.log(day)}
            theme={{
              calendarBackground: `rgb(${theme.colors['--color-background-0']})`
            }}
          />
        </GsBox>
      </GsBox>
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
