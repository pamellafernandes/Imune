import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/vacinas-pendentes.styles";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const vacinasPendentes = [
  {
    id: "1",
    nome: "Influenza",
    status: "Pendente",
    local: "UBS João Elísio Holanda",
    data: "10/07/2026",
  },
  {
    id: "2",
    nome: "Covid-19",
    status: "Pendente",
    local: "UBS Aldeota",
    data: "18/07/2026",
  },
  {
    id: "3",
    nome: "Penta",
    status: "Pendente",
    local: "UBS Graciliano Muniz",
    data: "21/07/2026",
  },
];

function VacinaPendenteItem({
  item,
}: {
  item: (typeof vacinasPendentes)[number];
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.cardText}>Local: {item.local}</Text>
      <Text style={styles.cardText}>Data agendada: {item.data}</Text>
    </View>
  );
}

export function VacinasPendentesScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
        <Text style={styles.title}>Vacinas Pendentes</Text>
      </View>

      <Text style={styles.subtitle}>
        Confira as vacinas que ainda precisam ser tomadas e agendadas.
      </Text>

      <FlatList
        data={vacinasPendentes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VacinaPendenteItem item={item} />}
        contentContainerStyle={styles.listContent}
      />

      <BottomNav />
    </ThemedView>
  );
}
