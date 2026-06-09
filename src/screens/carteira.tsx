import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/carteira.styles";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const HEALTH_POSTS = [
  {
    id: "1",
    name: "UBS Centro",
    address: "Rua do Sol, 123",
    vaccines: ["BCG", "Hepatite B", "Triplice Viral"],
  },
  {
    id: "2",
    name: "UBS Messejana",
    address: "Av. Dr. Francisco Sá, 456",
    vaccines: ["Covid-19", "Febre Amarela", "HPV"],
  },
  {
    id: "3",
    name: "UBS Aldeota",
    address: "Rua Pereira Filgueiras, 789",
    vaccines: ["Dengue", "Influenza", "Tétano"],
  },
  {
    id: "4",
    name: "UBS Graciliano Muniz",
    address: "Av. Nogueira Accioly, 100",
    vaccines: ["Poliomielite", "Raiva", "Sarampo"],
  },
];

export function CarteiraScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Postos de Vacinação</Text>

      <FlatList
        data={HEALTH_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postName}>{item.name}</Text>
            <Text style={styles.postAddress}>{item.address}</Text>

            <View style={styles.vaccinesContainer}>
              {item.vaccines.map((vaccine, index) => (
                <View key={index} style={styles.vaccineBadge}>
                  <Text style={styles.vaccineText}>{vaccine}</Text>
                </View>
              ))}
            </View>

            <Pressable style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar Vacina</Text>
            </Pressable>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
      />

      <BottomNav />
    </ThemedView>
  );
}
