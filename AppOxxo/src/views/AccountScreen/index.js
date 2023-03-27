import { Center, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import { HStack } from 'react-native';

// import { Container } from './styles';

const AccountScreen = () => {
    return (
        <NativeBaseProvider>
            <HStack flex='1'>
                <Center>
                    <Text>Account Screen</Text>
                </Center>
            </HStack>
        </NativeBaseProvider>
    );
}

export default AccountScreen;
