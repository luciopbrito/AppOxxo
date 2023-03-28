import React from 'react';
import { NativeBaseProvider, Text, VStack } from 'native-base';

// import { Container } from './styles';

const RecoverPasswordScreen = () => {
    return (
        <NativeBaseProvider>
            <VStack justifyContent={'center'} alignItems={'center'} flex='1'>
                <Text>RecoverPasswordScreen</Text>
            </VStack>
        </NativeBaseProvider>
    );
}

export default RecoverPasswordScreen;
