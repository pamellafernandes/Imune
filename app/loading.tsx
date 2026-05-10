import { LoadingScreen } from "@/components/loading-screen";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function LoadingScreenExample() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemedView style={styles.container}>
      {isLoading ? (
        <LoadingScreen message="Imune..." />
      ) : (
        <ThemedView style={styles.content}>
          <Text style={styles.title}>Carregamento Completo!</Text>
          <Pressable style={styles.button} onPress={() => setIsLoading(true)}>
            <Text style={styles.buttonText}>Mostrar Loading Novamente</Text>
          </Pressable>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  title: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#0a7ea4",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
