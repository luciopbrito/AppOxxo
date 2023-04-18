import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, HStack, Icon, Image, Pressable } from 'native-base';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png'
import userPhoto from '../../assets/user_photo.png';
import useAuth, { UserSystem } from '../../contexts/Auth';

type HeaderParams = {
	navigation: any,
	type: string,
	children?: React.ReactNode
}

const Header: React.FC<HeaderParams> = ({ navigation, type, children }) => {
	const { user } = useAuth();

	switch (type) {
		case "full":
			return (
				<HStack background={'#f00'} width="100%" h='auto' display={'flex'} alignItems='center' justifyContent="space-between" pt={'5'} pb='5' p='3'>
					<Pressable onPress={() => { navigation.openDrawer() }}>
						<Icon
							as={Feather}
							name="menu"
							size={10}
							color="#fff"
						>
						</Icon>
					</Pressable>
					<Pressable onPress={() => { navigation.navigate("HomeScreen") }}>
						<Image source={Logo} alt='Image Logo Oxxo' />
					</Pressable>
					<Pressable onPress={() => { navigation.navigate("AccountScreen") }}>
						<Avatar source={user?.Photo ? { uri: user.Photo } : userPhoto} />
					</Pressable>
				</HStack>
			);
		case "normal":
			return (
				<HStack background={'#f00'} width="100%" h='auto' display={'flex'} alignItems='center' justifyContent="space-between" pt={'10'} pb='5' p='3'>
					<Pressable onPress={() => { navigation.openDrawer() }}>
						<Icon
							as={Feather}
							name="menu"
							size={10}
							color="#fff"
						>
						</Icon>
					</Pressable>
					{children}
				</HStack>
			);
		default:
			return null;
	}
}

export default Header;
