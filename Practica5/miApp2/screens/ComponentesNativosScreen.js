import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';

import ActivityIndicatorDemo from '../components/ActivityIndicatorDemo';
import ActivityIndicatorCarga from '../components/ActivityIndicatorCarga';
import KeyBoardAvoidingViewDemo from '../components/KeyBoardAvoidingViewDemo';

export default function ComponentesNativosScreen() {
    return (
        <View style={styles.pantalla}>
            <StatusBar />

            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >

                <Text style={styles.titulo}>
                    Practica 16
                </Text>

                <Text style={styles.subtitulo}>
                    Componentes nativos
                </Text>

                <ActivityIndicatorDemo />
                <ActivityIndicatorCarga />
                <KeyBoardAvoidingViewDemo />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pantalla: {
        backgroundColor: '#F1F3F6',
        flex: 1,
    },
    container: {
        paddingBottom: 40,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    encabezado: {
        color: '#1D3557',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitulo: {
        color: '#555555',
        fontSize: 18,
        marginBottom: 25,
        textAlign: 'center',
    },
});