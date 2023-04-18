
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

export type LoginScreenParams = {
	route?: LoginScreenRouteProp;
	type: UserSystem;
}

type LoginScreenRouteProp = RouteProp<RoutesNotAuthList, 'LoginScreen'>;
type LoginScreenNavigationProp = StackNavigationProp<RoutesNotAuthList, 'LoginScreen'>;

const LoginScreen: React.FC<LoginScreenParams> = ({ route }) => {
	// context
	const { signIn, setAuthData, setUser } = useAuth();
	const type = route?.params.type as UserSystem;

	async function handleLogin() {
		try {
			if (type) {
				await signIn(email, password, type);
			}
		}
		catch {
			console.error("Occurrent an Error")
		}
	}

	const [choiceScreen, setChoiceScreen] = useState<UserSystem>();
	const [email, setEmail] = useState<string | undefined>();
	const [password, setPassword] = useState<string | undefined>();
	const navigation = useNavigation<LoginScreenNavigationProp>()

	useEffect(() => {
		setChoiceScreen(type);
		setAuthData(false)
		setUser(null)
		AsyncStorage.removeItem("@AuthData");
		AsyncStorage.removeItem("@TypeUserData");
	}, [type]);

	const goRegistrationScreen = (type: UserSystem) => {
		navigation.navigate("RegistrationScreen", { type: type });
		console.log(`ir para página cadastro ${type} por cadastro-se`);
	}

	switch (choiceScreen) {
		case UserSystem.Client:
			return (
				<NativeBaseProvider>
					<VStack justifyContent={'center'} style={styles.container}>
						<HStack mt='10' bgColor={'#fff'}>
							<Image source={logoOxxo} alt="Logo Oxxo" />
						</HStack>
						<VStack w='80%'>
							<VStack space={5} w='100%'>
								<Box w='100%' borderRadius={5}>
									<Input placeholder='Digite seu E-mail' style={styles.input} value={email} onChangeText={(e) => setEmail(e)} />
								</Box>
								<Box w='100%' borderRadius={5}>
									<Input placeholder='Digite sua senha' style={styles.input} value={password} onChangeText={(e) => setPassword(e)} />
								</Box>
							</VStack>
							<VStack space={5} style={styles.container_forgetPassword}>
								<Text style={styles.forgetPassword} onPress={() => navigation.navigate("RecoverPasswordScreen", { type: choiceScreen })}>
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
										<Text style={styles.cadastro} onPress={() => goRegistrationScreen(choiceScreen)}>
											cadastre-se
										</Text>
									</Box>
								</TouchableOpacity>
							</Center>
						</VStack>
					</VStack>
				</NativeBaseProvider>
			);
		case UserSystem.Employee:
			return (
				<NativeBaseProvider>
					<Box>
						<Text style={styles.text}>funcionario</Text>
					</Box>
				</NativeBaseProvider>
			);
		case UserSystem.Manager:
			return (
				<NativeBaseProvider>
					<Box>
						<Text style={styles.text}>gerente</Text>
					</Box>
				</NativeBaseProvider>
			);
		default:
			// return null;
			return (<NativeBaseProvider>
				<View flex={1} justifyContent="center">
					<Text>Teste</Text>
				</View>
			</NativeBaseProvider>)
	}
}

export default LoginScreen;
