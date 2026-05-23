import { BottomNav } from "@/components/bottom-nav";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextStyle,
  type ViewStyle,
} from "react-native";

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

function DoseItem({
  item,
}: {
  item: {
    id: string;
    name: string;
    status: string;
    local?: string;
    data?: string;
  };
}) {
  return (
    <View style={styles.itemCard}>
      <View>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>{item.local}</Text>
        <Text style={styles.itemSubtitle}>{item.data}</Text>
      </View>
      <View style={badgeStyle(item.status)}>
        <Text
          style={[styles.badgeText, { color: badgeTextColor(item.status) }]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );
}

export default function ExploreScreen() {
  const [search, setSearch] = useState("");

  const filtered = doses.filter((dose) => {
    const query = search.toLowerCase();
    return (
      dose.name.toLowerCase().includes(query) ||
      dose.status.toLowerCase().includes(query) ||
      dose.local?.toLowerCase().includes(query)
    );
  });

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Suas doses</Text>
        <Text style={styles.subtitle}>
          Veja o nome da vacina e o status de cada dose.
        </Text>
      </View>

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por vacina, status ou local..."
          placeholderTextColor="#9E8FBF"
          value={search}
          onChangeText={setSearch}
          clearButtonMode="while-editing"
        />
      </View>

      {filtered.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma dose encontrada.</Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <DoseItem item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      )}

      <BottomNav />
    </ThemedView>
  );
}

const styles = StyleSheet.create<{
  container: ViewStyle;
  header: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  searchWrapper: ViewStyle;
  searchInput: TextStyle;
  list: ViewStyle;
  itemCard: ViewStyle;
  itemTitle: TextStyle;
  itemSubtitle: TextStyle;
  separator: ViewStyle;
  badgeText: TextStyle;
  emptyContainer: ViewStyle;
  emptyText: TextStyle;
}>({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
    paddingTop: 40,
  },
  header: {
    width: "90%",
    alignSelf: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#4B367C",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#5E4B94",
    lineHeight: 22,
  },
  searchWrapper: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: "#4B367C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  itemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 6,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#4B367C",
    marginBottom: 6,
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#5E4B94",
  },
  separator: {
    height: 12,
  },
  badgeText: {
    fontWeight: "700",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: "#5E4B94",
  },
});
