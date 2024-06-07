import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    marginBottom: 8,
  },
  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e23c44",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
});
