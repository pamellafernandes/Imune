import { Link } from "expo-router";
import { Text } from "react-native";

import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/modal.styles";

export function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>This is a modal</Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text style={{ color: "#0a7ea4", textDecorationLine: "underline" }}>
          Go to home screen
        </Text>
      </Link>
    </ThemedView>
  );
}
