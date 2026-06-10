import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/perfil.styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const user = {
  nome: "Marcelo Brito",
  email: "marcelo.brito@email.com",
  endereco: "Rua das Flores, 123, Apt. 45, Fortaleza - CE",
  dataNascimento: "10/08/1990",
};

export function PerfilScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const username = typeof params.user === "string" ? params.user : user.nome;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          <Text style={styles.title}>Perfil</Text>
          <Text style={styles.subtitle}>Informações do usuário</Text>
        </View>

        <View style={styles.infoCard}>
          <InfoField label="Nome" value={username} />
          <View style={styles.divider} />
          <InfoField label="Email" value={user.email} />
          <View style={styles.divider} />
          <InfoField label="Endereço" value={user.endereco} />
          <View style={styles.divider} />
          <InfoField label="Data de nascimento" value={user.dataNascimento} />
        </View>

        <BottomNav />
      </SafeAreaView>
    </ThemedView>
  );
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoField}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
