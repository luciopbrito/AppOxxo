import { Box, Center, HStack, NativeBaseProvider, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps';
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

export default function AppMapaScreen({ navigation, route }) {

    const exampleUser = {
        id: '1',
        name: 'Lucio Pereira Brito',
        genero: 1,
        photo: 'https://pps.whatsapp.net/v/t61.24694-24/310477827_3407089916191895_330551738102350535_n.jpg?ccb=11-4&oh=01_AdSgL_HxtJHuwnCSjXfpEthxI79ExpfZNxRJ4o7IsAo2jg&oe=642ED378',
        typeUser: 'cliente',
    }

    const getFirstName = () => {
        var retrunName = exampleUser.name.split(' ', 1);
        return retrunName
    }

    useEffect(() => {
        // setUser(route.params.user);
    }, []);

    return (
        <NativeBaseProvider>
            <VStack flex='1' bgColor='#f00' mt='30' >
                <Header user={exampleUser} />
                <Center>
                    <Text color='#fff' bold='bold' fontSize={"md"} >
                        Seja bem vindo(a), {getFirstName()}
                    </Text>
                </Center>
                <VStack h='container'>
                    <HStack w='full' justifyContent={'center'}>
                        <Box zIndex={2000} backgroundColor='#FBB110' borderTopRadius={200} w='50%' >
                            <Center>
                                <Text fontSize='sm' color='#fff'>Escolha sua unidade</Text>
                            </Center>
                        </Box>
                    </HStack>
                    <MapView h='80%'
                        initialRegion={{
                            latitude: -23.464363,
                            longitude: -46.523467,
                            latitudeDelta: 0.00922,
                            longitudeDelta: 0.00421,
                        }}
                    >
                    </MapView>
                    <HStack w='full' justifyContent={'center'}>
                        <Box backgroundColor='#FBB110' borderBottomRadius={100} w='50%' h='5'>
                        </Box>
                    </HStack>
                </VStack>
            </VStack>
        </NativeBaseProvider >
    )
}


