import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../views/HomeScreen';
import AccountScreen from '../views/AccountScreen/';
import ProdutosScreen from '../views/ProdutosScreen';
import { LoginScreen } from '../views/LoginScreen';
import React, { FunctionComponent, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
// import { DrawerCustom } from '../components/DrawerCustom';

interface RoutesClientOnProps {
	navigation?: DrawerNavigationProp<RouteClientOnList, keyof RouteClientOnList>;
	route?: any;
}

export type RouteClientOnList = {
	HomeScreen: { userId?: string };
	AccountScreen: { userId?: string };
	ProdutosScreen: undefined;
	LoginScreen: undefined;
};

const RoutesClientOn: FunctionComponent<RoutesClientOnProps> = ({ navigation, route }) => {

	useEffect(() => {
		// console.log("entrou em RoutesClientOn com id: ", route.params?.userId)
	});

	const { Navigator, Screen } = createDrawerNavigator<RouteClientOnList>();

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
				initialParams={route}
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
				initialParams={route}
				component={AccountScreen}
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
				component={ProdutosScreen as React.FunctionComponent}
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
				component={LoginScreen as React.ComponentType}
			/>
		</Navigator>
	);
};

export default RoutesClientOn;
