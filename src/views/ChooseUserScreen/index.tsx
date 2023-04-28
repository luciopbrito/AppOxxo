import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Button, NativeBaseProvider, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import { RoutesNotAuthList } from '../../routes/routes.not.auth';
import useAuth, { UserSystem } from '../../contexts/Auth';
import { LoginScreenParams } from '../LoginScreen';
import { StackNavigationProp } from '@react-navigation/stack';

// import { Container } from './styles';

export type ChooseUserScreenParams = {

}

type ChooseUserScreenNavigationProp = StackNavigationProp<RoutesNotAuthList, "ChooseUserScreen">

const ChooseUserScreen: React.FC<ChooseUserScreenParams> = () => {
	const { setUserType } = useAuth()

	useEffect(() => {
		setUserType(undefined);
	}, []);

	const navigation = useNavigation<ChooseUserScreenNavigationProp>();
	return (
		<NativeBaseProvider>
			<VStack space={5} justifyContent="center" h="100%">
				<Button onPress={() => { setUserType(UserSystem.Client); navigation.navigate("LoginScreen") }}>Cliente</Button>
				<Button onPress={() => { setUserType(UserSystem.Employee); navigation.navigate('LoginScreen') }}>Funcionário</Button>
				<Button onPress={() => { setUserType(UserSystem.Manager); navigation.navigate('LoginScreen') }}>Gerente</Button>
			</VStack>
		</NativeBaseProvider>
	);
}

export default ChooseUserScreen;
