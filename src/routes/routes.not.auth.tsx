import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AnimationInitial from '../views/AnimationInitial';
import ChooseUserScreen, {
	type ChooseUserScreenParams,
} from '../views/ChooseUserScreen';
import LoginScreen from '../views/LoginScreen';
import RecoverPasswordScreen from '../views/RecoverPasswordScreen';
import RegistrationScreen from '../views/RegistrationScreen';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesNotAuthList = {
	AnimationInitial: undefined;
	LoginScreen: undefined;
	RecoverPasswordScreen: undefined;
	RegistrationScreen: undefined;
	ChooseUserScreen: ChooseUserScreenParams;
	RoutesClient: undefined;
	RoutesEmployee: undefined;
	RoutesManager: undefined;
};

const RoutesNotAuth: React.FC = () => {
	const { Navigator, Screen } = createStackNavigator<RoutesNotAuthList>();
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="AnimationInitial">
			<Screen name="AnimationInitial" component={AnimationInitial} />
			<Screen name="ChooseUserScreen" component={ChooseUserScreen} />
			<Screen name="LoginScreen" component={LoginScreen} />
			<Screen
				name="RecoverPasswordScreen"
				component={RecoverPasswordScreen as React.FC}
			/>
			<Screen
				name="RegistrationScreen"
				component={RegistrationScreen as React.FC}
			/>
		</Navigator>
	);
};

export default RoutesNotAuth;
