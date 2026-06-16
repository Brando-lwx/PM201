 /* PERFIL usando destructuración */
import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';



export const Perfil = ({nombre, carrera, materia, cuatri, style}) => {
    //Majeno de estado para mostrar o ocultar la información del perfil
    const[mostrar, setMostrar] = useState(false);

    return(
        <View style = {[estilos.tarjeta, style]}>

            <Text style = {estilos.nombre}> {nombre} </Text>

            {mostrar && 
            //Fragment
                <>
                    <Text style = {estilos.carrera}> {carrera} </Text>
                    <Text style = {estilos.otrotexto}>{materia}</Text>
                    <Text style = {estilos.otrotexto}>{cuatri}</Text>
                </>
            }

            <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)}/>
        </View>

    );
} 


const  estilos = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase',

    },
    carrera: { 
        fontSize: 18,
        color: 'green',
        fontFamily: 'Roboto'
    },
    otrotexto: {
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 25,
        margin: 20,
    },
});