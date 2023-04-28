import api from "./api";
import { usePopup } from "./popups";

const baseUrl = "/filiais";

export type Filial = {
	Id_Filial: string,
	id_Manager: string,
	id_Status: number,
	Name_Filial: string,
	Address: {
		Address_Complete: string,
		latitude: number,
		longitude: number
	}
}

const getAllFilials = async (): Promise<Filial[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data.length >= 1 ? data : null;
	}
	catch (error) {
		console.log("METHOD getAllFilials: ", error);
		usePopup.warning("Error", error as string)
		return null;
	}
}

const createFilial = async (filial: Filial): Promise<number | null> => {
	try {
		console.log("filial antes da request: ", filial)
		const { status } = await api.post(`${baseUrl}`, filial);
		return status;
	}
	catch (error) {
		console.error("METHOD createFilial: ", error)
		usePopup.warning("Error", error as string)
		return null
	}
}

const checkGuidFilial = async (guid: string): Promise<number | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_Filial=${guid}`);
		return data.length == 1 ? data[0] : null;
	}
	catch (error) {
		console.error("METHOD checkGuidFilial: ", error)
		usePopup.warning("Error", error as string)
		return null
	}
}

export const FilialService = { getAllFilials, createFilial, checkGuidFilial };
