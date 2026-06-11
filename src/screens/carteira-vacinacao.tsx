import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/carteira-vacinacao.styles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface VacinaCarteira {
  id: string;
  nome: string;
  doses: {
    numero: number;
    data?: string;
    status: "completo" | "pendente";
  }[];
  obrigatoria: boolean;
}

const CARTEIRA_VACINAS: VacinaCarteira[] = [
  {
    id: "1",
    nome: "Febre Amarela",
    obrigatoria: true,
    doses: [
      { numero: 1, data: "15/03/2015", status: "completo" },
      { numero: 2, data: "15/03/2025", status: "pendente" },
    ],
  },
  {
    id: "2",
    nome: "COVID-19",
    obrigatoria: true,
    doses: [
      { numero: 1, data: "10/02/2021", status: "completo" },
      { numero: 2, data: "15/03/2021", status: "completo" },
      { numero: 3, data: "10/09/2021", status: "completo" },
      { numero: 4, data: "15/05/2024", status: "completo" },
    ],
  },
  {
    id: "3",
    nome: "Influenza",
    obrigatoria: true,
    doses: [{ numero: 1, data: "05/02/2024", status: "completo" }],
  },
  {
    id: "4",
    nome: "HPV",
    obrigatoria: true,
    doses: [
      { numero: 1, data: "20/03/2024", status: "completo" },
      { numero: 2, data: "20/06/2024", status: "pendente" },
    ],
  },
  {
    id: "5",
    nome: "Meningite",
    obrigatoria: true,
    doses: [{ numero: 1, data: "12/01/2015", status: "completo" }],
  },
  {
    id: "6",
    nome: "Hepatite B",
    obrigatoria: true,
    doses: [
      { numero: 1, data: "10/08/1990", status: "completo" },
      { numero: 2, data: "10/09/1990", status: "completo" },
      { numero: 3, data: "10/11/1990", status: "completo" },
    ],
  },
];

const user = {
  nome: "Marcelo Brito",
  dataNascimento: "10/08/1990",
  cpf: "123.456.789-00",
};

export function CarteiraVacinacaoScreen() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCompletionPercentage = () => {
    const totalDoses = CARTEIRA_VACINAS.reduce(
      (acc, vacina) => acc + vacina.doses.length,
      0,
    );
    const completedDoses = CARTEIRA_VACINAS.reduce(
      (acc, vacina) =>
        acc + vacina.doses.filter((d) => d.status === "completo").length,
      0,
    );
    return Math.round((completedDoses / totalDoses) * 100);
  };

  const hasPendingVaccines = CARTEIRA_VACINAS.some((vacina) =>
    vacina.doses.some((dose) => dose.status === "pendente"),
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </Pressable>
        <Text style={styles.title}>Carteira de Vacinação</Text>
        <Text style={styles.subtitle}>Seu comprovante de imunização</Text>
      </View>

      <FlatList
        data={CARTEIRA_VACINAS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            {/* Cartão de Informações Pessoais */}
            <View style={styles.userCard}>
              <Text style={styles.userLabel}>Titular</Text>
              <Text style={styles.userName}>{user.nome}</Text>

              <View style={styles.userInfo}>
                <View style={styles.userInfoItem}>
                  <Text style={styles.userInfoLabel}>Data de Nascimento</Text>
                  <Text style={styles.userInfoValue}>
                    {user.dataNascimento}
                  </Text>
                </View>
                <View style={styles.userInfoItem}>
                  <Text style={styles.userInfoLabel}>CPF</Text>
                  <Text style={styles.userInfoValue}>{user.cpf}</Text>
                </View>
              </View>
            </View>

            {/* Cartão de Progresso */}
            <View style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressTitle}>Status de Imunização</Text>
                <Text style={styles.progressPercentage}>
                  {getCompletionPercentage()}%
                </Text>
              </View>

              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${getCompletionPercentage()}%` },
                  ]}
                />
              </View>

              {hasPendingVaccines && (
                <Text style={styles.alertText}>
                  ⚠️ Você tem vacinas pendentes. Agende sua próxima dose!
                </Text>
              )}
            </View>

            <Text style={styles.vacinasTitle}>Vacinas Obrigatórias</Text>
          </>
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.vacinaItem}
            onPress={() => toggleExpand(item.id)}
          >
            <View style={styles.vacinaHeader}>
              <View style={styles.vacinaNameContainer}>
                <Text style={styles.vacinaNome}>{item.nome}</Text>
                <Text style={styles.obrigatoriaLabel}>Obrigatória</Text>
              </View>
              <Text style={styles.expandIcon}>
                {expandedId === item.id ? "▼" : "▶"}
              </Text>
            </View>

            {expandedId === item.id && (
              <View style={styles.dosesContainer}>
                {item.doses.map((dose) => (
                  <View key={dose.numero} style={styles.doseRow}>
                    <View style={styles.doseInfo}>
                      <Text style={styles.doseNumber}>Dose {dose.numero}</Text>
                      {dose.data && (
                        <Text style={styles.doseDate}>{dose.data}</Text>
                      )}
                    </View>
                    <View
                      style={[
                        styles.doseBadge,
                        dose.status === "completo"
                          ? styles.doseBadgeCompleto
                          : styles.doseBadgePendente,
                      ]}
                    >
                      <Text
                        style={[
                          styles.doseBadgeText,
                          dose.status === "completo"
                            ? styles.doseBadgeTextoCompleto
                            : styles.doseBadgeTextoPendente,
                        ]}
                      >
                        {dose.status === "completo"
                          ? "✓ Aplicada"
                          : "⏳ Pendente"}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </Pressable>
        )}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <BottomNav />
    </ThemedView>
  );
}
