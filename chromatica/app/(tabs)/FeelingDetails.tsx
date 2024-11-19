import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';


const FeelingDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const defaultLevel = { label: "Desagradável", color: "blue" };
  const { level = defaultLevel } = route?.params || {};

  // Lista de sentimentos com base na escolha
  const feelings = {
    "Muito Desagradável": [
      "Raiva",
      "Ansiedade",
      "Medo",
      "Sobrecarga",
      "Vergonha",
      "Desgosto",
      "Constrangimento",
      "Frustração",
      "Aborrecimento",
      "Inveja",
      "Estresse",
      "Preocupação",
      "Culpa",
      "Desespero",
      "Irritação",
      "Solidão",
      "Desânimo",
      "Decepção",
      "Esgotamento",
      "Tristeza",
    ],
    "Desagradável": [
      "Preocupação",
      "Cansaço",
      "Tensão",
      "Estresse",
      "Raiva",
      "Ansiedade",
      "Medo",
      "Sobrecarga",
      "Vergonha",
      "Desgosto",
      "Constrangimento",
      "Frustração",
      "Aborrecimento",
      "Inveja",
      "Estresse",
      "Preocupação",
      "Culpa",
      "Desespero",
      // "Irritação",
      // "Solidão",
      // "Desânimo",
      // "Decepção",
      // "Esgotamento",
      // "Tristeza",
    ],
    // Outras categorias...
  };

  const feelingOptions = feelings[level.label] || []; // Lista de sentimentos específicos

  // Cores para as bordas dos botões
  const borderColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  return (
    <View style={[styles.container, { backgroundColor: "#3e3e3e" }]}>
      {/* Título */}
      <Text style={styles.title}>{level.label}</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        O que descreve melhor esse sentimento?
      </Text>

      {/* Sentimentos */}
      <ScrollView
        contentContainerStyle={styles.feelingContainer}
        showsVerticalScrollIndicator={false}
      >
        {feelingOptions.map((feeling, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.feelingButton,
              { borderColor: borderColors[index % borderColors.length] }, // Alterna as cores das bordas
            ]}
          >
            <Text style={styles.feelingText}>{feeling}</Text>
          </TouchableOpacity>
        ))}
        {/* <TouchableOpacity style={styles.showMoreButton}>
          <Text style={styles.showMoreText}>Mostrar Mais {">"}</Text>
        </TouchableOpacity> */}
      </ScrollView>

      {/* Botão Seguinte */}
      <TouchableOpacity
        style={styles.nextButton}
      >
        <Text style={styles.nextButtonText}>Próximo</Text>
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
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  feelingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
    
  },
  feelingButton: {
    backgroundColor: "#222",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderWidth: 2, // Adiciona a borda
  },
  feelingText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  showMoreButton: {
    marginTop: 10,
  },
  showMoreText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
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

export default FeelingDetails;
