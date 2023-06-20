import { NativeBaseProvider, VStack, Text, Button } from 'native-base';
import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import useAuth from '../../contexts/Auth';
import { Client } from '../../services/clients';
import { usePopup } from '../../services/popups';
// eslint-disable-next-line
export interface ShowDataRegistrationScreenParams {}

const ShowDataRegistrationScreen: React.FC = () => {
	const { user } = useAuth();
	const client = user as Client;
	return (
		<NativeBaseProvider>
			<VStack
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				space={5}>
				<Text>Nome: {client.Name}</Text>
				<Text>Email: {client.Email}</Text>
				<Text>Telefone: {user?.Phone}</Text>
			</VStack>
		</NativeBaseProvider>
	);
};

export default ShowDataRegistrationScreen;
