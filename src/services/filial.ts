import { Guid } from "guid-typescript";
import api from "./api";
import { usePopup } from "./popups";

const baseUrl = "/filiais";

export type Filial = {
	Id_Filial: Guid,
	Id_Manager: Guid,
	Id_Status: number,
	Name_Filial: string,
	Address: {
		Address_Complete: string,
		latitude: number,
		longitude: number
	}
}

const getAllFilials = (): Filial[] | null => {
	var response: Filial[] | null = null

	api.get(baseUrl)
		.then((apiResponse) => {
			response = apiResponse.data ? apiResponse.data as Filial[] : null
		})
		.catch((error) => {
			usePopup.warning("Error", error as string)
			console.log(error)
		});

	return response;
}

const createFilial = async (filial: Filial): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, filial);
		return status;
	}
	catch (error) {
		console.error(error)
		usePopup.warning("Error", error as string)
		return null
	}
}

export const FilialService = { getAllFilials, createFilial };
