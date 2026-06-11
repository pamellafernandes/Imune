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
  { label: "Histórico de vacinas", route: "/historico-vacinas" },
  { label: "Vacinas pendentes", route: "/vacinas-pendentes" },
  { label: "Postos de Vacinação", route: "/carteira" },
  { label: "Carteira de vacinação", route: "/carteira-vacinacao" },
];

export function HomeScreen() {
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
            <Text style={styles.title}>Olá Marcelo</Text>
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
                  router.push("/perfil");
                }}
              >
                <Text style={styles.menuItemText}>Perfil</Text>
              </Pressable>

              <Pressable
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  router.replace("/login");
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
            <Text style={styles.vaccineCardText}>Gripe</Text>
            <Text style={styles.vaccineCardSubtitle}>
              UBS João Elísio Holanda
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Acesso rápido</Text>

        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <Pressable
              key={action.label}
              style={styles.quickActionCard}
              onPress={() => action.route && router.push(action.route)}
              disabled={!action.route}
            >
              <Text style={styles.quickActionText}>{action.label}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <BottomNav />
    </ThemedView>
  );
}
