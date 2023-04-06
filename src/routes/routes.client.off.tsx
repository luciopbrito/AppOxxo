import React, { FunctionComponent } from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack'
import AnimationInitial from '../views/AnimationInitial';
import { LoginScreen } from '../views/LoginScreen';
import RecoverPasswordScreen from '../views/RecoverPasswordScreen';
import CadastroClienteScreen from '../views/CadastroClienteScreen';
import { ParamListBase, RouteProp } from '@react-navigation/native';

interface Props {
	navigation?: StackNavigationProp<RouteClientOffList, keyof RouteClientOffList>
	route?: RouteProp<RouteClientOffList, keyof RouteClientOffList>;
}

export type RouteClientOffList = {
	AnimationInitial: undefined;
	LoginScreen: undefined;
	RecoverPasswordScreen: undefined;
	CadastroClienteScreen: undefined;
}

const RoutesClientOff: FunctionComponent<Props> = ({ route }: Props) => {
	const { Navigator, Screen } = createStackNavigator<RouteClientOffList>();
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
				name='LoginScreen'
				component={LoginScreen as React.ComponentType}
			/>
			<Screen
				name='RecoverPasswordScreen'
				component={RecoverPasswordScreen}
			/>
			<Screen
				name='CadastroClienteScreen'
				component={CadastroClienteScreen}
			/>
		</Navigator>
	);
}

export default RoutesClientOff;
