import api from './api';
import { usePopup } from './popups';

const baseUrl = '/managers';

export interface Manager {
	Id_Manager: string;
	id_Filial: string;
	Name: string;
	Email: string;
	RecuEmail: string;
	Password: string;
	LastChangePassword: string | null;
	Genero: number;
	Photo: string | null;
	Phone: number;
}

const getAllManagers = async (): Promise<Manager[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllManagers: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const getManagerByEmailAndPassword = async (
	email: string | null,
	password: string | null
): Promise<Manager | null> => {
	try {
		const { data } = await api.get(
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			`${baseUrl}?Email=${email}&Password=${password}`
		);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD getManagerByEmailAndPassword: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createManager = async (manager: Manager): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, manager);
		return status;
	} catch (error) {
		console.error('METHOD createManager: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const checkGuidManager = async (guid: string): Promise<Manager | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_Manager=${guid}`);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD checkGuidManager: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const ManagerService = {
	getAllManagers,
	getManagerByEmailAndPassword,
	createManager,
	checkGuidManager,
};
