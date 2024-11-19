import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const FeelingDetailsInput = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const defaultLevel = { label: "Desagradável", color: "blue" };

  // Estado para o texto inserido pelo usuário
  const [userInput, setUserInput] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "#3e3e3e" }]}>
      {/* Título */}
      {/* <Text style={styles.title}>{level.label}</Text> */}

      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Descreva como você está se sentindo:
      </Text>

      {/* Caixa de texto */}
      <TextInput
        style={styles.input}
        placeholder="Escreva aqui..."
        placeholderTextColor="#ccc"
        multiline
        value={userInput}
        onChangeText={setUserInput}
      />

      {/* Botão Seguinte */}
      <TouchableOpacity
        style={styles.nextButton}
        
      >
        <Text style={styles.nextButtonText}>Seguinte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: "#000",
    textAlignVertical: "top", // Alinha o texto no topo da caixa
    minHeight: 500, // Altura mínima para permitir multiline
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#3e3e3e", // Fundo cinza
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 2, // Adiciona borda
    borderColor: '#0000ff', // Cor da borda com arco-íris
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FeelingDetailsInput;
