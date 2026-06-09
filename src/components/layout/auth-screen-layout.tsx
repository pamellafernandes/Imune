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
import { ThemedView } from "@/src/components/ui/themed-view";

const imuneImage = require("@/assets/images/Imune.png");

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
    minHeight: "100%",
    justifyContent: "flex-end",
  },
  header: {
    height: 280,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerImage: {
    width: 160,
    height: 160,
    marginBottom: -8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginVertical: 32,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
});
