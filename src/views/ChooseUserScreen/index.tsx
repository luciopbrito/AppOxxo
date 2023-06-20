import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Button, Center, Container, Image, NativeBaseProvider, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import { RoutesNotAuthList } from '../../routes/routes.not.auth';
import useAuth, { UserSystem } from '../../contexts/Auth';
import { LoginScreenParams } from '../LoginScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import logoOxxo from '../../assets/logo.png';

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
			<VStack space={5} justifyContent="center" h="100%" style={styles.container}>
				<Box style={styles.logo}>
					<Image source={logoOxxo} alt="Logo Oxxo" />
				</Box>
				<Button style={styles.button} onPress={() => { setUserType(UserSystem.Client); navigation.navigate("LoginScreen") }}>Cliente</Button>
				<Button style={styles.button} onPress={() => { setUserType(UserSystem.Employee); navigation.navigate('LoginScreen') }}>Funcionário</Button>
				<Button style={styles.button} onPress={() => { setUserType(UserSystem.Manager); navigation.navigate('LoginScreen') }}>Gerente</Button>
			</VStack>
		</NativeBaseProvider>
	);
};

const styles = StyleSheet.create({
	button: {
		margin: 5,
		backgroundColor: '#FBB110',

	},
	container: {
		backgroundColor: '#f00',
	},

	logo: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 40,

	},

});

export default ChooseUserScreen;
