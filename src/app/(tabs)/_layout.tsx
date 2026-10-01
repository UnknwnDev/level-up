import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { customThemes } from "@/constants/Colors";

export default function TabLayout() {
  const theme = useColorScheme() === 'dark' ? 'dark' : "light";
  const themeColors = customThemes[theme];

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: themeColors.background,
        },

        headerStyle: {
          backgroundColor: themeColors.background,
        },
        headerTintColor: themeColors.text,

        tabBarStyle: {
          backgroundColor: themeColors.background,
          // borderTopWidth: 0,
        },
        tabBarActiveTintColor: themeColors.accent,
        tabBarInactiveTintColor: themeColors.secondary,
      }}
    >
      <Tabs.Screen name="home" options={{headerTitle: "Dashboard"}}/>
    </Tabs>
  );
}
