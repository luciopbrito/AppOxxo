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
import { StyleSheet } from "react-native";
import DrawerCustom from '../components/DrawerCustom';
//import DrawerCustom from '../components/DrawerCustom';
//import { DrawerCustom } from '../components/DrawerCustom';

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
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#F00',
					color: '#fff',
				},
			}}
		>
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
				component={LoginScreen as React.FC}
			/>
		</Navigator >


	);






};


const styles = StyleSheet.create({
	titleProduto: {
		fontSize: 15,
		fontWeight: "bold",
		backgroundColor: "#f00",
	},
});



export default RoutesClient;
