import { Feather } from '@expo/vector-icons';
import { Avatar, HStack, Icon, Image, Pressable } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../../assets/logo.png'
import { AuthContext } from '../../contexts/Auth';

const Header = ({ navigation }) => {

    const { user } = useContext(AuthContext)

    return (
        <HStack background={'#f00'} width="100%" h='auto' display={'flex'} alignItems='center' justifyContent="space-between" pt={'5'} pb='5' p='3'>
            {/* <Box> */}
            <Pressable onPress={() => navigation.openDrawer()}>
                <Icon
                    as={Feather}
                    name="menu"
                    size={10}
                    color="#fff"
                >
                </Icon>
            </Pressable>
            <Image source={Logo} alt='Image Logo Oxxo' />
            <Avatar source={{ uri: user.photo == null ? null : user.photo }} onPress={() => navigation.navigate("AccountScreen")} />
        </HStack>
    );
}

export default Header;
