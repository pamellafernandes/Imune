import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { LoadingScreen } from "@/src/components/common/loading-screen";
import { AuthScreenLayout } from "@/src/components/layout/auth-screen-layout";
import { MOCK_USER, validateCredentials } from "@/src/services/auth/mock-auth";

export function LoginScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleLogin() {
    if (validateCredentials(name, password)) {
      setErrorMessage("");
      router.replace(
        `/_home?user=${encodeURIComponent(name.trim() || MOCK_USER.username)}`,
      );
      return;
    }

    setErrorMessage("Usuário ou senha incorretos. Use admin / 123456.");
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthScreenLayout>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          placeholderTextColor="#B0A7D1"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#B0A7D1"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <Pressable style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Continuar</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => router.push("/cadastro")}
      >
        <Text style={styles.secondaryButtonText}>Criar cadastro</Text>
      </Pressable>
    </AuthScreenLayout>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: 16,
    paddingHorizontal: 18,
    color: "#4B367C",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(75, 54, 124, 0.12)",
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#4B367C",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "#B00020",
    marginBottom: 16,
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: "#E8B9F8",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  secondaryButton: {
    alignItems: "center",
    paddingVertical: 14,
  },
  secondaryButtonText: {
    color: "#4B367C",
    fontSize: 16,
    fontWeight: "700",
  },
});
