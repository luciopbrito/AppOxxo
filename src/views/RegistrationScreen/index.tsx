import React, { useEffect, useState } from "react";
import { Button, Box, Center, NativeBaseProvider, ScrollView, Text, VStack, Radio, HStack } from "native-base";
import { Image, TouchableOpacity, Alert } from "react-native";
import image_logo from "../../assets/logo.png"
import FormInput from "../../components/FormInput";
import useAuth, { UserSystem } from "../../contexts/Auth"
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import { RoutesNotAuthList } from "../../routes/routes.not.auth";
import { styles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { Client, ClientService } from "../../services/clients";
import { Guid } from "guid-typescript";
import { usePopup } from "../../services/popups";
import { Employee } from "../../services/employees";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { Manager, ManagerService } from "../../services/managers";
import { Filial, FilialService } from "../../services/filial";
import Geocoder from 'react-native-geocoding';
import env from "../../../env";

export type RegistrationScreenParams = {
	// route?: ResgistrationScreenRouteProps
}

type ResgistrationScreenRouteProps = RouteProp<RoutesNotAuthList, 'RegistrationScreen'>
type RegistrationScreenNavigationProps = StackNavigationProp<RoutesNotAuthList, 'RegistrationScreen'>

type FormClient = {
	// Id_Client: number,
	Name: string | null,
	Email: string | null,
	RecuEmail: string | null,
	Password: string | null,
	ConfirmPassword: string | null,
	// Genero: number | null,
	// BirthDate: Date | null
	Phone: number | null
}

type FormManager = {
	managerData: {
		// Id_Manager: number,
		// id_Filial: number,
		Name: string | null,
		Email: string | null,
		RecuEmail: string | null,
		Password: string | null,
		ConfirmPassword: string | null,
		// Genero: number,
		Phone: number | null
	},
	filialData: {
		Name_Filial: string | null,
		Street: string | null,
		Street_Number: number | null,
		District: string | null,
		City: string | null,
		State: string | null,
	}
}

type FormEmployee = {
	employeeData: {
		// Id_Employee: number,
		// Id_Filial: number,
		Name: string | null,
		Email: string | null,
		RecuEmail: string | null,
		Password: string | null,
		ConfirmPassword: string | null,
		// Genero: number,
		Phone: number | null
	},
	filialData: {
		Name_Filial: string | null,
		Address: string | null
	}
}

const RegistrationScreen: React.FC<RegistrationScreenParams> = () => {
	//context
	const { setAuthData, userType } = useAuth();

	Geocoder.init(env.REACT_APP_API_KEY_MAP);

	const navigation = useNavigation<RegistrationScreenNavigationProps>();

	const [state, setState] = useState({ form: {} as FormClient | FormEmployee | FormManager, Genero: 1 })

	useEffect(() => {
		buildState()
	}, []);

	const buildState = () => {
		switch (userType) {
			case UserSystem.Client:
				setState({
					form: {
						Name: null,
						Email: null,
						RecuEmail: null,
						Password: null,
						ConfirmPassword: null,
						Phone: null,
					} as FormClient,
					Genero: 1,
				});
				break;
			case UserSystem.Employee:
				setState({
					form: {
						employeeData: {
							Name: null,
							Email: null,
							RecuEmail: null,
							Password: null,
							ConfirmPassword: null,
							Phone: null,
						},
						filialData: {
							Name_Filial: null,
							Address: null,
						}
					} as FormEmployee,
					Genero: 1
				})
				break;
			case UserSystem.Manager:
				setState({
					form: {
						managerData: {
							Name: null,
							Email: null,
							RecuEmail: null,
							Password: null,
							ConfirmPassword: null,
							Phone: null,
						},
						filialData: {
							Name_Filial: null,
							Street: null,
							Street_Number: null,
							District: null,
							City: null,
							State: null,
						}
					} as FormManager,
					Genero: 1
				})
				break;
		}
	}

	const changeFormClient = (key: string, value: any) => {
		setState(prev => {
			return {
				...prev, form: {
					...prev.form, [key]: value
				}
			}
		})
	}

	const changeFormEmployee = (key: string, value: any) => {
		let prevState = state.form as FormEmployee;
		let prevEmployee = prevState.employeeData;
		setState(prev => {
			return {
				...prev, form: {
					...prev.form as FormEmployee, employeeData: { ...prevEmployee, [key]: value }
				} as FormEmployee
			}
		})
	}

	const changeFormManager = (key: string, value: any) => {
		let prevState = state.form as FormManager;
		let prevManager = prevState.managerData;
		setState(prev => {
			return {
				...prev, form: {
					...prev.form as FormEmployee, managerData: { ...prevManager, [key]: value }
				} as FormEmployee
			}
		})
	}

	const changeFormMangerFilial = (key: string, value: any) => {
		let prevState = state.form as FormManager;
		let prevFilial = prevState.filialData;
		setState(prev => {
			return {
				...prev, form: {
					...prev.form as FormManager, filialData: { ...prevFilial, [key]: value }
				} as FormManager
			}
		})
	}

	const makeRegister = async () => {
		var errors = 0;

		switch (userType) {
			case UserSystem.Client:
				Object.values(state.form).map((value) => {
					if (value == null) {
						errors++
					}
				})
				break;
			case UserSystem.Employee:

				break;
			case UserSystem.Manager:
				let stateManager = state.form as FormManager
				Object.values(stateManager.managerData).map((value) => {
					if (value == null) {
						errors++
					}
				})
				Object.values(stateManager.filialData).map((value) => {
					if (value == null) {
						errors++
					}
				})
				break;
		}

		if (errors == 0) {
			await verifyPassword()
		}
		else {
			usePopup.warning('Cadastro Inválido', 'Preencha todas os campos')
		}
	}

	const verifyPassword = async () => {
		let verifPassword = false;
		let showError = false;

		switch (userType) {
			case UserSystem.Client:
				let formClient = state.form as FormClient;
				if (formClient.Password == formClient.ConfirmPassword) {
					verifPassword = true;
				}
				else {
					showError = !showError;
				}
				break;
			case UserSystem.Employee:
				let formEmployee = state.form as FormEmployee;
				if (formEmployee.employeeData.Password == formEmployee.employeeData.ConfirmPassword) {
					verifPassword = true;
				}
				else {
					showError = !showError;
				}
				break;
			case UserSystem.Manager:
				let formManager = state.form as FormManager;
				if (formManager.managerData.Password == formManager.managerData.ConfirmPassword) {
					verifPassword = true;
				}
				else {
					showError = !showError;
				}
				break;
		}

		if (showError) {
			return usePopup.warning('Senha Inválida', 'senhas não correspondentes')
		}

		if (verifPassword) {
			switch (userType) {
				case UserSystem.Client:
					let stateClient = state.form as FormClient;
					let client: Client = {
						Id_Client: Guid.create(),
						Name: stateClient.Name as string,
						Email: stateClient.Email as string,
						RecuEmail: stateClient.RecuEmail as string,
						Password: stateClient.Password as string,
						LastChangePassword: null,
						Genero: state.Genero as number,
						// BirthDate: ,
						Photo: null,
						Phone: stateClient.Phone as number
					}
					let response = await ClientService.createClient(client);
					if (response == 201) {
						console.log("cadastro:", JSON.stringify(state.form));
						console.log("ir para tela home");
						navigation.navigate("LoginScreen");
					}
					break;
				case UserSystem.Employee:
					let stateEmployee = state.form as FormClient;

					break;
				case UserSystem.Manager:
					const stateManager = state.form as FormManager;
					const idManager = Guid.create();
					const idFilial = Guid.create();

					let manager: Manager = {
						Id_Manager: idManager,
						Id_Filial: idFilial,
						Name: stateManager.managerData.Name as string,
						Email: stateManager.managerData.Email as string,
						RecuEmail: stateManager.managerData.RecuEmail as string,
						Password: stateManager.managerData.Password as string,
						LastChangePassword: null,
						Genero: state.Genero as number,
						// BirthDate: ,
						Photo: null,
						Phone: stateManager.managerData.Phone as number,
					}

					const AddressToFind = `R. ${stateManager.filialData.Street}, ${stateManager.filialData.Street_Number} - ${stateManager.filialData.District}, ${stateManager.filialData.City} - ${stateManager.filialData.State}`

					let latitude = 0
					let longitude = 0;
					let Address = "";

					Geocoder.from(AddressToFind)
						.then((response: any) => {
							const { results } = response
							if (results[0].status == "OK") {
								const { lat, lng } = results[0].geometry.location;
								latitude = lng
								longitude = lat
								Address = results[0].formatted_address
							}
						})
						.catch((error) => {
							console.log('Error:', error);
						});

					let filial: Filial = {
						Id_Filial: idFilial,
						Id_Manager: idManager,
						Id_Status: 1,
						Name_Filial: stateManager.filialData.Name_Filial as string,
						Address: {
							Address_Complete: Address,
							latitude: latitude,
							longitude: longitude,
						},
					}

					let responseFilialService = await FilialService.createFilial(filial);
					if (responseFilialService == 201) {
						console.log("cadastro da filial:", JSON.stringify(stateManager.filialData));
					}
					let responseManagerService = await ManagerService.createManager(manager);
					if (responseManagerService == 201) {
						console.log("cadastro da gerente:", JSON.stringify(stateManager.managerData));
						console.log("ir para tela home");
						navigation.navigate("LoginScreen");
					}
					break;
			}
		}
	}

	const showRadio = () => {
		switch (userType) {
			case UserSystem.Client:
				return (
					<HStack space={3} alignItems={"center"}>
						<Text style={{ fontSize: 16 }}>Sexo:</Text>
						<Radio.Group
							name="Genero"
							value={state.Genero?.toString()}
							onChange={(nextValue) => {
								setState(prev => { return { ...prev, Genero: +nextValue } })
							}}
						>
							<HStack space={3}>
								<Radio value='1' my="1">
									Masculino
								</Radio>
								<Radio value='2' my="1">
									Feminino
								</Radio>
							</HStack>
						</Radio.Group>
					</HStack>
				);
			case UserSystem.Employee:
				return (
					<HStack space={3} alignItems={"center"}>
						<Text style={{ fontSize: 16 }}>Sexo:</Text>
						<Radio.Group
							name="Genero"
							value={state.Genero?.toString()}
							onChange={(nextValue) => {
								setState(prev => { return { ...prev, Genero: +nextValue } })
							}}
						>
							<HStack space={3}>
								<Radio value='1' my="1">
									Masculino
								</Radio>
								<Radio value='2' my="1">
									Feminino
								</Radio>
							</HStack>
						</Radio.Group>
					</HStack>
				);
			case UserSystem.Manager:
				return (
					<HStack space={3} alignItems={"center"}>
						<Text style={{ fontSize: 16 }}>Sexo:</Text>
						<Radio.Group
							name="Genero"
							value={state.Genero?.toString()}
							onChange={(nextValue) => {
								setState(prev => { return { ...prev, Genero: +nextValue } })
							}}
						>
							<HStack space={3}>
								<Radio value='1' my="1">
									Masculino
								</Radio>
								<Radio value='2' my="1">
									Feminino
								</Radio>
							</HStack>
						</Radio.Group>
					</HStack>
				);
		}
	}

	const showForm = () => {
		switch (userType) {
			case UserSystem.Client:
				return (
					<>
						<FormInput placeholder='Nome Completo' funcState={changeFormClient} field={"Name"} />
						{/* <FormInput placeholder='Data de Nascimento' funcState={changeFormClient} field={"BirthDate"} /> */}
						<FormInput placeholder='E-mail' funcState={changeFormClient} field={"Email"} />
						<FormInput placeholder='Telefone/WhatsApp:' funcState={changeFormClient} field={"Phone"} />
						<FormInput placeholder='Email para recuperação de Senha' funcState={changeFormClient} field={"RecuEmail"} />
						<FormInput placeholder='Digite sua senha:' funcState={changeFormClient} field={"Password"} />
						<FormInput placeholder='Repita sua senha:' funcState={changeFormClient} field={"ConfirmPassword"} />
						{showRadio()}
					</>
				);
			case UserSystem.Employee:
				return (
					<>
						<FormInput placeholder='Nome Completo' funcState={changeFormClient} field={"Name"} />
						{showRadio()}
					</>
				);
			case UserSystem.Manager:
				return (
					<>
						<Subtitle color={"#fff"}>Dados Pessoais</Subtitle>
						<FormInput placeholder='Nome Completo' funcState={changeFormManager} field={"Name"} />
						{/* <FormInput placeholder='Data de Nascimento' funcState={changeFormManager} field={"BirthDate"} /> */}
						<FormInput placeholder='E-mail' funcState={changeFormManager} field={"Email"} />
						<FormInput placeholder='Email para recuperação de Senha' funcState={changeFormManager} field={"RecuEmail"} />
						<FormInput placeholder='Digite sua senha' funcState={changeFormManager} field={"Password"} />
						<FormInput placeholder='Repita sua senha' funcState={changeFormManager} field={"ConfirmPassword"} />
						<FormInput placeholder='Telefone/WhatsApp' funcState={changeFormManager} field={"Phone"} />
						{showRadio()}
						<Subtitle color={"#fff"}>Dados da Filial</Subtitle>
						<FormInput placeholder='Nome da Filial' funcState={changeFormMangerFilial} field={"Name_Filial"} />
						<FormInput placeholder='Rua' funcState={changeFormMangerFilial} field={"Street"} />
						<FormInput placeholder='Número' funcState={changeFormMangerFilial} field={"Street_Number"} />
						<FormInput placeholder='Bairro' funcState={changeFormMangerFilial} field={"District"} />
						<FormInput placeholder='Cidade' funcState={changeFormMangerFilial} field={"City"} />
						<FormInput placeholder='Estado' funcState={changeFormMangerFilial} field={"State"} />
					</>
				);
		}
	}

	return (
		<NativeBaseProvider>
			<ScrollView style={styles.container}>
				<Box style={[styles.image_logo]}>
					<Image borderRadius={5} source={image_logo} />
					<VStack>
						<Center>
							<Title color='#fff'>Cadastro</Title>
						</Center>
					</VStack>
				</Box>
				<Box style={{ gap: 15 }}>
					{showForm()}
				</Box>
				<Box style={styles.container_btnSubmit}>
					<TouchableOpacity>
						<Button
							style={styles.btnSubmit}
							onPress={() => { makeRegister() }}
						>
							Cadastrar
						</Button>
					</TouchableOpacity>
				</Box>
			</ScrollView>
		</NativeBaseProvider>
	)
}

export default RegistrationScreen;
