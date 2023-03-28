import React, { useContext, useEffect, useState } from "react"
import { Box, Text, NativeBaseProvider, Image } from "native-base"
import { Alert, Button, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Tabs from "../../components/Tabs"
import Header from "../../components/Header"
import { Products } from '../../datas/products';
import { Users } from "../../datas/users"
import { AuthContext } from "../../contexts/Auth"

export default function ProdutosScreen({ navigation, route }) {
    // contexto
    const { user } = useContext(AuthContext)

    return (
        <NativeBaseProvider>
            <Box flex='1' safeArea>
                <Header />
                <Box style={styles.container}>
                    <ScrollView>
                        <Box style={styles.containerProduto}>
                            {Products.map((item) => {
                                return <Produto item={item} key={item.id} />
                            })}
                        </Box>
                    </ScrollView>
                    {/* <Tabs navigation={navigation}></Tabs> */}
                </Box>
            </Box>
        </NativeBaseProvider>
    )
}


const Produto = ({ item }) => {

    const modalProduto = (id) => {
        var produto = Products.find((e) => e.id == id);
        Alert.alert(produto.name, `${produto.preco.replace('.', ',')} Reais`)
    }

    return (
        <Box style={styles.boxProduto}>
            <Image source={{ uri: item.uri }} alt="image" size='xl' />
            <Text style={styles.titleProduto}>{item.name}</Text>
            <Box>
                <Button color='#FBB110' title='Comprar' onPress={() => { modalProduto(item.id) }} />
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    titleProduto: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        flexDirection: "column",
        width: '100%'
    },
    containerProduto: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    boxProduto: {
        backgroundColor: '#fff',
        width: "45%",
        borderRadius: 5,
        padding: 15,
        margin: 10,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
    },
})

// onPress={() => {
//     var hasOption = item.optionsScreen !== null ? item.optionsScreen : null
//     if (hasOption == null) { navigation.navigate(item.component); console.log("aqui componente sem option") } else { navigation.navigate(item.component, { type: item.optionsScreen }); console.log("aqui componente com option") }
// }}>{item.title}
