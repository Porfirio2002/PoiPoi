import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import estilo from './estilo'

const Login = () => {
    return(
        <ImageBackground
        source={require('../../../assets/images/201.jpg')}
        style={estilo.container} >

        <View style={estilo.container}>
            <View style={estilo.imagem}>
                <Image 
                    source={require('../../../assets/images/202.png')}
                    style={estilo.logo}
                />
            </View>
            <View style={estilo.inputs}>
                <TextInput 
                    placeholder="E-mail"
                    style={estilo.input}
                />
                <TextInput 
                    secureTextEntry={true}
                    placeholder="Senha"
                    style={estilo.input}
                />
                <TouchableOpacity style={estilo.botaoEntrar}>
                    <Text style={estilo.textoEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botaoCriar}>
                    <Text style={estilo.textoCriar}>Criar conta</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
        
    )
}

export default Login