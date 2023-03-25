import { Box, Button, Input, NativeBaseProvider, ScrollView, VStack } from "native-base";
import React from "react";
import { Image, StyleSheet } from "react-native";
import image_logo from "../../../assets/logo.png"


export default function CadastroCliente() {
    return (

        <NativeBaseProvider>
            <ScrollView backgroundColor='#f00' padding="2" width='100%' height='100%'>
                <Box style={[styles.image_logo]}>
                    <Image borderRadius={5} source={image_logo} />
                </Box>
                <Box gap='5'>
                    <FormInput placeholder='Nome Completo' />
                    <FormInput placeholder='sobrenome' />
                    <FormInput placeholder='E-mail' />
                    <FormInput placeholder='Telefone/WhatsApp:' />
                    <FormInput placeholder='Digite seu e-mail:' />
                    <FormInput placeholder='Digite sua senha:' />
                    <FormInput placeholder='Repita sua senha:' />
                </Box>
                <Box >
                    <VStack space={4} alignItems="center">
                        <Button style={styles.box_button} size={"sm"} onPress={() => console.log("hello world")}>Enviar</Button>
                    </VStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}

const FormInput = ({ placeholder }) => {
    return (
        <Box alignItems="center" >
            <Input placeholder={placeholder} backgroundColor='#fff' />
        </Box>
    );
}


//=====Styles

const styles = StyleSheet.create({
    image_logo: {
        margin: 20,
        alignItems: 'center',

    },
    box_button: {
        marginTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: "#FBB110",

    },

})
