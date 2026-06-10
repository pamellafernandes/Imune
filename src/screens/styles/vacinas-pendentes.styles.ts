import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
    paddingTop: Platform.select({
      ios: 50,
      android: 40,
      default: 40,
    }),
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 24,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 16,
    marginBottom: 16,
  },
  backButtonText: {
    color: "#4B367C",
    fontWeight: "700",
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#4B367C",
  },
  subtitle: {
    fontSize: 14,
    color: "#4B367C",
    marginBottom: 20,
    lineHeight: 22,
  },
  listContent: {
    paddingBottom: 120,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4B367C",
  },
  badge: {
    backgroundColor: "#FFF3E6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: "#854F0B",
    fontWeight: "700",
    fontSize: 12,
  },
  cardText: {
    fontSize: 14,
    color: "#4B367C",
    marginBottom: 6,
  },
});
