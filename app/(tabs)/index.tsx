import { StyleSheet } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { GsBox, GsText } from "@/components/gs-components";
import React from "react";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";

const statsData: StatItem[] = [
  {
    label: "Next Period",
    date: "Mar 15, 2025",
    subtext: "In 7 days",
    bgColor: ["#6A1B1A", "#C62828"],
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
    bgColor: ["#4527A0"," #7E57C2"],
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
    bgColor: ["#1565C0", "#42A5F5"],
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
  const theme = useTheme();

  return (
    <ScrollView>
      <GsBox className="w-full pb-4 pt-4 px-3">
        {statsData.map((stat) => (
          <GsBox key={stat.label} className={`relative p-2 ${stat.bgColor}`}>
            <LinearGradient
              key={stat.label}
              colors={stat.bgColor}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                position: 'relative', 
                padding: 20,
                borderRadius: 12,
              }}
            >
              <GsBox className="flex flex-col gap-1 w-[70%]">
                <GsText className="text-sm font-semibold opacity-85">
                  {stat.label}
                </GsText>

                <GsText className="text-xl font-bold">{stat.date}</GsText>

                <GsText className="text-sm opacity-75">{stat.subtext}</GsText>
              </GsBox>
              {stat.iconHtml}
            </LinearGradient>
          </GsBox>
        ))}
        <GsBox className="rounded-xl overflow-hidden mb-4 bg-gray-900 mt-2">
          <Calendar
            onDayPress={(day: any) => console.log(day)}
            theme={{
              calendarBackground: `rgb(${theme.colors["--color-background-0"]})`,
            }}
          />
        </GsBox>
      </GsBox>
    </ScrollView>
  );
}

interface StatItem {
  label: string;
  date: string;
  subtext: string;
  bgColor: [string, string];
  iconHtml: JSX.Element;
}
