import React, { useState } from "react";
import { View, Button } from "react-native";
import RegistroEventoUniversitario from "./RegistroEventoUniversitario";

export default function MenuScreen() {

    const [screen, setScreen] = useState("Menu");

    switch(screen){

        case "Registro":
            return <RegistroEventoUniversitario/>;

        default:
            return(
                <View style={{flex:1,justifyContent:"center"}}>
                    <Button
                        title="Registro de Evento"
                        onPress={()=>setScreen("Registro")}
                    />
                </View>
            );
    }

}