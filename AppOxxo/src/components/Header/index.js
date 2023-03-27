import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Box, HStack, Icon, Image, Pressable } from 'native-base';
import React from 'react';
import Logo from '../../../assets/logo.png'

// import { Container } from './styles';

const Header = ({ user }) => {
    const navigation = useNavigation();
    return (
        <HStack background={'#f00'} width="100%" h='auto' display={'flex'} alignItems='center' justifyContent="space-between" pt={'5'} pb='5' p='3'>
            {/* <Box> */}
            <Pressable>
                <Icon
                    as={Feather}
                    name="menu"
                    size={10}
                    color="#fff"
                >
                </Icon>
            </Pressable>
            {/* </Box> */}
            {/* <Box display='flex' alignItems="center"> */}
            <Image source={Logo} alt='Image Logo Oxxo' />
            {/* </Box> */}
            {/* <Box> */}
            <Avatar source={{ uri: user.photo }} onPress={() => navigation.navigate("AccountScreen")} />
            {/* </Box> */}
        </HStack>
    );
}

export default Header;
