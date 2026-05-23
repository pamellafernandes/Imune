import { BottomNav } from "@/components/bottom-nav";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const quickActions = [
  { label: "Histórico de vacinas" },
  { label: "Vacinas pendentes" },
  { label: "Doses programa das" },
  { label: "Carteira de vacinação" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topBar}>
            <View>
              <Text style={styles.title}>Olá admin</Text>
            </View>
            <Pressable
              style={styles.menuButton}
              onPress={() => setMenuVisible(true)}
              accessibilityLabel="Abrir menu"
            >
              <Text style={styles.menuText}>≡</Text>
            </Pressable>
          </View>

          <Modal
            visible={menuVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setMenuVisible(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPressOut={() => setMenuVisible(false)}
            >
              <View style={styles.menuModal}>
                <Pressable
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    router.push("/carteira");
                  }}
                >
                  <Text style={styles.menuItemText}>Pontos de Vacinação</Text>
                </Pressable>

                <Pressable
                  style={styles.menuItem}
                  onPress={() => {
                    setMenuVisible(false);
                    router.replace("/");
                  }}
                >
                  <Text style={styles.menuItemText}>Sair</Text>
                </Pressable>
              </View>
            </TouchableOpacity>
          </Modal>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Próxima vacina</Text>
            <View style={styles.vaccineCard}>
              <Text style={styles.vaccineCardText}>Nome da vacina</Text>
              <Text style={styles.vaccineCardSubtitle}>aqui</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Acesso rápido</Text>

          <View style={styles.quickActions}>
            {quickActions.map((action) => (
              <Pressable key={action.label} style={styles.quickActionCard}>
                <Text style={styles.quickActionText}>{action.label}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
        <BottomNav />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#4B367C",
  },
  menuButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  menuText: {
    fontSize: 24,
    color: "#4B367C",
    lineHeight: 28,
  },
  card: {
    borderRadius: 32,
    padding: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 16,
    textAlign: "center",
  },
  vaccineCard: {
    backgroundColor: "#F4E9FF",
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  vaccineCardText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#4B367C",
    textAlign: "center",
    marginBottom: 6,
  },
  vaccineCardSubtitle: {
    fontSize: 15,
    color: "#5E4B94",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionCard: {
    width: "48%",
    minHeight: 110,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 6,
    marginBottom: 16,
  },
  quickActionText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#4B367C",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 16,
  },
  menuModal: {
    width: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 15,
    color: "#4B367C",
    fontWeight: "700",
  },
});
