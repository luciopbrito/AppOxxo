import React, { useState } from "react";
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

export type RegistrationScreenParams = {
	route?: ResgistrationScreenRouteProps,
	type: UserSystem;
}

type ResgistrationScreenRouteProps = RouteProp<RoutesNotAuthList, 'RegistrationScreen'>
type RegistrationScreenNavigationProps = StackNavigationProp<RoutesNotAuthList, 'RegistrationScreen'>

type Form = {
	// Id_Client: number,
	Name: string | null,
	Email: string | null,
	RecuEmail: string | null,
	Password: string | null,
	ConfirmPassword: string | null,
	Genero: number | null,
	// BirthDate: Date | null
	Phone: number | null
}

const RegistrationScreen: React.FC<RegistrationScreenParams> = ({ route }) => {
	//context
	const { setAuthData } = useAuth();
	const type = route?.params.type as UserSystem;

	const navigation = useNavigation<RegistrationScreenNavigationProps>();

	const [form, setForm] = useState<Form>({
		Name: null,
		Email: null,
		RecuEmail: null,
		Password: null,
		ConfirmPassword: null,
		// BirthDate: null,
		Genero: 1,
		Phone: null
	})

	const changeValue = (key: string, value: any) => {
		setForm(prev => { return { ...prev, [key]: value } })
	}

	const goScreenProdutos = async () => {
		var errors = 0;
		console.log("inside func goScreenProdutos, state form: ", Object.values(form))
		Object.values(form).map((value) => {
			if (value == null) {
				errors++
			}
		})

		if (errors == 0) {
			await verifyPassword()
		}
		else {
			Alert.alert('Cadastro Inválido', 'Preencha todas os campos')
		}
	}

	const verifyPassword = async () => {
		var verifPassword = false;

		if (form.Password == form.ConfirmPassword) {
			verifPassword = true;
		}
		else {
			return Alert.alert('Senha Inválida', 'senhas não correspondentes')
		}

		console.log('não passou')

		if (verifPassword) {
			console.log(Guid.create())
			var client: Client = {
				Id_Client: Guid.create(),
				Name: form.Name as string,
				Email: form.Email as string,
				RecuEmail: form.RecuEmail as string,
				Password: form.Password as string,
				LastChangePassword: null,
				Genero: form.Genero as number,
				// BirthDate: ,
				Photo: null,
				Phone: form.Phone as number
			}
			var response = await ClientService.createClient(client);
			if (response == 201) {
				console.log("cadastro:", JSON.stringify(form));
				console.log("ir para tela home");
				navigation.navigate("LoginScreen", { type: type });
			}
		}
	}

	return (
		<NativeBaseProvider>
			<ScrollView style={styles.container}>
				<Box style={[styles.image_logo]}>
					<Image borderRadius={5} source={image_logo} />
					<VStack>
						<Center>
							<Text fontSize='20' color='#fff' fontWeight={'bold'}>Cadastro</Text>
						</Center>
					</VStack>
				</Box>

				<Box style={{ gap: 15 }}>
					<FormInput placeholder='Nome Completo' funcState={changeValue} field={"Name"} />
					{/* <FormInput placeholder='Data de Nascimento' funcState={changeValue} field={"BirthDate"} /> */}
					<FormInput placeholder='E-mail' funcState={changeValue} field={"Email"} />
					<FormInput placeholder='Telefone/WhatsApp:' funcState={changeValue} field={"Phone"} />
					<FormInput placeholder='Email para recuperação de Senha' funcState={changeValue} field={"RecuEmail"} />
					<FormInput placeholder='Digite sua senha:' funcState={changeValue} field={"Password"} />
					<FormInput placeholder='Repita sua senha:' funcState={changeValue} field={"ConfirmPassword"} />
					<HStack space={3} alignItems={"center"}>
						<Text style={{ fontSize: 16 }}>Sexo:</Text>
						<Radio.Group
							name="Genero"
							value={form.Genero?.toString()}
							onChange={(nextValue) => {
								changeValue("Genero", +nextValue)
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
				</Box>
				<Box style={styles.container_btnSubmit}>
					<TouchableOpacity>
						<Button
							style={styles.btnSubmit}
							onPress={() => { goScreenProdutos() }}
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
