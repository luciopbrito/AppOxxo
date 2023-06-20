import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect } from 'react';
import useAuth from '../contexts/Auth';
import CreditCardScreen, {
	type CreditCardScreenParams,
} from '../views/CreditCardScreen';
import ProductsScreen from '../views/ProductsScreen';
import { type ProductsScreenParams } from '../views/ProductsScreen';
import QrCodeScreen, {
	type QrCodeScreenParams,
} from '../views/QrCodeScreen/QrCodeScreen';

// import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RoutesFlowCheckoutParams {}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesFlowCheckoutList = {
	ProductsScreen: ProductsScreenParams;
	CreditCardScreen: CreditCardScreenParams;
	QrCodeScreen: QrCodeScreenParams;
};

// type RoutesFlowCheckoutRouteProp = RouteProp<RoutesFlowCheckoutList>;
// type RoutesFlowCheckoutNavigationProp = DrawerNavigationProp<
// 	RoutesFlowCheckoutList,
// 	keyof RoutesFlowCheckoutList
// >;

const RoutesFlowCheckout: React.FC<RoutesFlowCheckoutParams> = () => {
	const { userType } = useAuth();

	useEffect(() => {
		// console.log("entrou em RoutesClient com id: ", route.params?.userId)
	});

	const { Navigator, Screen } =
		createMaterialTopTabNavigator<RoutesFlowCheckoutList>();

	return (
		<Navigator style={{ marginTop: 30 }} initialRouteName="ProductsScreen">
			<Screen
				options={{
					tabBarLabel: 'Produtos',
				}}
				name="ProductsScreen"
				component={ProductsScreen as React.FC}
			/>
			<Screen
				options={{
					tabBarLabel: 'Forma de Pagamento',
				}}
				initialParams={{ createNewCreditCard: false }}
				name="CreditCardScreen"
				component={CreditCardScreen as React.FC}
			/>
			<Screen
				options={{
					tabBarLabel: 'Aprovar',
				}}
				name="QrCodeScreen"
				component={QrCodeScreen}
			/>
		</Navigator>
	);
};

export default RoutesFlowCheckout;
