import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Button, NativeBaseProvider, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import { RoutesNotAuthList } from '../../routes/routes.not.auth';
import useAuth, { UserSystem } from '../../contexts/Auth';
import { LoginScreenParams } from '../LoginScreen';

// import { Container } from './styles';

const ChooseUserScreen: React.FC = () => {
	const { setUserType } = useAuth()

	useEffect(() => {
		setUserType(undefined);
	});

	const navigation = useNavigation<NavigationProp<RoutesNotAuthList>>();
	return (
		<NativeBaseProvider>
			<VStack space={5} justifyContent="center" h="100%">
				<Button onPress={() => { navigation.navigate('LoginScreen', { type: UserSystem.Client }) }}>Cliente</Button>
				<Button onPress={() => { navigation.navigate('LoginScreen', { type: UserSystem.Employee }) }}>Funcionário</Button>
				<Button onPress={() => { navigation.navigate('LoginScreen', { type: UserSystem.Manager }) }}>Gerente</Button>
			</VStack>
		</NativeBaseProvider>
	);
}

export default ChooseUserScreen;
