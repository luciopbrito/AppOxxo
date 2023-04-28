import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AnimationInitial from '../views/AnimationInitial';
import ChooseUserScreen, { ChooseUserScreenParams } from '../views/ChooseUserScreen';
import LoginScreen, { LoginScreenParams } from '../views/LoginScreen';
import RecoverPasswordScreen, { RecoverPasswordScreenParams } from '../views/RecoverPasswordScreen';
import RegistrationScreen, { RegistrationScreenParams, } from '../views/RegistrationScreen';
import useAuth, { UserSystem } from '../contexts/Auth';

export type RoutesNotAuthList = {
	AnimationInitial: undefined;
	LoginScreen: undefined;
	RecoverPasswordScreen: undefined;
	RegistrationScreen: undefined;
	ChooseUserScreen: ChooseUserScreenParams;
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
