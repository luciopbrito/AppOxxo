import { NativeBaseProvider, VStack, Text, Button } from 'native-base';
import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import useAuth from '../../contexts/Auth';
import { Client, ClientService } from '../../services/clients';
import { usePopup } from '../../services/popups';

export interface ForgotPasswordScreenParams {}

interface FormClient {
	form: {
		newPassword: string | null;
		checkPassword: string | null;
	};
}

const ForgotPasswordScreen: React.FC = () => {
	const { user } = useAuth();

	const [state, setState] = useState<FormClient>({
		form: {
			newPassword: null,
			checkPassword: null,
		},
	});

	const handleChangePassword = async (): Promise<void> => {
		let isValid = true;

		Object.values(state.form).map((e) => {
			if (e === null) {
				isValid = false;
			}
		});

		if (isValid) {
			const client = user as Client;
			await ClientService.changePassword(
				client.Id_Client.toString(),
				state.form.newPassword as string,
				client.LastChangePassword as string
			);
		} else {
			usePopup.warning('Senhas não correspondem', 'verifique ou troque!');
		}
	};

	const changeFormClient = (key: string, value: any): void => {
		setState((prev) => {
			return {
				...prev,
				form: {
					...prev.form,
					[key]: value,
				},
			};
		});
	};

	return (
		<NativeBaseProvider>
			<VStack
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				space={5}>
				<FormInput
					funcState={changeFormClient}
					placeholder="Digite a Nova Senha"
					field="newPassword"
				/>
				<FormInput
					funcState={changeFormClient}
					placeholder="Digite Novamente a Senha"
					field="checkPassword"
				/>
				<Button
					onPress={() => {
						handleChangePassword();
					}}>
					Enviar
				</Button>
			</VStack>
		</NativeBaseProvider>
	);
};

export default ForgotPasswordScreen;
