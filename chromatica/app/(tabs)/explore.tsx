import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Svg, { Circle } from 'react-native-svg';

const FeelingSelector = () => {
  const [value, setValue] = useState(0);
  const animatedValue = new Animated.Value(1);

  // Função para interpolar a cor de vermelho para verde
  const calculateColor = (val) => {
    const red = Math.floor(255 * (1 - val));
    const green = Math.floor(255 * val);
    return `rgb(${red},${green},0)`;
  };

  // Animação do círculo pulsante
  useEffect(() => {
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
  }, []);

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
          <Svg height="100" width="100">
            <Circle
              cx="50"
              cy="50"
              r={30 + value * 20}
              fill={calculateColor(value)}
              opacity={0.8}
            />
          </Svg>
        </Animated.View>
      </View>

      {/* Value Display */}
      <Text style={[styles.valueText, { color: calculateColor(value) }]}>
        {value >= 0.5 ? 'Agradável' : 'Desagradável'}
      </Text>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        minimumTrackTintColor={calculateColor(value)}
        maximumTrackTintColor="#000000"
        thumbTintColor={calculateColor(value)}
      />

      {/* Labels */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Muito Agradável</Text>
        <Text style={styles.label}>MUito Desagradável</Text>
      </View>

      {/* Próximo Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => alert('Next button pressed!')}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E3E3E',
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  valueText: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: '90%',
    height: 40,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  label: {
    color: '#fff',
    fontSize: 14,
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: '#0000ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeelingSelector;
