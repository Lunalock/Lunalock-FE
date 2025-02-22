import { Tabs } from "expo-router";
import React, { ReactNode } from "react";
import { Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { CustomHeader } from "@/components/ui/CustomHeader";
import { useTheme } from "@react-navigation/native";

type Icons = "home" | "bar-chart" | "plus-circle" | "cog";

type Tab = {
  icon: Icons;
  name: string;
  headerShown?: boolean;
  customHeader?: () => ReactNode;
}

export default function TabLayout() {
  const theme = useTheme()
  const tabs: Tab[] = [
    {
      icon: "home",
      name: "index",
      headerShown: true,
      customHeader: () => <CustomHeader />,
    },
    { icon: "bar-chart", name: "stats" },
    { icon: "plus-circle", name: "symptomsPage" },
    { icon: "cog", name: "settings" },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {backgroundColor: Colors.dark.tabsBg}
        }),
      }}
    >
      {tabs.map((tab, idx) => (
        <Tabs.Screen
          key={idx}
          name={tab.name}
          options={{
            title: tab.name,
            header: tab?.customHeader,
            headerShown: tab.headerShown ?? false,
            sceneStyle: {marginLeft: theme.spacing.md, marginRight: theme.spacing.md},
            tabBarIcon: ({ color }) => (
              <FontAwesome name={tab.icon} size={28} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
