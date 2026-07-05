import React,{useState} from "react";
import SplashScreen from "./SplashScreen";
import LibrosScreen from "./LibrosScreen";

export default function MenuScreen(){

const [splash,setSplash]=useState(true);

if(splash){
return <SplashScreen onFinish={()=>setSplash(false)}/>
}

return(
    <LibrosScreen/>
);

}