import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AccountScreenParams } from '../views/AccountScreen';
import { HomeScreenParams } from '../views/HomeScreen';

// import { Container } from './styles';

export type RoutesEmployeeParams = {

}

export type RoutesEmployeeList = {
	HomeScreen: HomeScreenParams;
	AccountScreen: AccountScreenParams;
}

type RoutesEmployeeRouteProp = RouteProp<RoutesEmployeeList>

type RoutesEmployeeNavigationProp = DrawerNavigationProp<RoutesEmployeeList>

const RoutesEmployee: React.FC = () => {
	return <View />;
}

export default RoutesEmployee;
