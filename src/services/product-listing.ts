import { type Guid } from 'guid-typescript';
import api from './api';
import { usePopup } from './popups';

const baseUrl = '/product-listing';

export interface ProductListing {
	Id_ProductList: Guid;
	Id_Order: Guid;
	Id_Product: number;
	Quant_produto: number;
	IsAutonomuos: number;
}

const getAllProductListing = async (): Promise<ProductListing[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllProductListing: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createProductListing = async (
	productListing: ProductListing
): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, productListing);
		return status;
	} catch (error) {
		console.error('METHOD createProductListing: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const checkGuidProductListing = async (
	guid: string
): Promise<ProductListing | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_ProductList=${guid}`);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD createProductListing: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const ProductsListingService = {
	getAllProductListing,
	createProductListing,
	checkGuidProductListing,
};
