import { type Guid } from 'guid-typescript';
import api from './api';
import { usePopup } from './popups';

const baseUrl = '/products';

export interface Product {
	Id_Product: number;
	Id_Category: number;
	Id_Filial: Guid;
	Name_Product: string;
	Uri: string;
	Price: number;
}

const getAllProducts = async (): Promise<Product[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const getAllProductsByFilial = async (
	idFilial: string
): Promise<Product[] | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_Filial=${idFilial}`);
		return data || null;
	} catch (error) {
		console.log(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const getProductById = async (id: number): Promise<Product | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_Client=${id}`);
		return data ? data[0] : null;
	} catch (error) {
		console.log(error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const ProductService = {
	getAllProducts,
	getAllProductsByFilial,
	getProductById,
};
