import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import AccountScreen, {
	type AccountScreenParams,
} from '../views/AccountScreen';
import CreditCardScreen, {
	type CreditCardScreenParams,
} from '../views/CreditCardScreen';
import ForgotPasswordScreen, {
	type ForgotPasswordScreenParams,
} from '../views/ForgotPasswordScreen';
import ShowDataRegistrationScreen, {
	type ShowDataRegistrationScreenParams,
} from '../views/ShowDataRegistrationScreen';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RoutesFlowAccountScreenParams {
	route: any;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesFlowAccountScreenList = {
	AccountScreen: AccountScreenParams;
	CreditCardScreen: CreditCardScreenParams;
	ForgotPasswordScreen: ForgotPasswordScreenParams;
	ShowDataRegistrationScreen: ShowDataRegistrationScreenParams;
};

const FlowAccountScreen: React.FC<RoutesFlowAccountScreenParams> = ({
	route,
}) => {
	const { Navigator, Screen } =
		createStackNavigator<RoutesFlowAccountScreenList>();

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={'AccountScreen'}>
			<Screen
				name={'CreditCardScreen'}
				component={CreditCardScreen as React.FC}
			/>
			<Screen
				initialParams={route}
				name={'AccountScreen'}
				component={AccountScreen as React.FC}
			/>
			<Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
			<Screen
				name={'ShowDataRegistrationScreen'}
				component={ShowDataRegistrationScreen}
			/>
		</Navigator>
	);
};

export default FlowAccountScreen;
