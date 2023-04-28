
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Box, Image, Input, NativeBaseProvider, Text, HStack, VStack, Center, View } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import logoOxxo from '../../assets/logo.png'
import useAuth, { UserSystem } from "../../contexts/Auth";
import { RoutesNotAuthList } from "../../routes/routes.not.auth";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormInput from "../../components/FormInput";
import Title from "../../components/Title";

export type LoginScreenParams = {
	// route?: LoginScreenRouteProp;
	// type: UserSystem;
}

type LoginScreenRouteProp = RouteProp<RoutesNotAuthList, 'LoginScreen'>;
type LoginScreenNavigationProp = StackNavigationProp<RoutesNotAuthList, 'LoginScreen'>;

const LoginScreen: React.FC = () => {
	// context
	const { signIn, setAuthData, setUser, userType } = useAuth();

	async function handleLogin() {
		try {
			console.log("userType", userType)
			if (userType) {
				await signIn(state.form.email, state.form.password, userType);
			}
		}
		catch {
			console.error("Occurrent an Error")
		}
	}


	const [state, setState] = useState({
		form: {
			email: "",
			password: "",
		}
	})

	const changeForm = (key: string, value: any) => {
		setState(prev => { return { ...prev, form: { ...prev.form, [key]: value } } })
	}

	const navigation = useNavigation<LoginScreenNavigationProp>()

	useEffect(() => {
		setAuthData(false)
		setUser(null)
		AsyncStorage.removeItem("@AuthData");
		AsyncStorage.removeItem("@TypeUserData");
	}, [userType]);

	const goRegistrationScreen = () => {
		navigation.navigate("RegistrationScreen");
		console.log(`ir para página cadastro ${userType == 1 ? "cliente" : userType == 2 ? "funcionário" : "gerente"} por cadastro-se`);
	}

	return (
		<NativeBaseProvider>
			<VStack justifyContent={'center'} style={styles.container}>
				<VStack mt='10'>
					<Center>
						<Image source={logoOxxo} alt="Logo Oxxo" />
					</Center>
					{
						userType == UserSystem.Employee || userType == UserSystem.Manager
							?
							<Box mt={5}>
								<Title>Olá, Parceiro(a)</Title>
							</Box>
							: null}
				</VStack>
				<VStack w='80%'>
					<VStack space={5} w='100%'>
						<FormInput placeholder='Digite seu E-mail' funcState={changeForm} field="email" />
						<FormInput placeholder='Digite sua senha' funcState={changeForm} field="password" />
					</VStack>
					<VStack space={5} style={styles.container_forgetPassword}>
						<Text style={styles.forgetPassword} onPress={() => navigation.navigate("RecoverPasswordScreen")}>
							Esqueceu a senha?
						</Text>
					</VStack>
					<Center>
						<TouchableOpacity onPress={() => handleLogin()}>
							<Box style={styles.container_btnSubmit}>
								<Text style={styles.btnSubmit_text} >Entrar</Text>
							</Box>
						</TouchableOpacity>
						<TouchableOpacity>
							<Box>
								<Text style={styles.cadastro} onPress={() => goRegistrationScreen()}>
									cadastre-se
								</Text>
							</Box>
						</TouchableOpacity>
					</Center>
				</VStack>
			</VStack>
		</NativeBaseProvider>
	);
}

export default LoginScreen;
