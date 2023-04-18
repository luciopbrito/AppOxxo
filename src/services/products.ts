import { Alert } from "native-base";
import api from "./api";

const baseUrl = "/products";

export type Product = {
	Id_Product: number,
	Id_Category: number,
	Name_Product: string,
	Uri: string,
	Price: number
}

const getAllProducts = async (): Promise<Product[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data ? data : null
	}
	catch (error) {
		console.log(error)
		return null;
	};
}

const getProductById = async (id: number): Promise<Product | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_Client=${id}`);
		return data ? data[0] : null
	}
	catch (error) {
		console.log(error)
		return null;
	};
}

export const ProductService = { getAllProducts, getProductById }
