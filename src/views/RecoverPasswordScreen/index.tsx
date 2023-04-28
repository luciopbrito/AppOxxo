import React, { useState } from 'react';
import { Box, Button, Center, HStack, Image, Input, NativeBaseProvider, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import logoOxxo from '../../assets/logo.png'
import { UserSystem } from '../../contexts/Auth';

export type RecoverPasswordScreenParams = {

}

const RecoverPasswordScreen: React.FC<RecoverPasswordScreenParams> = ({ type }) => {

	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	return (
		<NativeBaseProvider>
			<VStack justifyContent={'center'} style={styles.container}>
				<HStack bgColor={'#fff'}>
					<Image source={logoOxxo} alt="Logo Oxxo" />
				</HStack>
				<HStack>
					<Center>
						<Text fontSize='20' color='#fff' fontWeight={'bold'}>Troca de Senha</Text>
					</Center>
				</HStack>
				<VStack w='80%'>
					<VStack space={5} w='100%' mb='50'>
						<Box w='100%' borderRadius={5}>
							<Input placeholder='Digite uma nova senha' style={styles.input} onChangeText={(e: any) => setPassword(e)} />
						</Box>
						<Box w='100%' borderRadius={5}>
							<Input placeholder='Confirme a senha' style={styles.input} onChangeText={(e: any) => setConfirmPassword(e)} />
						</Box>
					</VStack>
					<Center>
						<TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
							<Box style={styles.container_btnSubmit}>
								<Text style={styles.btnSubmit_text} >Enviar</Text>
							</Box>
						</TouchableOpacity>
					</Center>
				</VStack>
			</VStack>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f00',
		color: '#fff',
		flex: 1,
		alignItems: 'center',
		gap: 40,
		marginTop: 30,
	},
	// container_logo: {
	//     width: '100%',
	//     display: 'flex',
	//     justifyContent: 'center',
	//     alignItems: 'center',
	//     marginTop: 40
	// },
	// container_form: {
	//     width: '80%',
	//     height: '30%',
	//     display: 'flex',
	//     alignItems: 'center',
	//     justifyContent: 'space-between'
	// },
	input: {
		backgroundColor: "#fff",
		padding: 15,
		textAlign: 'center',
		width: '100%',
		borderWidth: 0
	},
	container_forgetPassword: {
		width: '100%',
		marginTop: 10,
	},
	forgetPassword: {
		color: '#fff',
		textAlign: 'right',
		fontWeight: 'bold'
	},
	container_btnSubmit: {
		backgroundColor: '#FBB110',
		display: 'flex',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 40,
		borderRadius: 5,
	},
	btnSubmit_text: {
		width: '100%',
		paddingRight: '15%',
		paddingLeft: '15%',
		color: '#fff',
		textAlign: 'center',
		fontWeight: "800",
	},
	cadastro: {
		textTransform: 'uppercase',
		color: '#fff',
		marginTop: 30,
		fontWeight: 'bold',
	},
	// funcionario: {
	//     color: '#fff',
	//     marginTop: 30,
	//     fontWeight: 'bold',
	// }
})



export default RecoverPasswordScreen;
