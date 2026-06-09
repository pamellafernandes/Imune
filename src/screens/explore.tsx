import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/explore.styles";
import { useState } from "react";
import { FlatList, Text, TextInput, View, type ViewStyle } from "react-native";

const doses = [
  {
    id: "1",
    name: "BCG",
    status: "Tomada",
    local: "UBS João Elísio Holanda",
    data: "12/05/1994",
  },
  {
    id: "2",
    name: "Hepatite B",
    status: "Tomada",
    local: "UBS Centro",
    data: "15/08/2024",
  },
  {
    id: "3",
    name: "Penta",
    status: "Pendente",
    local: "UBS Aldeota",
    data: "10/09/2024",
  },
  {
    id: "4",
    name: "Covid-19",
    status: "Agendada",
    local: "UBS Messejana II",
    data: "15/09/2024",
  },
  {
    id: "5",
    name: "Influenza",
    status: "Expirada",
    local: "UBS Messejana",
    data: "15/08/2024",
  },
  {
    id: "6",
    name: "DTP",
    status: "Tomada",
    local: "UBS Centro",
    data: "15/08/2024",
  },
  {
    id: "7",
    name: "SRC",
    status: "Agendada",
    local: "UBS Aldeota",
    data: "15/09/2025",
  },
  {
    id: "8",
    name: "Dengue",
    status: "Agendada",
    local: "UBS Graciliano Muniz",
    data: "20/09/2025",
  },
];

function badgeStyle(status: string): ViewStyle {
  const map: Record<string, string> = {
    Tomada: "#E8F6EF",
    Pendente: "#FFF3E6",
    Agendada: "#E6F1FB",
    Expirada: "#FCEBEB",
  };
  return {
    backgroundColor: map[status] ?? "#F0F0F0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  };
}

function badgeTextColor(status: string): string {
  const map: Record<string, string> = {
    Tomada: "#0F6E56",
    Pendente: "#854F0B",
    Agendada: "#185FA5",
    Expirada: "#A32D2D",
  };
  return map[status] ?? "#4B367C";
}

function DoseItem({ item }: { item: (typeof doses)[0] }) {
  return (
    <View style={styles.doseItem}>
      <View style={styles.doseHeader}>
        <Text style={styles.doseName}>{item.name}</Text>
        <View style={badgeStyle(item.status)}>
          <Text
            style={{
              color: badgeTextColor(item.status),
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            {item.status}
          </Text>
        </View>
      </View>
      <Text style={styles.doseInfo}>📍 {item.local}</Text>
      <Text style={styles.doseInfo}>📅 {item.data}</Text>
    </View>
  );
}

export function ExploreScreen() {
  const [searchText, setSearchText] = useState("");

  const filteredDoses = doses.filter((dose) =>
    dose.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Minhas Doses</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar vacina..."
        placeholderTextColor="#B0A7D1"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredDoses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DoseItem item={item} />}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
      />

      <BottomNav />
    </ThemedView>
  );
}
