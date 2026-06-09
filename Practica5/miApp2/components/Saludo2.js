import {View, Text, Image, Button} from 'react-native';

export const Saludo2 = () => {
    return(

        <View>
            <Text>Hola RN: Componente propio</Text>
            <Image source={require('../assets/Saludo.png')} />
            <Button title='Hola 201'></Button>
        </View>

    );
}