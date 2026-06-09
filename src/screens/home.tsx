import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/home.styles";

export function HomeScreen() {
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
