import { theme } from "@/theme";
import { Text, View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface CardWapperProps {
  children?: React.ReactNode;
  title?: string;
  style?: ViewStyle;
  glow?: boolean;
}

export const CardWrapper: React.FC<CardWapperProps> = ({
  children,
  title,
  style,
  glow
}) => {
  const glowEffect = glow===true ? styles.glow : null
  return (
    <BlurView intensity={35} style={[styles.container, style, glowEffect]}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.cardBackground,
    borderColor: theme.primary,
    shadowColor: theme.accent,

    minHeight: 50,
    minWidth: "80%",
    borderRadius: 4,
    borderWidth: 1.5,
    marginTop: 10
  },
  glow: {
    boxShadow: "0px 0px 10px 2px rgba(0, 212, 255, 0.8)",
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contentContainer: {
    // marginTop: 4,
    padding: 10,
    //
  },
});
