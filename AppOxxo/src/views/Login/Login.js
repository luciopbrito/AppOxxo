import React, { useLayoutEffect, useState } from 'react';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import logoOxxo from '../../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

const Login = ({ navigation, route }) => {
    const [choiceScreen, setChoiceScreen] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const optionsNavigation = useNavigation();

    // remove title of view/component
    useLayoutEffect(() => {
        optionsNavigation.setOptions({title: ''})
    }, [optionsNavigation]);

    useEffect(() => {
        setChoiceScreen(route.params.type);
    }, []);

    const submit = ({ type }) => {
        console.log("submetido");

        switch (type) {
            case 'cliente':
            // TODO: fazer rota para home cliente
            case 'funcionario':
            // TODO: fazer rota para home funcionário
            case 'gerente':
            // TODO: fazer rota para home gerente
        }

    }

    const goScreenRegistration = () => {
        console.log("ir para página cadastro")
        // TODO: fazer rota para cadastro
    }

    switch (choiceScreen) {
        case 'cliente':
            return (
                <View style={styles.container}>
                    <View style={styles.container_logo}>
                        <Image source={logoOxxo} />
                    </View>
                    <View style={styles.container_form}>
                        <TextInput placeholder='Digite seu E-mail' style={styles.input} onChangeText={email} />
                        <TextInput placeholder='Digite sua senha' style={styles.input} onChangeText={password} />
                        <View style={styles.container_forgetPassword}>
                            <Text style={styles.forgetPassword}>
                                Esqueceu a senha?
                            </Text>
                        </View>
                        <View style={styles.container_btnSubmit}>
                            <TouchableOpacity onPress={() => submit(choiceScreen)}>
                                <Text style={styles.btnSubmit_text} >Entrar</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.cadastro} onPress={() => goScreenRegistration}>
                            cadastre-se
                        </Text>
                    </View>
                </View>
            );
        case 'funcionario':
            return (
                <View>
                    <Text style={styles.text}>funcionario</Text>
                </View>
            );
        case 'gerente':
            return (
                <View>
                    <Text style={styles.text}>gerente</Text>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f00',
        color: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 50
    },
    container_logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    container_form: {
        width: '80%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 30,
        borderRadius: 5,
        textAlign: 'center',
        width: '100%'
    },
    container_forgetPassword: {
        width: '100%'
    },
    forgetPassword: {
        color: '#fff',
        textAlign: 'right',
        fontWeight: 'bold'
    },
    container_btnSubmit: {
        backgroundColor: '#FBB110',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40,
        borderRadius: 5,
    },
    btnSubmit_text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cadastro: {
        textTransform: 'uppercase',
        color: '#fff',
        marginTop: 30,
        fontWeight: 'bold',
    }
})

export default Login;