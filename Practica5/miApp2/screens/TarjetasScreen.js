/* Zona 1: Importaciones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Perfil} from '../components/Perfil';

/* Zona 2: Main - Componentes */
export default function App() {
  return (

    <View style={styles.container}>

    <Perfil style={styles.tarjetaVerde} nombre="Brando Aldair Machucho Ambrocio" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatri="Noveno cuatrimestre"/>
    <Perfil style={styles.tarjetaRoja} nombre="Andreu" carrera="ISC" materia="PM" cuatri="0"/>
    <Perfil style={styles.tarjetaVerde} nombre="Dominic" carrera="TIID" materia="PM" cuatri="4"/>

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
