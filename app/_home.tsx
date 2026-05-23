import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { BottomNav } from "@/components/bottom-nav";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const { user } = useLocalSearchParams();
  const username = user ? String(user) : "Admin";

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo, {username}!</Text>
          <Text style={styles.subtitle}>
            Você acessou a tela Home com sucesso.
          </Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Mock de credenciais</Text>
            <Text style={styles.cardText}>Usuário: admin</Text>
            <Text style={styles.cardText}>Senha: 123456</Text>
          </View>
        </View>
        <BottomNav />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E8B9F8",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 90,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#4B367C",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#5E4B94",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    color: "#5E4B94",
    marginBottom: 6,
  },
});
