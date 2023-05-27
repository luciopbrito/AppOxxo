import React from 'react';
import { UserSystem } from '../contexts/Auth';
import RoutesClient from './routes.client';
import RoutesEmployee from './routes.employee';
import RoutesManager from './routes.manager';

// import { Container } from './styles';

export interface RoutesAuthParams {
	type: UserSystem | undefined;
}

// interface RouteAuthList {
// 	RoutesClient: RoutesClientParams;
// 	RoutesEmployee: RoutesEmployeeParams;
// 	RoutesManager: RoutesManagerParams;
// }

// type RoutesAuthRouteProp = RouteProp<RouteAuthList>;
// type RoutesAuthNavigationProp = StackNavigationProp<RouteAuthList>;

const RoutesAuth: React.FC<RoutesAuthParams> = ({ type }) => {
	switch (type) {
		case UserSystem.Client:
			return <RoutesClient />;
		case UserSystem.Employee:
			return <RoutesEmployee />;
		case UserSystem.Manager:
			return <RoutesManager />;
		default:
			return null;
	}
};

export default RoutesAuth;
