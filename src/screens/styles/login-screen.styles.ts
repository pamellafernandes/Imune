import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  keyboardContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: Platform.select({ ios: 50, android: 40, default: 40 }),
    paddingBottom: 24,
    paddingHorizontal: 20,
  },

  headerImage: {
    width: 160,
    height: 160,
    marginBottom: -8,
  },

  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#4B367C",
    marginBottom: 24,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: "#F4E9FF",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#4B367C",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(75, 54, 124, 0.12)",
  },
  errorText: {
    color: "#B00020",
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "rgba(176, 0, 32, 0.1)",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#E8B9F8",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  footerLink: {
    marginTop: 16,
    alignItems: "center",
  },
  footerLinkText: {
    color: "#4B367C",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
