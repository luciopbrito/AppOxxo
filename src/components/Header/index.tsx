import { Feather } from '@expo/vector-icons';
import { NavigationContainerProps, NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Avatar, HStack, Icon, Image, Pressable } from 'native-base';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'
import { AuthContext, AuthContextType } from '../../contexts/Auth';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const Header: FunctionComponent = () => {
	const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()
	const { user } = useContext<AuthContextType>(AuthContext as any)

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
			<Pressable onPress={() => navigation.navigate("HomeScreen")} >
				<Image source={Logo} alt='Image Logo Oxxo' />
			</Pressable>
			<Pressable onPress={() => navigation.navigate("AccountScreen")} >
				<Avatar source={user.photo ? { uri: user.photo } : undefined} />
			</Pressable>
		</HStack>
	);
}

export default Header;
