import { Text, View, StyleSheet, useColorScheme } from "react-native";
import { customThemes } from "@/constants/Colors";

export default function Index() {
  const theme = useColorScheme() === 'dark' ? 'dark' : 'light';

  const styles = createStyles(customThemes[theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Home!</Text>
    </View>
  );
}


const createStyles = (themeColors: typeof customThemes.light) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: themeColors.text,
    }
  });
