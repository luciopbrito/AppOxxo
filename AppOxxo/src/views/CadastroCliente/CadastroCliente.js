import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box, Input, Center } from "native-base";




function CadastroCliente() {
    return (
        <NativeBaseProvider>
            <Box style={styles.Box}>Texto Teste</Box>
        </NativeBaseProvider>
        
    );
        
}


export default CadastroCliente;




////================= Styles =================////

const styles = StyleSheet.create({
    Box: {
        backgroundColor: '#f00',
        color: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 50,


    },
})