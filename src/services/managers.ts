import api from "./api";

const baseUrl = "/managers";

export type Manager = {
	Id_Manager: number,
	id_Filial: number,
	Name: string,
	Email: string,
	RecuEmail: string,
	Password: string,
	LastChangePassword: string | null,
	Genero: number,
	Photo: string | null,
	Phone: number
}

const getAllManagers = (): Manager[] | null => {
	var response: Manager[] | null = null

	api.get(baseUrl)
		.then((apiResponse) => {
			response = apiResponse.data ? apiResponse.data as Manager[] : null
		})
		.catch((error) => {
			console.log(error)
		});

	return response;
}

const getManagerByEmailAndPassword = (email: string | null, password: string | null): Manager | null => {
	var response: Manager | null = null

	api.get(`${baseUrl}?Email=${email}&Password=${password}`)
		.then((apiResponse) => {
			response = apiResponse.data ? apiResponse.data as Manager : null
		})
		.catch((error) => {
			console.log(error)
		});

	return response;
}

export const ManagerService = { getAllManagers, getManagerByEmailAndPassword };
