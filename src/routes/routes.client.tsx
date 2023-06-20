import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen, { type HomeScreenParams } from '../views/HomeScreen';
import AccountScreen, {
	type AccountScreenParams,
} from '../views/AccountScreen/';
import ProdutosScreen, {
	type ProdutosScreenParams,
} from '../views/ProdutosScreen';
import React, { useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import LoginScreen, { type LoginScreenParams } from '../views/LoginScreen';
import CuponsScreen, { type CuponsScreenParams } from '../views/CuponsScreen';
import useAuth from '../contexts/Auth';
import QrCodeScreen, {
	type QrCodeScreenParams,
} from '../views/QrCodeScreen/QrCodeScreen';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RoutesClientParams {}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesClientList = {
	HomeScreen: HomeScreenParams;
	AccountScreen: AccountScreenParams;
	ProdutosScreen: ProdutosScreenParams;
	LoginScreen: LoginScreenParams;
	CuponsScreen: CuponsScreenParams;
	QrCodeScreen: QrCodeScreenParams;
};

// type RoutesClientRouteProp = RouteProp<RoutesClientList>;
// type RoutesClientNavigationProp = DrawerNavigationProp<
// 	RoutesClientList,
// 	keyof RoutesClientList
// >;

const RoutesClient: React.FC<RoutesClientParams> = () => {
	const { userType } = useAuth();

	useEffect(() => {
		// console.log("entrou em RoutesClient com id: ", route.params?.userId)
	});

	const { Navigator, Screen } = createDrawerNavigator<RoutesClientList>();

	return (
		<Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#F00',
					color: '#fff',
				},
			}}>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: 'Início',
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="md-home"
							size={size}
							color={focused ? '#FBB110' : '#fff'}
						/>
					),
				}}
				name="HomeScreen"
				component={HomeScreen}
			/>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: 'Produtos',
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="cart"
							size={size}
							color={focused ? '#FBB110' : '#fff'}
						/>
					),
				}}
				name="ProdutosScreen"
				component={ProdutosScreen}
			/>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: 'Cupons',
					drawerIcon: ({ focused, size }) => (
						<FontAwesome
							name="ticket"
							size={size}
							color={focused ? '#FBB110' : '#fff'}
						/>
					),
				}}
				name="CuponsScreen"
				component={CuponsScreen}
			/>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: 'Conta',
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="person"
							size={size}
							color={focused ? '#FBB110' : '#fff'}
						/>
					),
				}}
				name="AccountScreen"
				component={AccountScreen}
			/>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: 'Sair',
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="log-out"
							size={size}
							color={focused ? '#FBB110' : '#fff'}
						/>
					),
				}}
				name="LoginScreen"
				initialParams={{ type: userType }}
				component={LoginScreen}
			/>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: '',
					// drawerIcon: ({ focused, size }) => (
					// 	<Ionicons
					// 		name="log-out"
					// 		size={size}
					// 		color={focused ? "#7cc" : "#ccc"}
					// 	/>
					// ),
				}}
				name="QrCodeScreen"
				initialParams={{ type: userType }}
				component={QrCodeScreen as React.FC}
			/>
		</Navigator>
	);
};
export default RoutesClient;
