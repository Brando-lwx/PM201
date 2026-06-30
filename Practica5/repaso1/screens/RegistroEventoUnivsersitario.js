import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, Alert, StyleSheet} from "react-native";

export default function RegistroEventoUniversitario(){

    const [nombre,setNombre]=useState("");
    const [carrera,setCarrera]=useState("");
    const [semestre,setSemestre]=useState("");

    const [taller,setTaller]=useState(false);
    const [constancia,setConstancia]=useState(false);
    const [deporte,setDeporte]=useState(false);

    const registrar=()=>{

        if(nombre.trim()==="" || carrera.trim()==="" || semestre.trim()===""){
            Alert.alert(
                "Campos vacíos",
                "Todos los TextInput son obligatorios."
            );
            return;
        }

        if(!/^[0-9]+$/.test(semestre)){
            Alert.alert(
                "Semestre inválido",
                "El semestre debe ser numérico."
            );
            return;
        }

        Alert.alert(
            "Registro exitoso",

            `Nombre: ${nombre}
            Carrera: ${carrera}
            Semestre: ${semestre}
            Taller: ${taller ? "Sí":"No"}
            Constancia: ${constancia ? "Sí":"No"}
            Deportes: ${deporte ? "Sí":"No"}`
        );

    }

    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Registro de Evento Universitario
            </Text>

            <TextInput
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />

            <TextInput
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
                style={styles.input}
            />

            <TextInput
                placeholder="Semestre"
                value={semestre}
                onChangeText={setSemestre}
                keyboardType="numeric"
                style={styles.input}
            />

            <View style={styles.switchContainer}>
                <Text>¿Asistirá al taller?</Text>

                <Switch
                    value={taller}
                    onValueChange={setTaller}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>¿Requiere constancia?</Text>

                <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>¿Participará en actividades deportivas?</Text>

                <Switch
                    value={deporte}
                    onValueChange={setDeporte}
                />
            </View>

            <Button
                title="Enviar Registro"
                onPress={registrar}
            />

        </View>

    );

}

const styles=StyleSheet.create({

    container:{
        flex:1,
        padding:20,
        justifyContent:"center"
    },

    titulo:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:20,
        textAlign:"center"
    },

    input:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginBottom:15
    },

    switchContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:15
    }

});