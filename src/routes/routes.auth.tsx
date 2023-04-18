import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { UserSystem } from '../contexts/Auth';
import RoutesClient, { RoutesClientParams } from './routes.client';
import RoutesEmployee, { RoutesEmployeeParams } from './routes.employee';
import RoutesManager, { RoutesManagerParams } from './routes.manager';
import { RouteProp } from '@react-navigation/native';

// import { Container } from './styles';

export type RoutesAuthParams = {
	type: UserSystem | undefined;
}

type RouteAuthList = {
	RoutesClient: RoutesClientParams;
	RoutesEmployee: RoutesEmployeeParams;
	RoutesManager: RoutesManagerParams;
}

type RoutesAuthRouteProp = RouteProp<RouteAuthList>;
type RoutesAuthNavigationProp = StackNavigationProp<RouteAuthList>;

const RoutesAuth: React.FC<RoutesAuthParams> = ({ type }) => {
	const { Navigator, Screen } = createStackNavigator<RouteAuthList>();
	const [userType, setUserType] = useState<string>('')

	switch (type) {
		case UserSystem.Client:
			return (
				<RoutesClient />
			)
		case UserSystem.Employee:
			return (
				<RoutesEmployee />
			)
		case UserSystem.Manager:
			return (
				<RoutesManager />
			)
		default:
			return null;
	}
}

export default RoutesAuth;
