import { NativeBaseProvider, Text, Avatar, VStack, Box, Button } from 'native-base';
import React from 'react';
import { UserSystem } from '../../contexts/Auth';
import useAuth from '../../contexts/Auth';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RoutesClientList } from '../../routes/routes.client';
import userPhoto from '../../assets/user_photo.png';
import Header from '../../components/Header';

export type AccountScreenParams = {

}

type AccountScreenRouteProp = RouteProp<RoutesClientList, 'AccountScreen'>;
type AccountScreenNavigationProp = DrawerNavigationProp<RoutesClientList, 'AccountScreen'>;

const AccountScreen: React.FC<AccountScreenParams> = () => {

	const { user, userType } = useAuth();
	const navigation = useNavigation<AccountScreenNavigationProp>()

	switch (userType) {
		case UserSystem.Client:
			return (
				<NativeBaseProvider>
					<VStack flex='1' bgColor={'#f00'} pb={5} mt={30} alignItems='center' space={20}>
						<Header navigation={navigation} type={"normal"}></Header>
						<VStack space={20} w={"100%"} justifyContent={'center'} >
							<VStack w={'full'} alignItems={'center'} space='2'>
								<Avatar
									source={{ uri: user?.Photo ? user?.Photo : userPhoto && userPhoto.default }}
									size={'2xl'}
								/>
								<Text fontSize={20} color={"#fff"}>{user?.Name ? user?.Name : null}</Text>
							</VStack>
							<VStack space={5} w={"100%"} alignItems={"center"}>
								<Button
									bgColor={"#FBB110"}
									w={"80%"}
								//TODO: Navegação para tela exibição de dados cadastrais
								// onPress={() => { navigation.navigatie() }}
								>
									Dados Cadastrais
								</Button>
								<Button
									bgColor={"#FBB110"}
									w={"80%"}
								//TODO: Navegação para tela de cartões
								// onPress={() => { navigation.navigatie() }}
								>
									Cartões cadastrados
								</Button>
								<Button
									bgColor={"#FBB110"}
									w={"80%"}
								//TODO: Navegação para tela para trocar a senha
								// onPress={() => { navigation.navigatie() }}
								>
									Alteração de senha
								</Button>
							</VStack>
						</VStack>
					</VStack>
				</NativeBaseProvider>
			);
		case UserSystem.Employee:
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={"center"} alignItems={"center"} >
						<Text>Conta Funcionário</Text>
					</Box>
				</NativeBaseProvider>
			);
		case UserSystem.Manager:
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={"center"} alignItems={"center"} >
						<Text>Conta Gerente</Text>
					</Box>
				</NativeBaseProvider>
			);
		default:
			return null;
	}
}

export default AccountScreen;
