import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, Button, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AlertScreen() {

    const [message, setMessage] = useState("Sin acción");

    const createTwoButtonAlert = () =>
        Alert.alert("Alerta de 2 botones", "Elige una opción", [
            {
                text: "Cancelar",
                onPress: () => setMessage("Presionaste Cancelar"),
                style: "cancel",
            },
            {
                text: "Aceptar",
                onPress: () => setMessage("Presionaste Aceptar"),
            },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert(
            "Alerta de 3 botones",
            "Elige una opción",
            [
                {
                    text: "Pregúntame más tarde",
                    onPress: () => setMessage("Pregúntame más tarde"),
                },
                {
                    text: "Cancelar",
                    onPress: () => setMessage("Presionaste Cancelar"),
                    style: "cancel",
                },
                {
                    text: "Aceptar",
                    onPress: () => setMessage("Presionaste Aceptar"),
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    setMessage("La alerta se cerró sin elegir una opción"),
            }
        );

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Hola RN: Componente Alert</Text>

            <Text style={styles.subtitle}>
                Estado actual: {message}
            </Text>

            <View style={styles.button}>
                <Button
                    title="Alerta de 2 botones"
                    onPress={createTwoButtonAlert}
                />
            </View>

            <View style={styles.button}>
                <Button
                    title="Alerta de 3 botones"
                    onPress={createThreeButtonAlert}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fefefe",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4A90E2",
        marginBottom: 20,
    },

    subtitle: {
        fontSize: 18,
        marginBottom: 25,
        color: "#333",
    },

    button: {
        width: "80%",
        marginVertical: 10,
    },
});