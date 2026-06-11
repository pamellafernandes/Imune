import { IconSymbol } from "@/src/components/ui/icon-symbol";
import { usePathname, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const tabs = [
  { label: "Início", route: "/home", icon: "house.fill" },
  { label: "Doses", route: "/explore", icon: "syringe.fill" },
  { label: "Postos", route: "/carteira", icon: "cross.fill" },
] as const;

type TabItem = (typeof tabs)[number];

export function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const currentRoute = pathname?.split("?")[0] ?? "/";

  return (
    <View style={styles.container}>
      {tabs.map((tab: TabItem) => {
        const isActive = currentRoute === tab.route;

        return (
          <Pressable
            key={tab.route}
            style={[styles.button, isActive && styles.buttonActive]}
            onPress={() => router.push(tab.route)}
          >
            <IconSymbol
              name={tab.icon}
              size={22}
              color={isActive ? "#6B3C99" : "#4B367C"}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "rgba(75, 54, 124, 0.12)",
    paddingVertical: 12,
    height: 72,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 12,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  buttonActive: {
    opacity: 1,
  },
  label: {
    fontSize: 12,
    color: "#4B367C",
    marginTop: 4,
    textAlign: "center",
  },
  labelActive: {
    color: "#6B3C99",
    fontWeight: "700",
  },
});
