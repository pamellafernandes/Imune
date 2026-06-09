import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/home-tab.styles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
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

export function HomeTabScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <ThemedView style={styles.container}>
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
    </ThemedView>
  );
}
