import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen({ onFinish }) {

    useEffect(() => {

        const timer = setTimeout(() => {
            onFinish();
        },2000);
        
        return ()=>clearTimeout(timer);

    },[]);

    return(

        <View style={styles.container}>
            <Text style={styles.title}>
                Registro de Libros
            </Text>
            <Text>Bienvenido...</Text>
        </View>

    );

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

title:{
fontSize:30,
fontWeight:"bold"
}

});