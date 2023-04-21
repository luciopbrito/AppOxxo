import React from 'react';
import RoutesNotAuth from './routes.not.auth';
import RoutesAuth from './routes.auth';
import useAuth from '../contexts/Auth';

const Routes: React.FC = () => {
	const { authData, userType } = useAuth()

	return (
		authData ? <RoutesAuth type={userType} /> : <RoutesNotAuth />
	)
}

export default Routes;
