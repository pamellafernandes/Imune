import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.select({ ios: 50, android: 40, default: 40 }),
    paddingHorizontal: 20,
  },
  header: {
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
  scrollView: {
    flex: 1,
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 12,
  },
  vacinasContainer: {
    gap: 10,
  },
  vacinaCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  vacinaCardSelected: {
    borderColor: "#8B5CF6",
    backgroundColor: "#F5F3FF",
  },
  vacinaCardContent: {
    flex: 1,
  },
  vacinaNome: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 4,
  },
  vacinaNomeSelected: {
    color: "#8B5CF6",
  },
  vacinaDescricao: {
    fontSize: 12,
    color: "#888888",
  },
  vacinaDescricaoSelected: {
    color: "#6B4BA6",
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D0D0D0",
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    borderColor: "#8B5CF6",
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8B5CF6",
  },
  dateTimeButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  dateTimeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4B367C",
  },
  resumoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#8B5CF6",
  },
  resumoTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4B367C",
    marginBottom: 16,
  },
  resumoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  resumoLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#888888",
  },
  resumoValue: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4B367C",
  },
  buttonContainer: {
    marginBottom: 24,
  },
  confirmButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
