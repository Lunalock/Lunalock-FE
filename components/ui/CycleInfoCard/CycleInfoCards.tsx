import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { CycleInfo } from "./CycleInfoCardTypes";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";

interface CycleInfoCardProps {
  cycleData: CycleInfo[];
}



const CycleInfoCards: React.FC<CycleInfoCardProps> = ({ cycleData }) => {

  return (
    <View style={styles.container}>
      {cycleData.map((stat: CycleInfo) => (
        <View key={stat.label} style={styles.cardContainer}>
          <LinearGradient colors={stat.bgColor} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>{stat.label}</Text>
              <Text style={styles.date}>{stat.date}</Text>
              <Text style={styles.subtext}>{stat.subtext}</Text>
            </View>
            {stat.iconHtml}
          </LinearGradient>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  cardContainer: {
    marginBottom: 12,
  },
  card: {
    position: "relative",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "70%",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.85,
    color: Colors.dark.white,
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark.white,
  },
  subtext: {
    fontSize: 14,
    color: Colors.dark.white,
    opacity: 0.75,
  },
});

export { CycleInfoCards };
