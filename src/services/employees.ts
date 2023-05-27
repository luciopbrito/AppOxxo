import api from './api';
import { usePopup } from './popups';

const baseUrl = '/employees';

export interface Employee {
	Id_Employee: number;
	Id_Filial: number;
	Name: string;
	Email: string;
	RecuEmail: string;
	Password: string;
	LastChangePassword: string | null;
	Genero: number;
	Photo: string | null;
	Phone: number;
}

const getAllEmployees = (): Employee[] | null => {
	let response: Employee[] | null = null;

	api
		.get(baseUrl)
		.then((apiResponse) => {
			response = apiResponse.data ? (apiResponse.data as Employee[]) : null;
		})
		.catch((error) => {
			usePopup.warning('Error', error as string);
			console.log(error);
		});

	return response;
};

const getEmployeeByEmailAndPassword = (
	email: string | null,
	password: string | null
): Employee | null => {
	let response: Employee | null = null;

	api
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		.get(`${baseUrl}?Email=${email}&Password=${password}`)
		.then((apiResponse) => {
			response = apiResponse.data ? (apiResponse.data as Employee) : null;
		})
		.catch((error) => {
			usePopup.warning('Error', error as string);
			console.log(error);
		});

	return response;
};

export const EmployeeService = {
	getAllEmployees,
	getEmployeeByEmailAndPassword,
};
