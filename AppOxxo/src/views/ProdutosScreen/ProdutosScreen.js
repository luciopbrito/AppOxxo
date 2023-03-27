import React, { useState } from "react"
import { Box, Text, NativeBaseProvider, Image } from "native-base"
import { Animated, Button, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Tabs from "../../components/Tabs"
import Header from "../../components/Header"

export default function ProdutosScreen({ navigation }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [animationMenu, setAnimationMenu] = useState(new Animated.Value(0));

    const data = [
        {
            id: 1,
            name: 'Leite em pó 500g',
            uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxUvR_hVNAd83dnKmPN48cuqXVoqFMg5SVgvS4w7g1pMbYeRfHK9DSYaIXmZHNnF1xZS0W7Z8z20s&usqp=CAc',
        },
        {
            id: 2,
            name: 'café Pilão 400g',
            uri: 'https://qualycestas.vteximg.com.br/arquivos/ids/157479-292-292/WhatsApp-Image-2022-07-14-at-07.27.57.jpg?v=637937623884600000',
        },
        {
            id: 3,
            name: 'Margaina 500g',
            uri: 'https://naturaldaterra.com.br/media/catalog/product/1/2/123375---7893000383005---marg-qualy-ssal-500g.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover',
        },
        {
            id: 4,
            name: 'Pao de Forma',
            uri: 'https://images.tcdn.com.br/img/img_prod/666230/pao_de_forma_visconti_400g_1765_1_20200514234408.jpg',
        },
        {
            id: 5,
            name: 'Leite Integral 1L',
            uri: 'https://m.media-amazon.com/images/I/51wNnRI8zTL._AC_SX522_.jpg',
        },
        {
            id: 6,
            name: 'Biscoito 400g',
            uri: 'https://a-static.mlcdn.com.br/800x560/biscoito-de-polvilho-salgado-globo-30g/casasantaluzia2/354/1e616f604cbeebd35b3e5f86b646a878.jpeg',
        },
    ]

    return (
        <NativeBaseProvider>
            <Header />
            <Box style={styles.container}>
                <ScrollView>
                    <Box style={styles.containerProduto}>
                        <Produto item={{
                            id: 1,
                            name: 'Leite em pó 500g',
                            uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxUvR_hVNAd83dnKmPN48cuqXVoqFMg5SVgvS4w7g1pMbYeRfHK9DSYaIXmZHNnF1xZS0W7Z8z20s&usqp=CAc',
                        }} />
                        <Produto item={{
                            id: 2,
                            name: 'café Pilão 400g',
                            uri: 'https://qualycestas.vteximg.com.br/arquivos/ids/157479-292-292/WhatsApp-Image-2022-07-14-at-07.27.57.jpg?v=637937623884600000',
                        }} />
                        <Produto item={{
                            id: 3,
                            name: 'Margaina 500g',
                            uri: 'https://naturaldaterra.com.br/media/catalog/product/1/2/123375---7893000383005---marg-qualy-ssal-500g.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover',
                        }} />
                        <Produto item={{
                            id: 4,
                            name: 'Pao de Forma',
                            uri: 'https://images.tcdn.com.br/img/img_prod/666230/pao_de_forma_visconti_400g_1765_1_20200514234408.jpg',
                        }} />
                        <Produto item={{
                            id: 5,
                            name: 'Leite Integral 1L',
                            uri: 'https://m.media-amazon.com/images/I/51wNnRI8zTL._AC_SX522_.jpg',
                        }} />
                        <Produto item={{
                            id: 6,
                            name: 'Biscoito 400g',
                            uri: 'https://a-static.mlcdn.com.br/800x560/biscoito-de-polvilho-salgado-globo-30g/casasantaluzia2/354/1e616f604cbeebd35b3e5f86b646a878.jpeg',
                        }} />

                    </Box>
                </ScrollView>
                <Tabs navigation={navigation}></Tabs>
            </Box>
            {/* {
                openMenu ?
                    <Box>

                    </Box>
                    :
                    null
            } */}
        </NativeBaseProvider >
    )
}


const Produto = ({ item }) => {

    const modalProduto = (id) => {
        var produto = data.find((e) => e.id == id);
        console.log(produto)
        // Alert.alert()
    }

    return (
        <Box style={styles.boxProduto}>
            <Image source={{ uri: item.uri }} alt="image" size='xl' />
            <Text style={styles.titleProduto}>{item.name}</Text>
            <Box>
                <Button color='#FBB110' style={styles.buttonProduto} title='Comprar' onPress={() => { modalProduto(item.id) }} />
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
        padding: 10,
        margin: 5,
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
