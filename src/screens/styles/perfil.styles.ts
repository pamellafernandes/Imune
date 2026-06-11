import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
    paddingHorizontal: 20,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.select({ ios: 50, android: 40, default: 40 }),
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: Platform.select({ ios: 50, android: 40, default: 40 }),
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
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  infoField: {
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 12,
  },
  label: {
    color: "#4B367C",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
  },
  value: {
    color: "#4B367C",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
});
