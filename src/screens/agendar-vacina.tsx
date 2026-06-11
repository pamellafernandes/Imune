import { BottomNav } from "@/src/components/layout/bottom-nav";
import { ThemedView } from "@/src/components/ui/themed-view";
import { styles } from "@/src/screens/styles/agendar-vacina.styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

interface VacinaOption {
  id: string;
  nome: string;
  descricao: string;
}

const vacinas: VacinaOption[] = [
  { id: "1", nome: "COVID-19", descricao: "Proteção contra COVID-19" },
  {
    id: "2",
    nome: "Febre Amarela",
    descricao: "Proteção contra febre amarela",
  },
  { id: "3", nome: "HPV", descricao: "Proteção contra HPV" },
  { id: "4", nome: "Influenza", descricao: "Proteção contra gripe" },
  { id: "5", nome: "Tétano", descricao: "Proteção contra tétano" },
  { id: "6", nome: "Dengue", descricao: "Proteção contra dengue" },
];

export function AgendarVacinaScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const posto = typeof params.posto === "string" ? params.posto : "UBS Centro";

  const [selectedVacina, setSelectedVacina] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    if (Platform.OS === "android") {
      setShowTimePicker(false);
    }
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleAgendarVacina = () => {
    if (!selectedVacina) {
      alert("Por favor, selecione uma vacina");
      return;
    }

    const vacinaSelecionada = vacinas.find((v) => v.id === selectedVacina);
    const dataFormatada = date.toLocaleDateString("pt-BR");
    const horaFormatada = time.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    alert(
      `Agendamento confirmado!\n\nVacina: ${vacinaSelecionada?.nome}\nPosto: ${posto}\nData: ${dataFormatada}\nHora: ${horaFormatada}`,
    );

    router.back();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </Pressable>
          <Text style={styles.title}>Agendar Vacina</Text>
          <Text style={styles.subtitle}>{posto}</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* Seleção de Vacina */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Selecione a Vacina</Text>
            <View style={styles.vacinasContainer}>
              {vacinas.map((vacina) => (
                <Pressable
                  key={vacina.id}
                  style={[
                    styles.vacinaCard,
                    selectedVacina === vacina.id && styles.vacinaCardSelected,
                  ]}
                  onPress={() => setSelectedVacina(vacina.id)}
                >
                  <View style={styles.vacinaCardContent}>
                    <Text
                      style={[
                        styles.vacinaNome,
                        selectedVacina === vacina.id &&
                          styles.vacinaNomeSelected,
                      ]}
                    >
                      {vacina.nome}
                    </Text>
                    <Text
                      style={[
                        styles.vacinaDescricao,
                        selectedVacina === vacina.id &&
                          styles.vacinaDescricaoSelected,
                      ]}
                    >
                      {vacina.descricao}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.radio,
                      selectedVacina === vacina.id && styles.radioSelected,
                    ]}
                  >
                    {selectedVacina === vacina.id && (
                      <View style={styles.radioDot} />
                    )}
                  </View>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Seleção de Data */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data da Vacina</Text>
            <Pressable
              style={styles.dateTimeButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateTimeButtonText}>
                📅 {formatDate(date)}
              </Text>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleDateChange}
                minimumDate={new Date()}
              />
            )}
          </View>

          {/* Seleção de Hora */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Horário da Vacina</Text>
            <Pressable
              style={styles.dateTimeButton}
              onPress={() => setShowTimePicker(true)}
            >
              <Text style={styles.dateTimeButtonText}>
                🕐 {formatTime(time)}
              </Text>
            </Pressable>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleTimeChange}
              />
            )}
          </View>

          {/* Resumo */}
          {selectedVacina && (
            <View style={styles.resumoCard}>
              <Text style={styles.resumoTitle}>Resumo do Agendamento</Text>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoLabel}>Vacina:</Text>
                <Text style={styles.resumoValue}>
                  {vacinas.find((v) => v.id === selectedVacina)?.nome}
                </Text>
              </View>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoLabel}>Posto:</Text>
                <Text style={styles.resumoValue}>{posto}</Text>
              </View>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoLabel}>Data:</Text>
                <Text style={styles.resumoValue}>{formatDate(date)}</Text>
              </View>
              <View style={styles.resumoItem}>
                <Text style={styles.resumoLabel}>Hora:</Text>
                <Text style={styles.resumoValue}>{formatTime(time)}</Text>
              </View>
            </View>
          )}

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.confirmButton}
              onPress={handleAgendarVacina}
            >
              <Text style={styles.confirmButtonText}>
                Confirmar Agendamento
              </Text>
            </Pressable>
          </View>
        </ScrollView>

        <BottomNav />
      </SafeAreaView>
    </ThemedView>
  );
}
