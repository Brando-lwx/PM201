import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Estudiantes from '../components/Estudiantes';

export default function FlatListScreen() {

    const estudiantes = [
        {
            id: '1',
            nombre: 'Brando',
            carrera: 'ISC'
        },

        {
            id: '2',
            nombre: 'Andreu',
            carrera: 'ISC'
        },

        {
            id: '3',
            nombre: 'Dominic',
            carrera: 'ISC'
        }
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Lista de estudiantes
            </Text>

            
            <FlatList

                data={estudiantes}
                renderItem={({ item }) => (

                    <Estudiantes
                        nombre={item.nombre}
                        carrera={item.carrera}
                    />

                )}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    card: {
        backgroundColor: '#d4f1f4',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }

});