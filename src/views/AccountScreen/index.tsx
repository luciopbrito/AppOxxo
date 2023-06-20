import {
	NativeBaseProvider,
	Text,
	Avatar,
	VStack,
	Box,
	Button,
} from 'native-base';
import React from 'react';
import useAuth, { UserSystem } from '../../contexts/Auth';
import { type DrawerNavigationProp } from '@react-navigation/drawer';
import { type RouteProp, useNavigation } from '@react-navigation/native';
import userPhoto from '../../assets/user_photo.png';
import Header from '../../components/Header';
import { type RoutesFlowAccountScreenList } from '../../routes/routes.flow-account';
import { type RoutesClientList } from '../../routes/routes.client';

export interface AccountScreenParams {
	route: any;
}

type AccountScreenRouteProp = RouteProp<
	RoutesFlowAccountScreenList,
	'AccountScreen'
>;
type AccountScreenNavigationProp = DrawerNavigationProp<
	RoutesFlowAccountScreenList,
	'AccountScreen'
>;

type AccountScreenNavigationPropHeader = DrawerNavigationProp<
	RoutesClientList,
	'FlowAccountScreen'
>;

const AccountScreen: React.FC<AccountScreenParams> = ({ route }) => {
	const { user, userType } = useAuth();
	const navigation = useNavigation<AccountScreenNavigationProp>();
	const navigationH = useNavigation<AccountScreenNavigationPropHeader>();
	switch (userType) {
		case UserSystem.Client:
			return (
				<NativeBaseProvider>
					<VStack
						flex="1"
						bgColor={'#f00'}
						pb={5}
						mt={30}
						alignItems="center"
						space={20}>
						<Header nav={navigationH} type={'normal'}></Header>
						<VStack space={20} w={'100%'} justifyContent={'center'}>
							<VStack w={'full'} alignItems={'center'} space="2">
								<Avatar
									source={{
										uri: user?.Photo
											? user?.Photo
											: userPhoto && userPhoto.default,
									}}
									size={'2xl'}
								/>
								<Text fontSize={20} color={'#fff'}>
									{user?.Name ? user?.Name : null}
								</Text>
							</VStack>
							<VStack space={5} w={'100%'} alignItems={'center'}>
								<Button
									bgColor={'#FBB110'}
									w={'80%'}
									//TODO: Navegação para tela exibição de dados cadastrais
									onPress={() => {
										navigation.navigate('ShowDataRegistrationScreen');
									}}>
									Dados Cadastrais
								</Button>
								<Button
									bgColor={'#FBB110'}
									w={'80%'}
									//TODO: Navegação para tela de cartões
									// eslint-disable-next-line
									onPress={() => {
										navigation.navigate('CreditCardScreen', {});
									}}>
									Cartões cadastrados
								</Button>
								<Button
									bgColor={'#FBB110'}
									w={'80%'}
									//TODO: Navegação para tela para trocar a senha
									onPress={() => {
										navigation.navigate('ForgotPasswordScreen');
									}}>
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
					<Box flex={1} justifyContent={'center'} alignItems={'center'}>
						<Text>Conta Funcionário</Text>
					</Box>
				</NativeBaseProvider>
			);
		case UserSystem.Manager:
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={'center'} alignItems={'center'}>
						<Text>Conta Gerente</Text>
					</Box>
				</NativeBaseProvider>
			);
		default:
			return null;
	}
};

export default AccountScreen;
