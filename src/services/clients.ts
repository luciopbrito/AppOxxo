import { type Guid } from 'guid-typescript';
import api from './api';
import { usePopup } from './popups';

const baseUrl = '/clients';

export interface Client {
	Id_Client: Guid;
	Name: string;
	Email: string;
	RecuEmail: string;
	Password: string;
	LastChangePassword: string | null;
	Genero: number;
	// BirthDate: Date
	Photo: string | null;
	Phone: number;
}

const getAllClients = async (): Promise<Client[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const getClientByEmailAndPassword = async (
	email: string | null,
	password: string | null
): Promise<Client | null> => {
	try {
		const { data } = await api.get(
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			`${baseUrl}?Email=${email}&Password=${password}`
		);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createClient = async (client: Client): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, client);
		return status;
	} catch (error) {
		console.error(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const changePassword = async (
	idClient: string,
	newPassword: string,
	lastPassword: string
): Promise<number | null> => {
	try {
		const { status } = await api.put(`${baseUrl}?Id_Client=${idClient}`, {
			Password: newPassword,
			LastChangePassword: lastPassword,
		});
		return status;
	} catch (error) {
		console.error(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const ClientService = {
	getAllClients,
	getClientByEmailAndPassword,
	createClient,
	changePassword,
};
