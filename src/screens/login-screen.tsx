import { LoadingScreen } from "@/src/components/common/loading-screen";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/login-screen.styles";
import { MOCK_USER, validateCredentials } from "@/src/services/auth/mock-auth";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const imuneImage = require("@/assets/images/Imune.png");

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
      // Redireciona para / (raiz) passando o parâmetro user
      router.replace({
        pathname: "/home",
        params: { user: name.trim() || MOCK_USER.username },
      });
      return;
    }
    setErrorMessage("Usuário ou senha incorretos. Tente novamente.");
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <View style={styles.headerContainer}>
              <Image
                source={imuneImage}
                style={styles.headerImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Faça seu login</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Nome de Usuário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite aqui"
                  placeholderTextColor="#B0A7D1"
                  value={name}
                  onChangeText={setName}
                  editable={!isLoading}
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
                  editable={!isLoading}
                />
              </View>

              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}

              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.primaryButton}
                  onPress={handleLogin}
                  disabled={isLoading}
                >
                  <Text style={styles.primaryButtonText}>Continuar</Text>
                </Pressable>
              </View>

              <Pressable
                style={styles.footerLink}
                onPress={() => router.push("/cadastro")}
                disabled={isLoading}
              >
                <Text style={styles.footerLinkText}>Criar cadastro</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
