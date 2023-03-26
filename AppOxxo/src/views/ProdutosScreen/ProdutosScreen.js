import React, { useEffect, useState } from "react"
import { HStack, Pressable, Icon, Box, Text, NativeBaseProvider, Image, Avatar, FlatList } from "native-base"
import { Feather } from "@expo/vector-icons"
import { Animated, Button } from "react-native"
import Logo from '../../../assets/logo.png'
import LoginScreen from '../LoginScreen/LoginScreen'

export default function ProdutosScreen({ navigation }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [animationMenu, setAnimationMenu] = useState(new Animated.Value(0));
    // const Drawer = createDrawerNavigator()

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

    const [datas, setDatas] = useState([])

    useEffect(() => {
        setDatas(data);
    }, [])



    return (
        // <Drawer.Navigator initialRouteName="Produtos">
        //     <Drawer.Screen name="Login" component={LoginScreen} />
        //     <Drawer.Screen name="Produtos" component={ProdutosScreen} />
        // </Drawer.Navigator>
        <NativeBaseProvider>

            <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column">
                <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea >
                    <Box>
                        <Pressable>
                            <Icon
                                as={Feather}
                                name="menu"
                                size={10}
                                color="#000"
                                onPress={() => setOpenMenu(!openMenu)}
                            >
                            </Icon>
                        </Pressable>
                    </Box>
                    <Box>
                        <Image source={Logo} alt='Image Logo Oxxo' />
                    </Box>
                    <Box>
                        <Avatar source={{ uri: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' }} />
                    </Box>
                </HStack>
                <Box>
                    <FlatList data={{ id: 1 }} horizontal={true} renderItem={({ item, index }) => {
                        // <Produto item={item} />
                        <Text key={index}>{item.id}</Text>
                    }} />
                </Box>
            </Box>
            {openMenu ?
                <Drawer.Navigator initialRouteName="Produtos">
                    <Drawer.Screen name="Login" component={LoginScreen} />
                    <Drawer.Screen name="Produtos" component={ProdutosScreen} />
                </Drawer.Navigator>
                :
                null}
        </NativeBaseProvider>
    )
}

const Produto = (item) => {

    const modalProduto = (id) => {
        var produto = data.find((e) => e.id == id);
        console.log(produto)
        // Alert.alert()
    }

    return (
        <Box>
            <Image source={{ uri: item.uri }} />
            <Box>
                <Text style={styles.titleProduto}>{item.name}</Text>
                <Button title='Comprar' onPress={() => { modalProduto(item.id) }} />
            </Box>
        </Box>

    )
}

// onPress={() => {
//     var hasOption = item.optionsScreen !== null ? item.optionsScreen : null
//     if (hasOption == null) { navigation.navigate(item.component); console.log("aqui componente sem option") } else { navigation.navigate(item.component, { type: item.optionsScreen }); console.log("aqui componente com option") }
// }}>{item.title}
