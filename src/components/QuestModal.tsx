import { theme } from "@/theme";
import { CardWrapper } from "./CardWrapper";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";

interface QuestModalProps {
  items?: [];
}

const DATA = [
  {
    id: '0',
    title: "Push-ups",
    currentStatus: 50,
    maxStatus: 100,
    isComplete: false,
  },
  {
    id: '1',
    title: "Sit-ups",
    currentStatus: 50,
    maxStatus: 100,
    isComplete: false,
  },
  {
    id: '2',
    title: "Squats",
    currentStatus: 50,
    maxStatus: 100,
    isComplete: false,
  },
  {
    id: '3',
    title: "Running",
    currentStatus: 5,
    maxStatus: 5,
    isComplete: true,
    units:'km',
  },
];

type TaskProps = {
  title: string,
  category?: string,
  currentStatus: number,
  maxStatus: number,
  isComplete: boolean,
  units?: string,
};

const Task = ({
  title,
  category,
  currentStatus,
  maxStatus,
  isComplete,
  units,
}: TaskProps) => (
  <View style={styles.item}>
    <Text style={styles.boldText}>{title}</Text>
    <Text>{category}</Text>
    <Text style={styles.text}>
      [{currentStatus}/{maxStatus}
      {units}] <Checkbox style={styles.checkbox} value={isComplete} />
    </Text>
  </View>
);

export const QuestModal: React.FC<QuestModalProps> = ({ items }) => {
  return (
    <CardWrapper glow style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>x</Text>
      </Pressable>
      <Text style={styles.text}>
        [Daily Quest:{" "}
        <Text style={styles.boldText}>Strange Training has Arrived.</Text>]
      </Text>
      <Text style={styles.title}>Goal</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            currentStatus={item.currentStatus}
            maxStatus={item.maxStatus}
            isComplete={item.isComplete}
            units={item.units}
          />
        )}
        keyExtractor={task => task.id}
      />
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: theme.text,
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
  },
  text: {
    color: theme.text,
    textAlign: "center",
  },
  boldText: {
    color: theme.text,
    fontWeight: "bold",
  },
  button: {
    alignItems: "flex-end",
    paddingRight: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  checkbox: {
    marginLeft: 10,
  }
});
