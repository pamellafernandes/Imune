import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { AuthScreenLayout } from "./auth-screen-layout";
import { LoadingScreen } from "./loading-screen";

export function CadastroScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthScreenLayout>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Nome completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          placeholderTextColor="#B0A7D1"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          placeholderTextColor="#B0A7D1"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
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

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite novamente"
          placeholderTextColor="#B0A7D1"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Criar cadastro</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => router.push("/")}>
        <Text style={styles.secondaryButtonText}>Voltar ao login</Text>
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
  primaryButton: {
    backgroundColor: "#E8B9F8",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 4,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  secondaryButton: {
    alignItems: "center",
    paddingVertical: 14,
    marginTop: 12,
  },
  secondaryButtonText: {
    color: "#4B367C",
    fontSize: 16,
    fontWeight: "700",
  },
});
