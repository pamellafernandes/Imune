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
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#4B367C",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  postName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 4,
  },
  postAddress: {
    fontSize: 13,
    color: "#8B6BA8",
    marginBottom: 12,
  },
  vaccinesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  vaccineBadge: {
    backgroundColor: "#F4E9FF",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  vaccineText: {
    fontSize: 11,
    color: "#6B3C99",
    fontWeight: "600",
  },
  scheduleButton: {
    backgroundColor: "#E8B9F8",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  scheduleButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
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
});
