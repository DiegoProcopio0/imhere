import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Participant } from "@/components/Participant";

export default function HomeScreenHomeScreen() {
  const participantes: string[] = [
    "Diego",
    "João",
    "Rodrigo",
    "Moa",
    "Bryan",
    "Vini",
    "Neymar",
    "Biro",
    "Ana",
    "Bia",
    "Sophia",
    "Gabriela",
    "DJ",
  ];

  function handlerParticipantAdd() {
    if (participantes.includes("DJ")) {
      return Alert.alert(
        "Participante já existe",
        "Participante já existe na lista do evento"
      );
    }

    console.log("add");
  }
  function handlerParticipantRemove(name: string) {
    return Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () => participantes.splice(participantes.indexOf(name), 1),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Nome do Evento!</ThemedText>
        <ThemedText type="default">Sábado 8 de junho de 2024</ThemedText>
      </ThemedView>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          width: "100%",
          marginBottom: 42,
          marginTop: 36,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handlerParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ThemedText type="defaultSemiBold">
            Nenhum participante adicionado
          </ThemedText>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31cf57",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  input: {
    flex: 1,
    backgroundColor: "#222",
    height: 56,
    borderRadius: 8,
    color: "#999",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
