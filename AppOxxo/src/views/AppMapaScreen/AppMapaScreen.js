import { useRoute } from "@react-navigation/native";
import { Box, Center, HStack, NativeBaseProvider, Text, VStack } from "native-base";
import React, { useEffect, useState, useContext } from "react";
import MapView from 'react-native-maps';
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/Auth";

export default function AppMapaScreen({ navigation }) {

    const { user } = useContext(AuthContext)
    const [name, setName] = useState('')

    const getFirstName = () => {
        if (user) {
            console.log("USER getfirstname", user)
            return user.name.toString().split(' ', 1)
        }
    }

    useEffect(() => {
        // console.log("entrou home com o id: ", route.params?.userId)
        setName(getFirstName())

    }, [user]);

    return (
        <NativeBaseProvider>
            <VStack flex='1' bgColor='#f00' mt='30' >
                <Header navigation={navigation} />
                <Center>
                    <Text color='#fff' bold='bold' fontSize={"md"} mb='5' >
                        {user.genero == 1 ? `Seja bem vindo, ${name}` : `Seja bem vinda, ${name}`}
                    </Text>
                </Center>
                <VStack h='full'>
                    <HStack w='full' justifyContent={'center'}>
                        <Box zIndex={2000} backgroundColor='#FBB110' borderTopRadius={200} w='50%' >
                            <Center>
                                <Text fontSize='sm' color='#fff'>Escolha sua unidade</Text>
                            </Center>
                        </Box>
                    </HStack>
                    <MapView style={{ height: '70.5%' }}
                        initialRegion={{
                            latitude: -23.464363,
                            longitude: -46.523467,
                            latitudeDelta: 0.00922,
                            longitudeDelta: 0.00421,
                        }}
                        minZoomLevel={17}
                        showsUserLocation={true}
                    >
                    </MapView>
                    <HStack w='full' justifyContent={'center'}>
                        <Box backgroundColor='#FBB110' borderBottomRadius={100} w='50%' h='5'>
                        </Box>
                    </HStack>
                </VStack>
            </VStack>
        </NativeBaseProvider>
    )
}


