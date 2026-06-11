import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
  },
  header: {
    paddingTop: Platform.select({ ios: 50, android: 40, default: 40 }),
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    marginBottom: 16,
  },
  backButtonText: {
    color: "#4B367C",
    fontWeight: "700",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#4B367C",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#4B367C",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  vacinaCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  vacinaNomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vacinaNome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B367C",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  cardContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#888888",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B367C",
  },
  proximaDose: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F59E0B",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginVertical: 12,
  },
});
