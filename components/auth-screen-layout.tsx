import { type ReactNode } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
    type ViewProps,
} from "react-native";
import { ThemedView } from "./themed-view";

const imuneImage = require("../assets/images/Imune.png");

interface AuthScreenLayoutProps extends ViewProps {
  children: ReactNode;
}

export function AuthScreenLayout({
  children,
  style,
  ...props
}: AuthScreenLayoutProps) {
  return (
    <ThemedView style={[styles.container, style]} {...props}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        >
          <View style={styles.header}>
            <Image
              source={imuneImage}
              style={styles.headerImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.card}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8B9F8",
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 36,
    paddingBottom: 0,
  },
  header: {
    width: "100%",
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  headerImage: {
    width: 180,
    height: 160,
  },
  card: {
    width: "90%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 24,
    elevation: 8,
  },
});
