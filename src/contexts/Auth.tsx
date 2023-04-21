import React, { createContext, useEffect, useState, useContext } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Client, ClientService } from '../services/clients';
import { Employee, EmployeeService } from '../services/employees';
import { Manager, ManagerService } from '../services/managers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePopup } from '../services/popups';

interface AuthContextData {
	authData: boolean;
	setAuthData: React.Dispatch<React.SetStateAction<boolean>>;
	setUser: React.Dispatch<React.SetStateAction<Client | Employee | Manager | null>>;
	signIn: (email: string | undefined, password: string | undefined, type: UserSystem) => Promise<void>
	user: Client | Employee | Manager | null
	userType: UserSystem | undefined
	setUserType: React.Dispatch<React.SetStateAction<UserSystem | undefined>>;
}

export enum UserSystem {
	Client = 1,
	Employee,
	Manager,
}

interface AuthProviderProps {
	children: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [authData, setAuthData] = useState<boolean>(false)
	const [userType, setUserType] = useState<UserSystem>()
	const [firstTry, setFirstTry] = useState<number>(0)
	const [user, setUser] = useState<Client | Employee | Manager | null>(null)
	const [tryLogin, setTryLogin] = useState<number>(0);
	const [askCreateAccount, setAskCreateAccount] = useState<boolean>(false)
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	useEffect(() => {
		loadFromStorage();

		if (askCreateAccount) {
			usePopup.messageOptions('Faça um cadastro', 'Deseja iniciar um cadastro?', [
				{
					text: 'Não',
					onPress: () => null,
					style: 'cancel'
				},
				{
					text: 'Sim',
					onPress: () => navigation.navigate("RecoverPasswordScreen"),
				}
			]);
			setAskCreateAccount(false);
			setTryLogin(0);
		}

		if (firstTry == 1) {
			setAskCreateAccount(true);
		}
	}, [askCreateAccount, firstTry]);

	function askRecoverPassword() {
		usePopup.messageOptions('Excesso de Tentativas', 'Deseja recuparar senha?', [
			{
				text: 'Não',
				onPress: () => null,
				style: 'cancel'
			},
			{
				text: 'Sim',
				onPress: () => navigation.navigate("RecoverPasswordScreen")
			},
		])
	}

	async function loadFromStorage() {
		const user = await AsyncStorage.getItem("@AuthData");
		const userType = await AsyncStorage.getItem("@TypeUserData");
		console.log("return user: ", user)
		console.log("return userType: ", userType)
		if (userType) {
			console.log("está autenticado type")
			setAuthData(true);
			setUserType(+userType as UserSystem);
		}
		if (user) {
			console.log("está autenticado client")
			setAuthData(true);
			setUser(JSON.parse(user) as Client | Employee | Manager)
		}
	}

	async function signIn(email: string | undefined, password: string | undefined, type: UserSystem) {
		if (email == null || password == null) {
			usePopup.warning('Usuário Inválido', 'É necessário digitar o email e senha');
			setFirstTry(firstTry + 1)
		}
		else {
			switch (type) {
				case UserSystem.Client:
					var client = await ClientService.getClientByEmailAndPassword(email, password);
					if (client != null) {
						setUser(client);
						setAuthData(true);
						setUserType(type);
						try {
							await AsyncStorage.setItem("@AuthData", JSON.stringify(client))
						}
						catch (error: any) {
							console.log("Erro AsyncStorage @AuthData: ", error.message)
						}

						console.log("AuthData: ", await AsyncStorage.getItem("@AuthData"))

						try {
							await AsyncStorage.setItem("@TypeUserData", JSON.stringify(type))
						}
						catch (error: any) {
							console.log("Erro AsyncStorage @TypeUserData: ", error.message)
						}
						console.log("TypeUserData: ", await AsyncStorage.getItem("@TypeUserData"))

						console.log('logado por:', JSON.stringify({ email: client.Email, senha: client.Password }));
						console.log("ir para home por botão enviar");
					}
					else {
						if ((tryLogin + 1) == 3) {
							askRecoverPassword()
							setTryLogin(0)
						}
						else {
							usePopup.warning('Email ou Senha inválida', 'Tente novamente');
							setTryLogin(tryLogin + 1);
						}
					}
					break;
				case UserSystem.Employee:
					var employee = EmployeeService.getEmployeeByEmailAndPassword(email, password);
					if (employee != null) {
						setUser(employee);
						setAuthData(true);
						setUserType(UserSystem.Client);
						console.log('logado por:', JSON.stringify({ email: employee.Email, senha: employee.Password }));
						console.log("ir para home por botão enviar");
					}
					else {
						if ((tryLogin + 1) == 3) {
							askRecoverPassword()
							setTryLogin(0)
						}
						else {
							usePopup.warning('Email ou Senha inválida', 'Tente novamente');
							setTryLogin(tryLogin + 1);
						}
					}
					break;
				case UserSystem.Manager:
					var manager = ManagerService.getManagerByEmailAndPassword(email, password);
					if (manager != null) {
						setUser(manager);
						setAuthData(true);
						setUserType(UserSystem.Client);
						console.log('logado por:', JSON.stringify({ email: manager.Email, senha: manager.Password }));
						console.log("ir para home por botão enviar");
					}
					else {
						if ((tryLogin + 1) == 3) {
							askRecoverPassword()
							setTryLogin(0)
						}
						else {
							usePopup.warning('Email ou Senha inválida', 'Tente novamente');
							setTryLogin(tryLogin + 1);
						}
					}
					break;
				default:
					console.log("type of UserSystem does not exist");
			}
		}
	}

	return (
		<AuthContext.Provider value={{ authData, setAuthData, setUser, signIn, user, userType, setUserType }}>
			{children}
		</AuthContext.Provider >
	);
}

export default function useAuth() {
	return useContext(AuthContext);
};
