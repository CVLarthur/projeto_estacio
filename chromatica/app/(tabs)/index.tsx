import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#3e3e3e', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/capa.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo ao Chromática!</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Apresentação</ThemedText>
        <ThemedText style={{textAlign:'justify'}}>
          O Chromatica é um aplicativo  focado em saúde mental, 
          inspirado no universo artístico e emocional do álbum Chromatica 
          de Lady Gaga. Unindo arte, e bem-estar, 
          o app oferece ferramentas interativas para meditação, 
          autocuidado e reflexão emocional, ajudando você a encontrar equilíbrio em meio ao caos.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">--</ThemedText>
        <ThemedText style={{textAlign:'justify'}}>
        No Chromatica, acreditamos que cada pessoa tem o poder de transformar sua dor em força, 
        assim como Gaga nos ensina através de sua jornada. 
        Explore um espaço onde emoções são acolhidas, 
        e a busca pela paz interior é guiada por cores, sons e experiências inspiradoras.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">--</ThemedText>
        <ThemedText style={{textAlign:'justify'}}>
        Entre em um novo mundo, cuide da sua mente e celebre sua autenticidade com o Chromatica!
        </ThemedText>
      </ThemedView>

      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    
  },
  reactLogo: {
    height: screenWidth * 250 / 420,
    width: screenWidth,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
