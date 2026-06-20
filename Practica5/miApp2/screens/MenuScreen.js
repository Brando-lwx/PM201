/* Zona 1: Importaciones de archivos y componentes */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import SwitchScreen from './SwitchScreen';

/* Zona 2: Main - Componentes */
export default function App() {

    const [screen, setScreen] = useState('Menu');

    switch (screen) {

        case 'Tarjetas':
            return <TarjetasScreen />;

        case 'Componente1':
            return <Componente1 />;

        case 'Switch':
            return <SwitchScreen />;

        case 'Menu':
        default:

            return (
                <View style={styles.container}>

                    <Text>Menu de Practicas</Text>

                    <Button
                        title='Practica Tarjetas'
                        onPress={() => setScreen('Tarjetas')}
                    />

                    <Button
                        title='Practica Componente 1'
                        onPress={() => setScreen('Componente1')}
                    />

                    <Button
                        title='Practica Switch'
                        onPress={() => setScreen('Switch')}
                    />

                </View>
            ); // Return

    } // switch

} // función

/* Zona 3: Estilos y posicionamientos */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});