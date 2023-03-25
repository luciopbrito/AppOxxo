import React, { useLayoutEffect, useState } from "react"
import { HStack, Pressable, Icon, Box, Text, NativeBaseProvider, FlatList, CloseIcon, Image } from "native-base"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { Animated, TouchableOpacity } from "react-native"
import Logo from '../../../assets/logo.png'

const menu = [
    {
        title: "Produtos",
        component: "Produtos",
        optionsScreen: null
    },
    {
        title: "Sair",
        component: "Login",
        optionsScreen: "cliente"
    }
]

export default function Produtos() {
    const optionsScreen = useNavigation();

    // remove title of view/component
    useLayoutEffect(() => {
        optionsScreen.setOptions({ title: "" })
    }, [optionsScreen]);

    const [openMenu, setOpenMenu] = useState(false)
    const [animationMenu, setAnimationMenu] = useState(new Animated.Value(0))
    // para pegar o menu online
    // const [menu, setMenu] = useState(null)

    // useEffect(() => {
    //     fetch('http://localhost:3001/menu', {
    //         method: 'GET',
    //         // body: JSON.stringify({
    //         //     title: 'foo',
    //         //     body: 'bar',
    //         //     userId: 1,
    //         // }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((json) => setMenu(j));
    // })

    return (
        <NativeBaseProvider>
            <Box flex={1} backgroundColor="#f8f8f8" flexDirection="column">
                <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea>
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
                        <Image source={Logo} _alt='Image Logo Oxxo'/>
                    </Box>
                    <Box>
                        
                    </Box>
                </HStack>
            </Box>
            { openMenu ? 
                <Box backgroundColor="#71697A" w='100%' h='100%'>
                    <Box flexDirection={'row'}>
                        <FlatList data={menu} renderItem={({ item }) => (
                            <TouchableOpacity>
                                <Box marginTop={2.5} marginBottom={2.5}>
                                    <Text fontSize={20}>Produtos</Text>
                                </Box>
                            </TouchableOpacity>
                        )} />
                        <Icon
                            as={Feather}
                            name="menu"
                            size={10}
                            color="#000"
                            onPress={() => setOpenMenu(!openMenu)}
                        >
                        </Icon>
                    </Box>
                </Box>
            : 
            null}
        </NativeBaseProvider>
    )
}

// onPress={() => {
//     var hasOption = item.optionsScreen !== null ? item.optionsScreen : null
//     if (hasOption == null) { optionsScreen.navigate(item.component); console.log("aqui componente sem option") } else { optionsScreen.navigate(item.component, { type: item.optionsScreen }); console.log("aqui componente com option") }
// }}>{item.title}