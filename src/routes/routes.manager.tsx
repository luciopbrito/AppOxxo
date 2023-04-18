import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { HomeScreenParams } from '../views/HomeScreen';
import { AccountScreenParams } from '../views/AccountScreen';

export type RoutesManagerParams = {

}

export type RoutesManagerList = {
	HomeScreen: HomeScreenParams;
	AccountScreen: AccountScreenParams;
}

type RoutesManagerRouteProp = RouteProp<RoutesManagerList>;
type RoutesManagerNavigationProp = StackNavigationProp<RoutesManagerList>;

const RoutesManager: React.FC = () => {
	return <View />;
}

export default RoutesManager;
