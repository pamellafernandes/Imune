import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
    paddingTop: Platform.select({
      ios: 60,
      android: 40,
      default: 40,
    }),
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#4B367C",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  searchInput: {
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(75, 54, 124, 0.12)",
    fontSize: 14,
    color: "#4B367C",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  doseItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  doseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  doseName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4B367C",
    flex: 1,
  },
  doseInfo: {
    fontSize: 12,
    color: "#8B6BA8",
    marginBottom: 4,
  },
});
