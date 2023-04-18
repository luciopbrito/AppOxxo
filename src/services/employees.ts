import api from "./api"

const baseUrl = "/employees";

export type Employee = {
	Id_Employee: number,
	Id_Filial: number,
	Name: string,
	Email: string,
	RecuEmail: string,
	Password: string,
	LastChangePassword: string | null,
	Genero: number,
	Photo: string | null,
	Phone: number
}

const getAllEmployees = (): Employee[] | null => {
	var response: Employee[] | null = null;

	api.get(baseUrl)
		.then((apiResponse) => {
			response = apiResponse.data ? apiResponse.data as Employee[] : null;
		})
		.catch((error) => {
			console.log(error);
		});

	return response;
}

const getEmployeeByEmailAndPassword = (email: string | null, password: string | null): Employee | null => {
	var response: Employee | null = null

	api.get(`${baseUrl}?Email=${email}&Password=${password}`)
		.then((apiResponse) => {
			response = apiResponse.data ? apiResponse.data as Employee : null
		})
		.catch((error) => {
			console.log(error)
		});

	return response;
}

export const EmployeeService = { getAllEmployees, getEmployeeByEmailAndPassword };
