import React, { FunctionComponent, useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/Auth';
import RoutesClientOff from './routes.client.off';
import RoutesClientOn from './routes.client.on';

const Routes: FunctionComponent = () => {
	const { authData } = useContext<AuthContextType>(AuthContext as any)

	return (
		authData ? <RoutesClientOn /> : <RoutesClientOff />
	)
}

export default Routes;
