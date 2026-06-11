import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/historico-vacinas.styles";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface VacinaHistorico {
  id: string;
  nome: string;
  dataAplicacao: string;
  local: string;
  proximaDose?: string;
  status: "completo" | "pendente";
}

const HISTORICO_VACINAS: VacinaHistorico[] = [
  {
    id: "1",
    nome: "COVID-19",
    dataAplicacao: "15/05/2024",
    local: "UBS Centro",
    proximaDose: "15/11/2024",
    status: "completo",
  },
  {
    id: "2",
    nome: "Febre Amarela",
    dataAplicacao: "10/04/2024",
    local: "UBS Messejana",
    proximaDose: undefined,
    status: "completo",
  },
  {
    id: "3",
    nome: "HPV",
    dataAplicacao: "20/03/2024",
    local: "UBS Aldeota",
    proximaDose: "20/06/2024",
    status: "pendente",
  },
  {
    id: "4",
    nome: "Influenza",
    dataAplicacao: "05/02/2024",
    local: "UBS Graciliano Muniz",
    proximaDose: "05/02/2025",
    status: "completo",
  },
  {
    id: "5",
    nome: "Tétano",
    dataAplicacao: "12/01/2024",
    local: "UBS Centro",
    proximaDose: "12/01/2026",
    status: "completo",
  },
  {
    id: "6",
    nome: "Dengue",
    dataAplicacao: "28/12/2023",
    local: "UBS Aldeota",
    proximaDose: "28/03/2024",
    status: "pendente",
  },
];

export function HistoricoVacinasScreen() {
  const router = useRouter();

  const getStatusColor = (status: string) => {
    return status === "completo" ? "#10B981" : "#F59E0B";
  };

  const getStatusText = (status: string) => {
    return status === "completo" ? "Completo" : "Pendente";
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
        <Text style={styles.title}>Histórico de Vacinas</Text>
        <Text style={styles.subtitle}>Seu registro de imunização</Text>
      </View>

      <FlatList
        data={HISTORICO_VACINAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.vacinaCard}>
            <View style={styles.cardHeader}>
              <View style={styles.vacinaNomeContainer}>
                <Text style={styles.vacinaNome}>{item.nome}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(item.status) },
                  ]}
                >
                  <Text style={styles.statusText}>
                    {getStatusText(item.status)}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>📅 Data de aplicação</Text>
                <Text style={styles.value}>{item.dataAplicacao}</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.infoRow}>
                <Text style={styles.label}>📍 Local</Text>
                <Text style={styles.value}>{item.local}</Text>
              </View>

              {item.proximaDose && (
                <>
                  <View style={styles.divider} />
                  <View style={styles.infoRow}>
                    <Text style={styles.label}>🔄 Próxima dose</Text>
                    <Text style={styles.proximaDose}>{item.proximaDose}</Text>
                  </View>
                </>
              )}
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <BottomNav />
    </ThemedView>
  );
}
