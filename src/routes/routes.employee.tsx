import React from 'react';
import { View } from 'react-native';
import { type AccountScreenParams } from '../views/AccountScreen';
import { type HomeScreenParams } from '../views/HomeScreen';

// import { Container } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RoutesEmployeeParams {}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesEmployeeList = {
	HomeScreen: HomeScreenParams;
	AccountScreen: AccountScreenParams;
};

// type RoutesEmployeeRouteProp = RouteProp<RoutesEmployeeList>

// type RoutesEmployeeNavigationProp = DrawerNavigationProp<RoutesEmployeeList>

const RoutesEmployee: React.FC = () => {
	return <View />;
};

export default RoutesEmployee;
