import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen, { HomeScreenParams } from '../views/HomeScreen';
import AccountScreen, { AccountScreenParams } from '../views/AccountScreen/';
import ProdutosScreen, { ProdutosScreenParams } from '../views/ProdutosScreen';
import React, { useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import LoginScreen, { LoginScreenParams } from '../views/LoginScreen';
import CuponsScreen, { CuponsScreenParams } from '../views/CuponsScreen';
import useAuth from '../contexts/Auth';
import { Icon } from 'native-base';
// import { DrawerCustom } from '../components/DrawerCustom';

export type RoutesClientParams = {

}

type RoutesClientRouteProp = RouteProp<RoutesClientList>;
type RoutesClientNavigationProp = DrawerNavigationProp<RoutesClientList, keyof RoutesClientList>;

export type RoutesClientList = {
	HomeScreen: HomeScreenParams;
	AccountScreen: AccountScreenParams;
	ProdutosScreen: ProdutosScreenParams;
	LoginScreen: LoginScreenParams;
	CuponsScreen: CuponsScreenParams;
};

const RoutesClient: React.FC<RoutesClientParams> = () => {

	const { userType } = useAuth();

	useEffect(() => {
		// console.log("entrou em RoutesClient com id: ", route.params?.userId)
	});

	const { Navigator, Screen } = createDrawerNavigator<RoutesClientList>();

	return (
		<Navigator
			initialRouteName="HomeScreen"
		// drawerContent={props => <DrawerCustom {...props} />}
		>
			<Screen
				options={{
					headerShown: false,
					drawerLabel: 'Início',
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="md-home"
							size={size}
							color={focused ? '#7cc' : '#ccc'}
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
							color={focused ? '#7cc' : '#ccc'}
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
							color={focused ? '#7cc' : '#ccc'}
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
							color={focused ? '#7cc' : '#ccc'}
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
							color={focused ? '#7cc' : '#ccc'}
						/>
					),
				}}
				name="LoginScreen"
				initialParams={{ type: userType }}
				component={LoginScreen as React.FC}
			/>
		</Navigator>
	);
};

export default RoutesClient;