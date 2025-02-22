import React from "react";
import { Calendar } from "react-native-calendars";
import { ScrollView, View } from "react-native";
import { useLLTheme } from "@/providers/LLThemeProvider";
import { CycleInfo } from "@/components/ui/CycleInfoCard/CycleInfoCardTypes";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { CycleInfoCards } from "@/components/ui/CycleInfoCard/CycleInfoCards";
import { useTheme } from "@react-navigation/native";


export default function HomeScreen() {

  const theme = useTheme()

  const cycleData: CycleInfo[] = [
    {
      label: "Next Period",
      date: "Mar 15, 2025",
      subtext: "In 7 days",
      bgColor: [Colors.dark.bgRed800, Colors.dark.bgRed700],
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
      bgColor: [Colors.dark.bgPurple800, Colors.dark.bgPurple500],
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
      bgColor: [Colors.dark.bgBlue800, Colors.dark.bgBlue500],
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

  return (
    <ScrollView>
      <CycleInfoCards cycleData={cycleData} />
      <View style={{marginBottom: theme.spacing.lg, backgroundColor: Colors.dark.calenderBg,  borderRadius: 12}}>
        <Calendar
          onDayPress={(day: any) => console.log(day)}
          theme={{
            calendarBackground: Colors.dark.calenderBg,
            monthTextColor: "#FFFFFF",
            dayTextColor: "#FFFFFF",
            textDisabledColor: "#AAAAAA",
            textMonthFontSize: 18,
            textMonthFontWeight: "bold",
            arrowColor: "#FFFFFF",
            todayTextColor: "#FFFFFF",
            todayBackgroundColor: Colors.dark.bgPurple800,
            
          }}
          style={{
            borderRadius: 12,
          }}
        />
      </View>
    </ScrollView>
  );
}
