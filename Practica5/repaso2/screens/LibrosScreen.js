import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable, FlatList, Alert, ActivityIndicator } from "react-native";

export default function LibrosScreen() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");
    const [libros, setLibros] = useState([]);
    const [cargando, setCargando] = useState(false);

    const agregarLibro = () => {

        if (
            titulo.trim() === "" ||
            autor.trim() === "" ||
            genero.trim() === ""
        ) 
        {
            Alert.alert("Error", "Todos los campos son obligatorios.");
            return;
        }

        setCargando(true);

        setTimeout(() => {

            const nuevoLibro = {
                id: Date.now().toString(),
                titulo,
                autor,
                genero
            };

            setLibros([...libros, nuevoLibro]);
            setTitulo("");
            setAutor("");
            setGenero("");
            setCargando(false);

            Alert.alert("Correcto", "Libro agregado.");

        }, 4000);

    }

    return (

        <ImageBackground
            source={require("../assets/ci.jpg")}
            resizeMode="cover"
            style={styles.container}
        >

            <Text style={styles.title}>
                Registro de Libros
            </Text>

            <TextInput
                placeholder="Título"
                style={styles.input}
                value={titulo}
                onChangeText={setTitulo}
            />

            <TextInput
                placeholder="Autor"
                style={styles.input}
                value={autor}
                onChangeText={setAutor}
            />

            <TextInput
                placeholder="Género"
                style={styles.input}
                value={genero}
                onChangeText={setGenero}
            />

            <Pressable
                style={styles.boton}
                onPress={agregarLibro}
            >

                <Text style={styles.textoBoton}>
                    Agregar Libro
                </Text>

            </Pressable>

            {cargando &&
                <ActivityIndicator
                    size="large"
                    color="white"
                />
            }

            <FlatList

                data={libros}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>

                    <View style={styles.card}>

                        <Text>Título: {item.titulo}</Text>
                        <Text>Autor: {item.autor}</Text>
                        <Text>Género: {item.genero}</Text>

                    </View>

                }

            />

        </ImageBackground>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 40,
        color: "white"
    },

    input: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },

    boton: {
        backgroundColor: "#a52812",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20
    },

    textoBoton: {
        color: "white",
        fontWeight: "bold"
    },

    card: {
        backgroundColor: "white",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10
    }

});