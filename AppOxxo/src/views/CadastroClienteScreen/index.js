import React, { useContext, useEffect, useState } from "react";
import { Box, Center, HStack, NativeBaseProvider, ScrollView, Text, VStack } from "native-base";
import { Image, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";
import image_logo from "../../assets/logo.png"
import FormInput from "../../components/FormInput";
import { AuthContext } from "../../contexts/Auth";
import { useNavigation } from "@react-navigation/native";

export default function CadastroClienteScreen({ navigation }) {
    //contextr
    const { setAuthData } = useContext(AuthContext)

    // const navigation = useNavigation();

    const [name, setName] = useState(null);
    const [dataNas, setDateNas] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [recuEmail, setRecuEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);


    const goScreenProdutos = () => {
        var errors = 0;
        [name, dataNas, email, phone, recuEmail, password, confirmPassword].map((value) => {
            if (value == null) {
                errors++
            }
        })

        if (errors == 0) {
            verififyPassword()
        }
        else {
            Alert.alert('Cadastro Inválido', 'Preencha todas os campos')
            console.log("cadastro:", JSON.stringify({ nome: name, dataDeNascimento: dataNas, email: email, emailRecuperacao: recuEmail, telefone: phone, senha: password }));
        }
    }

    const verififyPassword = () => {
        var verifPassword = false;

        if (password == confirmPassword) {
            verifPassword = true;
        }
        else {
            return Alert.alert('Senha Inválida', 'senhas não correspondentes')
        }

        console.log('não passou')

        if (verifPassword) {
            console.log("cadastro:", JSON.stringify({ nome: name, dataDeNascimento: dataNas, email: email, emailRecuperacao: recuEmail, telefone: phone, senha: password }));
            console.log("ir para tela home");
            navigation.navigate("LoginScreen");
        }
    }

    return (
        <NativeBaseProvider>
            <ScrollView style={styles.container}>
                <Box style={[styles.image_logo]}>
                    <Image borderRadius={5} source={image_logo} />
                    <VStack>
                        <Center>
                            <Text fontSize='20' color='#fff' fontWeight={'bold'}>Cadastro</Text>
                        </Center>
                    </VStack>
                </Box>

                <Box gap='5'>
                    <FormInput placeholder='Nome Completo' funcState={setName} />
                    <FormInput placeholder='Data de Nascimento' funcState={setDateNas} />
                    <FormInput placeholder='E-mail' funcState={setEmail} />
                    <FormInput placeholder='Telefone/WhatsApp:' funcState={setPhone} />
                    <FormInput placeholder='Email para recuperação de Senha' funcState={setRecuEmail} />
                    <FormInput placeholder='Digite sua senha:' funcState={setPassword} />
                    <FormInput placeholder='Repita sua senha:' funcState={setConfirmPassword} />
                </Box>
                <Box style={styles.container_btnSubmit}>
                    <TouchableOpacity>
                        <Button
                            title="Cadastrar"
                            onPress={() => goScreenProdutos()}
                            fontSize={240}
                            style={styles.btnSubmit}
                            color='#FBB110'
                        />
                    </TouchableOpacity>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f00',
        color: '#fff',
        flex: 1,
        marginTop: 30,
        paddingLeft: "5%",
        paddingRight: "5%",
        rowGap: 50,
    },
    image_logo: {
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
        gap: 30
    },
    box_button: {
        marginTop: 20,
        paddingRight: '15%',
        paddingLeft: '15%',
        fontWeight: "800",
        backgroundColor: "#FBB110",
    },
    container_btnSubmit: {
        alignItems: "center",
        // paddingTop: 10,
        // paddingBottom: 10,
        // paddingLeft: 20,
        // paddingRight: 20,
        marginTop: 40,
        // borderRadius: 5,
    },
    btnSubmit: {
        backgroundColor: '#FBB110',
        width: '100%',
        paddingRight: '15%',
        paddingLeft: '15%',
        color: '#fff',
        fontWeight: "800",
        fontSize: 30,
    },
})
