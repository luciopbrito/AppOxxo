
import { Box, Image, Input, NativeBaseProvider, Text } from "native-base";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { StyleSheet, BackHandler } from "react-native";
import logoOxxo from '../../../assets/logo.png'

// import { Container } from './styles';

const LoginScreen = ({ navigation, route }) => {
    const [choiceScreen, setChoiceScreen] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(() => {
        setChoiceScreen(route.params.type);
    }, [navigation]);

    const submit = (type) => {
        console.log("submetido");

        if (email == null || password == null) {
            Alert.alert('Usuário Inválido', 'É necessário digitar o email e senha');
        }
        else {
            switch (type) {
                case 'cliente':
                    // TODO: fazer rota para home cliente
                    console.log('logado por:', JSON.stringify({ email: email, senha: password }));
                    console.log("ir para produtos por butão enviar");
                    navigation.navigate("AppMapaScreen");
                case 'funcionario':
                // TODO: fazer rota para home funcionário
                case 'gerente':
                // TODO: fazer rota para home gerente
            }
        }
    }

    const goRegistrationScreen = () => {
        console.log("ir para página cadastro por cadastro-se")
        navigation.navigate("CadastroClienteScreen")
    }

    switch (choiceScreen) {
        case 'cliente':
            return (
                <NativeBaseProvider>
                    <Box style={styles.container}>
                        <Box style={styles.container_logo}>
                            <Image source={logoOxxo} alt="Logo Oxxo" />
                        </Box>
                        <Box style={[styles.container_form,]}>
                            <Box gap='5' w='100%'>
                                <Box w='100%' borderRadius={5}>
                                    <Input placeholder='Digite seu E-mail' style={styles.input} onChangeText={(e) => setEmail(e)} />
                                </Box>
                                <Box w='100%' borderRadius={5}>
                                    <Input placeholder='Digite sua senha' style={styles.input} onChangeText={(e) => setPassword(e)} />
                                </Box>
                            </Box>
                            <Box style={styles.container_forgetPassword}>
                                <Text style={styles.forgetPassword}>
                                    Esqueceu a senha?
                                </Text>
                                {/* TODO: fazer login com funcionários
                                <Text style={styles.forgetPassword} onPress={() => goRegistrationScreen}>
                                    funcionário?
                                </Text> */}
                            </Box>
                            <TouchableOpacity onPress={() => submit(choiceScreen)}>
                                <Box style={styles.container_btnSubmit}>
                                    <Text style={styles.btnSubmit_text} >Entrar</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Box>
                                    <Text style={styles.cadastro} onPress={() => goRegistrationScreen()}>
                                        cadastre-se
                                    </Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </NativeBaseProvider >
            );
        case 'funcionario':
            return (
                <Box>
                    <Text style={styles.text}>funcionario</Text>
                </Box>
            );
        case 'gerente':
            return (
                <Box>
                    <Text style={styles.text}>gerente</Text>
                </Box>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f00',
        color: '#fff',
        flex: 1,
        alignItems: 'center',
        gap: 50,
        marginTop: 30,
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
        textAlign: 'center',
        width: '100%',
        borderWidth: 0
    },
    container_forgetPassword: {
        width: '100%',
        marginTop: 10,
    },
    forgetPassword: {
        color: '#fff',
        textAlign: 'right',
        fontWeight: 'bold'
    },
    container_btnSubmit: {
        backgroundColor: '#FBB110',
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
        width: '100%',
        paddingRight: '15%',
        paddingLeft: '15%',
        color: '#fff',
        textAlign: 'center',
        fontWeight: "800",
    },
    cadastro: {
        textTransform: 'uppercase',
        color: '#fff',
        marginTop: 30,
        fontWeight: 'bold',
    },
    funcionario: {
        color: '#fff',
        marginTop: 30,
        fontWeight: 'bold',
    }
})

export default LoginScreen;
