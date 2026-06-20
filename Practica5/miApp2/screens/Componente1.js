/* Zona 1: Importaciones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


/* Zona 2: Main - Componentes */
export default function App() {
  return (

    <View style={styles.container}>
        <Text>Aquí va la primer practica de Componentes Nativos</Text>
    <StatusBar style="auto" />
    </View>

  );
}

/* Zona 3: Estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },

  tarjetaVerde: {
    backgroundColor: '#6BCB77',
  },
  tarjetaRoja: {
    backgroundColor: '#FF6B6B',
  },
});
