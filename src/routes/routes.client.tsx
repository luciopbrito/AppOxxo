import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen, { type HomeScreenParams } from '../views/HomeScreen';
import React, { useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import LoginScreen, { type LoginScreenParams } from '../views/LoginScreen';
import CuponsScreen, { type CuponsScreenParams } from '../views/CuponsScreen';
import useAuth from '../contexts/Auth';
import RoutesFlowCheckout, {
	type RoutesFlowCheckoutParams,
} from './routes.flow-checkout';
import { type CreditCardScreenParams } from '../views/CreditCardScreen';
import FlowAccountScreen, {
	type RoutesFlowAccountScreenParams,
} from './routes.flow-account';
import { Colors } from '../globalStyles';
import { type StyleProp, type ViewStyle } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RoutesClientParams {}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesClientList = {
	HomeScreen: HomeScreenParams;
	FlowAccountScreen: RoutesFlowAccountScreenParams;
	FlowCheckout: RoutesFlowCheckoutParams;
	LoginScreen: LoginScreenParams;
	CuponsScreen: CuponsScreenParams;
	CreditCardScreen: CreditCardScreenParams;
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
				// eslint-disable-next-line
				drawerStyle: {
					backgroundColor: Colors.red,
					color: Colors.white,
				} as StyleProp<ViewStyle>,
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
				name="FlowAccountScreen"
				component={FlowAccountScreen}
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
					drawerItemStyle: { display: 'none' },
					drawerIcon: ({ focused, size }) => (
						<Ionicons
							name="cart"
							size={size}
							color={focused ? '#FBB110' : '#fff'}
						/>
					),
				}}
				name="FlowCheckout"
				component={RoutesFlowCheckout}
			/>
		</Navigator>
	);
};
export default RoutesClient;
