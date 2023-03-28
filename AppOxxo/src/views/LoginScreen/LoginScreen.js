
import { useNavigation } from "@react-navigation/native";
import { Box, Image, Input, NativeBaseProvider, Text, Button, HStack, VStack, Center } from "native-base";
import { useEffect, useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import logoOxxo from '../../../assets/logo.png'
import { AuthContext, useAuth } from "../../contexts/Auth";

const LoginScreen = ({ route }) => {
    // context
    const { signIn, setAuthData, setUser } = useContext(AuthContext)

    function handleLogin() {
        console.log("antes")
        signIn(email, password, 'cliente')
    }

    useEffect(() => {
        setAuthData(false)
        setUser(null)
    }, []);

    const [choiceScreen, setChoiceScreen] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigation = useNavigation()

    useEffect(() => {
        // setChoiceScreen(route.params?.type);
        setChoiceScreen('cliente');
    }, []);

    // function submit(type) {
    //     console.log("submetido");

    //     if (email == null || password == null) {
    //         Alert.alert('Usuário Inválido', 'É necessário digitar o email e senha');
    //     }
    //     else {
    //         switch (type) {
    //             case 'cliente':

    //                 var findUser = {};
    //                 Users.forEach((user, index) => {
    //                     if (user.email == email && user.password == password) {
    //                         findUser = Users[index];
    //                     }
    //                     else if (user.email == email && user.password != password) {
    //                         if ((tryLogin + 1) == 3) {
    //                             askRecoverPassword()
    //                             setTryLogin(0)
    //                         }
    //                         else {
    //                             Alert.alert('Senha inválida', 'Tente novamente');
    //                             setTryLogin(tryLogin + 1);
    //                         }
    //                     }
    //                 })

    //                 if (findUser) {
    //                     console.log('logado por:', JSON.stringify({ email: email, senha: password }));
    //                     console.log("ir para home por botão enviar");
    //                     // navigation.navigate("RoutesClientOn", { userId: findUser.id });
    //                     // route.params.auth(true)
    //                 }


    //             case 'funcionario':
    //             // TODO: fazer rota para home funcionário
    //             case 'gerente':
    //             // TODO: fazer rota para home gerente
    //         }
    //     }
    // }

    const goRegistrationScreen = () => {
        console.log("ir para página cadastro por cadastro-se")
        navigation.navigate("CadastroClienteScreen")
    }

    switch (choiceScreen) {
        case 'cliente':
            return (
                <NativeBaseProvider>
                    <VStack justifyContent={'center'} style={styles.container}>
                        {/* <Box style={styles.container_logo}> */}
                        <HStack mt='10' bgColor={'#fff'}>
                            <Image source={logoOxxo} alt="Logo Oxxo" />
                        </HStack>
                        {/* </Box> */}
                        <VStack w='80%'>
                            <VStack space={5} w='100%'>
                                <Box w='100%' borderRadius={5}>
                                    <Input placeholder='Digite seu E-mail' style={styles.input} value={email} onChangeText={(e) => setEmail(e)} />
                                </Box>
                                <Box w='100%' borderRadius={5}>
                                    <Input placeholder='Digite sua senha' style={styles.input} value={password} onChangeText={(e) => setPassword(e)} />
                                </Box>
                            </VStack>
                            <VStack space={5} style={styles.container_forgetPassword}>
                                <Text style={styles.forgetPassword} onPress={() => navigation.navigate("RecoverPasswordScreen")}>
                                    Esqueceu a senha?
                                </Text>
                                {/* TODO: fazer login com funcionários
                                <Text style={styles.forgetPassword} onPress={() => goRegistrationScreen}>
                                    funcionário?
                                </Text> */}
                            </VStack>
                            <Center>
                                {/* <TouchableOpacity onPress={() => submit(choiceScreen)}> */}
                                <TouchableOpacity onPress={() => handleLogin()}>
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
                            </Center>
                        </VStack>
                    </VStack>
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
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
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
