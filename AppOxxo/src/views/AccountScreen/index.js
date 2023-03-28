import { HStack, Center, NativeBaseProvider, Text, Avatar, VStack, Box } from 'native-base';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';

export default function AccountScreen({ }) {

    const { user } = useContext(AuthContext)

    return (
        <NativeBaseProvider>
            <VStack flex='1' bgColor={'#fff'} mt='8' pt={10} pb={5} justifyContent={'space-between'} alignItems='center' space={10}>
                <VStack w={'full'} alignItems={'center'} space='2'>
                    <Avatar
                        source={{ uri: user.photo }}
                        size={'2xl'}
                    />
                    <Text fontSize={20}>{user.name ? user.name : null}</Text>
                </VStack>

                <Box>

                </Box>
                <HStack w={'100%'} alignContent={'center'} p='5'>
                    <Box textAlign={'left'} w='60%'>
                        <Text fontSize={15}>Email:</Text>
                        <Text fontSize={15}>Email de Recuperação:</Text>
                        <Text fontSize={15}>Telefone:</Text>
                    </Box>
                    <Box textAlign={'left'} w='40%'>
                        <Text fontSize={15}>{user.email ? user.email : null}</Text>
                        <Text fontSize={15}>{user.recuEmail ? user.recuEmail : null}</Text>
                        <Text fontSize={15}>{user.phone ? user.phone : null}</Text>
                    </Box>
                </HStack>
            </VStack>
        </NativeBaseProvider>
    );
}
