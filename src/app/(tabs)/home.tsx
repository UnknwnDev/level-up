import { Text, View, StyleSheet, useColorScheme, FlatList } from "react-native";
import { theme } from "@/theme";
import { TaskCard } from "@/components/TaskCard";
import { QuestModal } from "@/components/QuestModal";




export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Home!</Text>
      <TaskCard title="Push-ups" category="Daily Quest" status="[50/100]" />
      {/*<ItemCard title="Push-ups" category="Daily Quest" status="[50/100]" />*/}
      <QuestModal>
      </QuestModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.text,
  },
});
