import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SupportInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Apoio Emocional</Text>

      {/* Conteúdo (Texto de apoio e técnicas de respiração) */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>
          O CVV oferece apoio emocional e prevenção do suicídio 24 horas por
          dia, todos os dias da semana. O atendimento é gratuito e voluntário, e
          pode ser feito por telefone, email, chat e Skype. O número do CVV é{" "}
          <Text style={styles.highlight}>188</Text>.
        </Text>

        <Text style={styles.text}>
          Existem diversas técnicas de respiração que podem ajudar a controlar a
          ansiedade, como a <Text style={styles.highlight}>respiração 4-7-8</Text>, a{" "}
          <Text style={styles.highlight}>respiração quadrada</Text> e a{" "}
          <Text style={styles.highlight}>respiração nasal</Text>:
        </Text>

        <Text style={styles.breathingTitle}>Respiração 4-7-8:</Text>
        <Text style={styles.text}>
          Inspire silenciosamente pelo nariz até quatro, prenda a respiração até
          sete e expire pela boca até oito. Repita o processo quatro vezes.
        </Text>

        <Text style={styles.breathingTitle}>Respiração quadrada:</Text>
        <Text style={styles.text}>
          Inspire lentamente pelo nariz até quatro, pause por quatro segundos,
          expire pela boca até quatro e pause por mais quatro segundos.
        </Text>

        <Text style={styles.breathingTitle}>Respiração nasal:</Text>
        <Text style={styles.text}>
          Inspire e expire longamente e profundamente pelo nariz.
        </Text>

        <Text style={styles.text}>
          A respiração consciente pode ser uma ferramenta poderosa para controlar
          a ansiedade e outros quadros relacionados à saúde mental. Quando se
          está ansioso, é comum gerar tensão no diafragma, o que impede a
          expulsão adequada do ar. Por isso, em situações de ansiedade, é
          importante exalar para esvaziar os pulmões e permitir que mais ar novo
          entre na próxima inspiração.
        </Text>
      </ScrollView>

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
    backgroundColor: "#3e3e3e", // Fundo ajustado
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
    lineHeight: 22,
    textAlign: "justify", // Texto justificado
  },
  highlight: {
    fontWeight: "bold",
    color: "#00dd00", // Destaque em amarelo dourado
  },
  breathingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    marginBottom: 5,
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

export default SupportInfo;
