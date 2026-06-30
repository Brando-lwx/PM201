import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Estudiantes(props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nombre: {props.nombre}</Text>
            <Text style={styles.title}>Carrera: {props.carrera}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
    backgroundColor:'#6BCB77',
    padding:15,
    margin:10,
    borderRadius:10
    }
});
