import React from 'react';
import HomeScreen, { type HomeScreenParams } from '../views/HomeScreen';
import AccountScreen, {
	type AccountScreenParams,
} from '../views/AccountScreen';
import LoginScreen, { type LoginScreenParams } from '../views/LoginScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import useAuth from '../contexts/Auth';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RoutesManagerParams {}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesManagerList = {
	HomeScreen: HomeScreenParams;
	AccountScreen: AccountScreenParams;
	LoginScreen: LoginScreenParams;
};

// type RoutesManagerRouteProp = RouteProp<RoutesManagerList>;
// type RoutesManagerNavigationProp = StackNavigationProp<RoutesManagerList>;

const RoutesManager: React.FC = () => {
	const { userType } = useAuth();

	const { Navigator, Screen } = createDrawerNavigator<RoutesManagerList>();

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
			{/* <Screen
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
			/> */}
			{/* <Screen
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
			/> */}
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
				component={LoginScreen}
			/>
		</Navigator>
	);
};

export default RoutesManager;
