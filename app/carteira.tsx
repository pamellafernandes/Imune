import { BottomNav } from "@/components/bottom-nav";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

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
    vaccines: ["Penta", "Rotavírus", "Meningocócica"],
  },
  {
    id: "4",
    name: "UBS Messejana II",
    address: "Rua Cidade de Maracanaú, 101",
    vaccines: ["BCG", "Hepatite B", "DTP"],
  },

  {
    id: "5",
    name: "UBS Graciliano Muniz",
    address: "Rua 106, 345",
    vaccines: ["Gripe", "Hepatite C", "Dengue"],
  },

  {
    id: "6",
    name: "UBS Dr. João Elísio Holanda",
    address: "Rua Expedicionários I",
    vaccines: ["DTP", "Influenza", "SRC"],
  },
];

function HealthPostItem({
  item,
}: {
  item: { id: string; name: string; address: string; vaccines: string[] };
}) {
  return (
    <View style={styles.vaccineRow}>
      <View style={styles.postInfo}>
        <Text style={styles.vaccineName}>{item.name}</Text>
        <Text style={styles.vaccineDate}>{item.address}</Text>
        <Text style={styles.vaccineList}>
          Vacinas: {item.vaccines.join(", ")}
        </Text>
      </View>
    </View>
  );
}

export default function CarteiraScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>Voltar</Text>
          </Pressable>
          <Text style={styles.title}>Postos de Saúde em Fortaleza</Text>
        </View>

        <FlatList
          data={HEALTH_POSTS}
          keyExtractor={(i) => i.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <HealthPostItem item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

        <View style={styles.footer}>
          <Pressable
            style={styles.primaryButton}
            onPress={() => router.replace("/")}
          ></Pressable>
        </View>
        <BottomNav />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8B9F8" },
  safeArea: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 12,
  },
  backButton: { marginRight: 12 },
  backText: { color: "#4B367C", fontWeight: "700" },
  title: { fontSize: 20, fontWeight: "800", color: "#4B367C" },
  list: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 120 },
  vaccineRow: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
  },
  postInfo: {
    flex: 1,
  },
  vaccineName: { fontSize: 16, fontWeight: "800", color: "#4B367C" },
  vaccineDate: { fontSize: 13, color: "#5E4B94", marginTop: 4 },
  vaccineList: { fontSize: 13, color: "#5E4B94", marginTop: 8 },
  separator: { height: 12 },
  footer: { paddingHorizontal: 20, paddingBottom: 20, marginTop: "auto" },
  primaryButton: {
    backgroundColor: "#E8B9F8",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: { color: "#FFFFFF", fontWeight: "700" },
});
