import api from './api';
import { usePopup } from './popups';

const baseUrl = '/order-services';

export interface OrderService {
	Id_OrderService: number;
	Id_Order: number;
	Id_Client: number;
	Id_Situation: number;
	Id_FormPayment: number;
	IsAutonomuos: number;
	Value_Order: number;
}

const getAllOrderServices = async (): Promise<OrderService[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllOrderServices:  ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createOrderService = async (
	orderService: OrderService
): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, orderService);
		return status;
	} catch (error) {
		console.error('METHOD createOrderService: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const checkGuidOrderService = async (
	guid: string
): Promise<OrderService | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_OrderService=${guid}`);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD checkGuidOrderService: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const OrderServices = {
	getAllOrderServices,
	createOrderService,
	checkGuidOrderService,
};
