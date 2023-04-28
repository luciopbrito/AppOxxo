import { Guid } from "guid-typescript";
import api from "./api";
import { usePopup } from "./popups";

const baseUrl = "/managers";

export type Manager = {
	Id_Manager: Guid,
	Id_Filial: Guid,
	Name: string,
	Email: string,
	RecuEmail: string,
	Password: string,
	LastChangePassword: string | null,
	Genero: number,
	Photo: string | null,
	Phone: number
}

const getAllManagers = async (): Promise<Manager[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data ? data : null;
	}
	catch (error) {
		console.log(error);
		usePopup.warning("Error", error as string)
		return null;
	}
}

const getManagerByEmailAndPassword = async (email: string | null, password: string | null): Promise<Manager | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Email=${email}&Password=${password}`);
		return data ? data[0] : null;
	}
	catch (error) {
		console.error(error)
		usePopup.warning("Error", error as string)
		return null
	}
}

const createManager = async (manager: Manager): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, manager);
		return status;
	}
	catch (error) {
		console.error(error)
		usePopup.warning("Error", error as string)
		return null
	}
}

export const ManagerService = { getAllManagers, getManagerByEmailAndPassword, createManager };
