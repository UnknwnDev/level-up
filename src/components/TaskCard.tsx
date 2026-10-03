import { theme } from "@/theme";
import { View, Text, StyleSheet } from "react-native";
import { CardWrapper } from "@/components/CardWrapper";

interface TaskCardProps {
  title: string;
  category: string;
  status: string;
  glow?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title, category, status, glow }) => {
  return (
    <CardWrapper glow={glow}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Push-ups</Text>
          <Text style={styles.category}>Daily Quest</Text>
        </View>
        <View>
          <Text style={styles.status}>[50/100]</Text>
        </View>
      </View>
    </CardWrapper>

  );
};

const styles = StyleSheet.create({
  container: {
    color: theme.text,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  category: {
    color: theme.text,
    opacity: .75,
  },
  status: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: 16,
}
});
