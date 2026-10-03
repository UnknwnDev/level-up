import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { theme } from "@/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: theme.background,
        },

        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,

        tabBarStyle: {
          backgroundColor: theme.background,
          // borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.secondary,
      }}
    >
      <Tabs.Screen name="home" options={{headerTitle: "Dashboard"}}/>
    </Tabs>
  );
}
