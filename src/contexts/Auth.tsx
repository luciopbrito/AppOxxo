import React, { createContext, useEffect, useState, FunctionComponent } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Users from '../datas/users';
import { Alert } from 'react-native';

export const AuthContext = createContext({})

interface AuthProviderProps {
	children: any;
}

interface User {
	id: string,
	name: string,
	email: string,
	recuEmail: string,
	password: string,
	lastChangePassword: string,
	genero: number,
	photo: string,
	phone: string,
	typeUser: string,
}

export interface AuthContextType {
	authData: boolean;
	setAuthData: React.Dispatch<React.SetStateAction<boolean>>;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	signIn: (email: string | null, password: string | null, type: string | null) => void
	user: User
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
	const [authData, setAuthData] = useState<boolean>(false)
	const [firstTry, setFirstTry] = useState<number>(0)
	const [user, setUser] = useState<User | null>(null)
	const [tryLogin, setTryLogin] = useState<number>(0);
	const [askCreateAccount, setAskCreateAccount] = useState<boolean>(false)
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	useEffect(() => {
		if (askCreateAccount) {
			Alert.alert('Faça um cadastro', 'Deseja iniciar um cadastro?', [
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

		if (firstTry === 1) {
			setAskCreateAccount(true);
		}

	}, [askCreateAccount, firstTry, navigation]);

	function askRecoverPassword() {
		Alert.alert('Excesso de Tentativas', 'Deseja recuparar senha?', [
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

	function signIn(email: string, password: string, type: string) {
		if (email == null || password == null) {
			setFirstTry(firstTry + 1)
			Alert.alert('Usuário Inválido', 'É necessário digitar o email e senha');
		}
		else {
			switch (type) {
				case 'cliente':
					var findUser = null;
					Users.forEach((user: User, index: number) => {
						if (user.email == email && user.password == password) {
							findUser = Users[index];
						}
						else if (user.email == email && user.password != password) {
							if ((tryLogin + 1) == 3) {
								askRecoverPassword()
								setTryLogin(0)
							}
							else {
								Alert.alert('Senha inválida', 'Tente novamente');
								setTryLogin(tryLogin + 1);
							}
						}
					})

					if (findUser) {
						setAuthData(true)
						setUser(findUser)
						console.log('auth: ', authData)
						console.log('user: ', user)
						console.log('logado por:', JSON.stringify({ email: email, senha: password }));
						console.log("ir para home por botão enviar");
					}
				case 'funcionario':
				// TODO: fazer rota para home funcionário
				case 'gerente':
				// TODO: fazer rota para home gerente
			}
		}
	}

	return (
		<AuthContext.Provider value={{ authData, setAuthData, setUser, signIn, user }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
