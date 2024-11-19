import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Svg, { Circle } from "react-native-svg";

const FeelingSelector = () => {
  const [value, setValue] = useState(3); // Início no valor neutro (3)
  const animatedValue = useRef(new Animated.Value(1)).current; // UseRef para manter o Animated.Value

  // Lista de cores e níveis
  const levels = [
    { label: "Muito Desagradável", color: "red" },
    { label: "Desagradável", color: "orange" },
    { label: "Levemente Desagradável", color: "yellow" },
    { label: "Neutro", color: "violet" },
    { label: "Levemente Agradável", color: "blue" },
    { label: "Agradável", color: "indigo" },
    { label: "Muito Agradável", color: "#00ff00" },
  ];

  // Retorna a cor e o rótulo com base no valor atual
  const getLevel = (val: number) => {
    const index = Math.round(val);
    return levels[index];
  };

  // Animação do círculo pulsante
  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 1.2,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [animatedValue]);

  const currentLevel = getLevel(value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você se sente agora?</Text>

      {/* Dynamic Icon */}
      <View style={styles.iconContainer}>
      <Animated.View
          style={{
            transform: [{ scale: animatedValue }],
          }}
        >
          <Svg height="150" width="150"> 
            <Circle
              cx="75"
              cy="75"
              r={50 + value * 15} 
              fill={currentLevel.color}
              opacity={0.8}
            />
          </Svg>
        </Animated.View>
      </View>

      {/* Value Display */}
      <Text style={[styles.valueText, { color: currentLevel.color }]}>
        {currentLevel.label}
      </Text>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={6}
        step={1} // Ajuste para permitir apenas valores inteiros
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        minimumTrackTintColor={currentLevel.color}
        maximumTrackTintColor="#000000"
        thumbTintColor={currentLevel.color}
      />

      {/* Labels */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Muito Desagradável</Text>
        <Text style={styles.label}>Muito Agradável</Text>
      </View>

      {/* Próximo Button */}
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
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E3E3E",
    // padding: 20,
    paddingTop: 70
  },
  title: {
    fontSize: 25,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 70

  },
  iconContainer: {
    marginBottom: 20,
  },
  valueText: {
    fontSize: 25,
    marginBottom: 20,
  },
  slider: {
    width: "90%",
    height: 50,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 100,
  },
  label: {
    color: "#fff",
    fontSize: 15,
  },
  nextButton: {
    marginTop: 10,
    paddingHorizontal: 30,
    width: "85%",
    backgroundColor: "#3e3e3e", // Fundo cinza
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 2, // Adiciona borda
    borderColor: '#0000ff', // Cor da borda com arco-íris
  },



  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
 
    
  },
});

export default FeelingSelector;
