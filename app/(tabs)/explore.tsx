import { StyleSheet, Text, View } from "react-native";

import { ThemedView } from "@/components/themed-view";

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Esta tela ainda não foi implementada.</Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8B9F8",
  },
  content: {
    width: "90%",
    maxWidth: 420,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#5E4B94",
    textAlign: "center",
  },
});
