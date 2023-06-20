import React, { createContext, useEffect, useState, useContext } from 'react';
import {
	type NavigationProp,
	type ParamListBase,
	useNavigation,
} from '@react-navigation/native';
import { type Client, ClientService } from '../services/clients';
import { type Employee, EmployeeService } from '../services/employees';
import { type Manager, ManagerService } from '../services/managers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePopup } from '../services/popups';
import { type ListProducts } from '../views/ProductsScreen';
import { Guid } from 'guid-typescript';
import {
	type AutonomousOrder,
	AutonomousOrdersServices,
} from '../services/autonomous-orders';
import {
	type ProductListing,
	ProductsListingService,
} from '../services/product-listing';

export enum UserSystem {
	Client = 1,
	Employee,
	Manager,
}
interface AuthContextData {
	authData: boolean;
	setAuthData: React.Dispatch<React.SetStateAction<boolean>>;
	setUser: React.Dispatch<
		React.SetStateAction<Client | Employee | Manager | null>
	>;
	setIdFilialSelected: React.Dispatch<React.SetStateAction<string | null>>;
	signIn: (
		email: string | undefined,
		password: string | undefined,
		type: UserSystem
	) => Promise<void>;
	user: Client | Employee | Manager | null;
	userType: UserSystem | undefined;
	idFilialSelected: string | null;
	setUserType: React.Dispatch<React.SetStateAction<UserSystem | undefined>>;
	listProducts: ListProducts[] | undefined;
	setlistProducts: React.Dispatch<
		React.SetStateAction<ListProducts[] | undefined>
	>;
	handleCheckout: () => Promise<void>;
}

interface AuthProviderProps {
	children: any;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [authData, setAuthData] = useState<boolean>(false);
	const [userType, setUserType] = useState<UserSystem>();
	const [firstTry, setFirstTry] = useState<number>(0);
	const [user, setUser] = useState<Client | Employee | Manager | null>(null);
	const [tryLogin, setTryLogin] = useState<number>(0);
	const [askCreateAccount, setAskCreateAccount] = useState<boolean>(false);
	const navigation = useNavigation<NavigationProp<ParamListBase>>();
	const [idFilialSelected, setIdFilialSelected] = useState<string | null>(null);
	const [listProducts, setlistProducts] = useState<ListProducts[] | undefined>(
		undefined
	);

	useEffect(() => {
		// eslint-disable-next-line no-use-before-define
		void loadFromStorage();

		if (askCreateAccount) {
			usePopup.messageOptions(
				'Faça um cadastro',
				'Deseja iniciar um cadastro?',
				[
					{
						text: 'Não',
						onPress: () => null,
						style: 'cancel',
					},
					{
						text: 'Sim',
						onPress: () => {
							navigation.navigate('RecoverPasswordScreen');
						},
					},
				]
			);
			setAskCreateAccount(false);
			setTryLogin(0);
		}

		if (firstTry === 1) {
			setAskCreateAccount(true);
		}
	}, [askCreateAccount, firstTry]);

	function askRecoverPassword(): void {
		usePopup.messageOptions(
			'Excesso de Tentativas',
			'Deseja recuparar senha?',
			[
				{
					text: 'Não',
					onPress: () => null,
					style: 'cancel',
				},
				{
					text: 'Sim',
					onPress: () => {
						navigation.navigate('RecoverPasswordScreen');
					},
				},
			]
		);
	}

	async function loadFromStorage(): Promise<void> {
		const user = await AsyncStorage.getItem('@AuthData');
		const userType = await AsyncStorage.getItem('@TypeUserData');
		console.log('return user: ', user);
		console.log('return userType: ', userType);
		if (userType) {
			console.log('está autenticado type');
			setAuthData(true);
			setUserType(+userType as UserSystem);
		}
		if (user) {
			console.log('está autenticado client');
			setAuthData(true);
			setUser(JSON.parse(user) as Client | Employee | Manager);
		}
	}

	async function signIn(
		email: string | undefined,
		password: string | undefined,
		type: UserSystem
	): Promise<void> {
		if (email == null || password == null) {
			usePopup.warning(
				'Usuário Inválido',
				'É necessário digitar o email e senha'
			);
			setFirstTry(firstTry + 1);
		} else {
			switch (type) {
				case UserSystem.Client:
					// eslint-disable-next-line no-var
					var client = await ClientService.getClientByEmailAndPassword(
						email,
						password
					);
					if (client != null) {
						setUser(client);
						setAuthData(true);
						setUserType(type);
						try {
							await AsyncStorage.setItem('@AuthData', JSON.stringify(client));
						} catch (error: any) {
							console.log('Erro AsyncStorage @AuthData: ', error.message);
						}

						try {
							await AsyncStorage.setItem('@TypeUserData', JSON.stringify(type));
						} catch (error: any) {
							console.log('Erro AsyncStorage @TypeUserData: ', error.message);
						}

						console.log(
							'logado por:',
							JSON.stringify({ email: client.Email, senha: client.Password })
						);
						console.log('ir para home por botão enviar');
					} else {
						if (tryLogin + 1 === 3) {
							askRecoverPassword();
							setTryLogin(0);
						} else {
							usePopup.warning('Email ou Senha inválida', 'Tente novamente');
							setTryLogin(tryLogin + 1);
						}
					}
					break;
				case UserSystem.Employee:
					// eslint-disable-next-line no-var
					var employee = EmployeeService.getEmployeeByEmailAndPassword(
						email,
						password
					);
					if (employee != null) {
						setUser(employee);
						setAuthData(true);
						setUserType(UserSystem.Client);
						console.log(
							'logado por:',
							JSON.stringify({
								email: employee.Email,
								senha: employee.Password,
							})
						);
						console.log('ir para home por botão enviar');
					} else {
						if (tryLogin + 1 === 3) {
							askRecoverPassword();
							setTryLogin(0);
						} else {
							usePopup.warning('Email ou Senha inválida', 'Tente novamente');
							setTryLogin(tryLogin + 1);
						}
					}
					break;
				case UserSystem.Manager:
					// eslint-disable-next-line no-var
					var manager = await ManagerService.getManagerByEmailAndPassword(
						email,
						password
					);
					if (manager != null) {
						setUser(manager);
						setAuthData(true);
						setUserType(type);

						try {
							await AsyncStorage.setItem('@AuthData', JSON.stringify(manager));
						} catch (error: any) {
							console.log('Erro AsyncStorage @AuthData: ', error.message);
						}

						try {
							await AsyncStorage.setItem('@TypeUserData', JSON.stringify(type));
						} catch (error: any) {
							console.log('Erro AsyncStorage @TypeUserData: ', error.message);
						}

						console.log(
							'logado por:',
							JSON.stringify({ email: manager.Email, senha: manager.Password })
						);
						console.log('ir para home por botão enviar');
					} else {
						if (tryLogin + 1 === 3) {
							askRecoverPassword();
							setTryLogin(0);
						} else {
							usePopup.warning('Email ou Senha inválida', 'Tente novamente');
							setTryLogin(tryLogin + 1);
						}
					}
					break;
				default:
					console.log('type of UserSystem does not exist');
			}
		}
	}

	const handleCheckout = async (): Promise<void> => {
		const client = user as Client;

		let guid = Guid.create();

		while (
			(await AutonomousOrdersServices.checkGuidAutonomousOrders(
				guid.toString()
			)) !== null
		) {
			guid = Guid.create();
		}

		const autonomousOrder: AutonomousOrder = {
			Id_AutonomousOrders: guid,
			Id_Client: client.Id_Client,
			Id_Coupon: null,
		};

		if (
			(await AutonomousOrdersServices.createAutonomousOrders(
				autonomousOrder
			)) === 201
		) {
			await createProductsList(autonomousOrder);
		}
	};

	const createProductsList = async (
		autonomousOrder: AutonomousOrder
	): Promise<void> => {
		const guidToProducts: Guid[] = await getValidGuids(
			listProducts?.length as number
		);
		const productsToPersiste: ProductListing[] = [];

		listProducts?.forEach((e, i) => {
			// eslint-disable-next-line
			let productToSave: ProductListing = {
				Id_ProductList: guidToProducts[i],
				Id_Order: autonomousOrder.Id_AutonomousOrders,
				Id_Product: e.product.Id_Product,
				Quant_produto: e.quantity,
				IsAutonomuos: 1,
			};

			productsToPersiste.push(productToSave);
		});

		for (let i = 0; i < productsToPersiste.length; i++) {
			await ProductsListingService.createProductListing(productsToPersiste[i]);
		}
	};

	const checkGuidProductList = async (guid: string): Promise<boolean> => {
		if ((await ProductsListingService.checkGuidProductListing(guid)) === null) {
			return true;
		}
		return false;
	};

	const getValidGuids = async (quantity: number): Promise<Guid[]> => {
		const guids: Guid[] = [];
		let guid = Guid.create();
		for (let i = 0; guids.length < quantity; i++) {
			while (!(await checkGuidProductList(guid.toString()))) {
				guid = Guid.create();
			}

			guids.push(guid);
		}

		return guids;
	};

	return (
		<AuthContext.Provider
			value={{
				authData,
				setAuthData,
				setUser,
				setIdFilialSelected,
				idFilialSelected,
				signIn,
				user,
				userType,
				setUserType,
				listProducts,
				setlistProducts,
				handleCheckout,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default function useAuth(): AuthContextData {
	return useContext(AuthContext);
}
