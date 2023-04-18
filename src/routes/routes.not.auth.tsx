import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AnimationInitial from '../views/AnimationInitial';
import ChooseUserScreen from '../views/ChooseUserScreen';
import RoutesClient from './routes.client';
import RoutesEmployee from './routes.employee';
import RoutesManager from './routes.manager';
import LoginScreen, { LoginScreenParams } from '../views/LoginScreen';
import RecoverPasswordScreen, { RecoverPasswordScreenProps } from '../views/RecoverPasswordScreen';
import RegistrationScreen, { RegistrationScreenParams, } from '../views/RegistrationScreen';
import useAuth, { UserSystem } from '../contexts/Auth';

export type RoutesNotAuthList = {
	AnimationInitial: undefined;
	LoginScreen: LoginScreenParams;
	RecoverPasswordScreen: RecoverPasswordScreenProps;
	RegistrationScreen: RegistrationScreenParams;
	ChooseUserScreen: undefined;
	RoutesClient: undefined;
	RoutesEmployee: undefined;
	RoutesManager: undefined;
}

const RoutesNotAuth: React.FC = () => {
	const { Navigator, Screen } = createStackNavigator<RoutesNotAuthList>();
	return (
		<Navigator
			screenOptions={{
				headerShown: false
			}}
			initialRouteName='AnimationInitial'
		>
			<Screen
				name='AnimationInitial'
				component={AnimationInitial}
			/>
			<Screen
				name='ChooseUserScreen'
				component={ChooseUserScreen}
			/>
			<Screen
				name='LoginScreen'
				component={LoginScreen as React.FC}
			/>
			<Screen
				name='RecoverPasswordScreen'
				component={RecoverPasswordScreen as React.FC}
			/>
			<Screen
				name='RegistrationScreen'
				component={RegistrationScreen as React.FC}
			/>
		</Navigator>
	);
}

export default RoutesNotAuth;
