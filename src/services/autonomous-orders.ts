import { type Guid } from 'guid-typescript';
import { usePopup } from './popups';
import api from './api';
const baseUrl = '/autonomous-orders';

export interface AutonomousOrder {
	Id_AutonomousOrders: Guid;
	Id_Client: Guid;
	Id_Coupon: number | null;
}

const getAllAutonomousOrders = async (): Promise<AutonomousOrder[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllAutonomousOrders:  ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createAutonomousOrders = async (
	autonomousOrders: AutonomousOrder
): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, autonomousOrders);
		return status;
	} catch (error) {
		console.error('METHOD createAutonomousOrders: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const checkGuidAutonomousOrders = async (
	guid: string
): Promise<AutonomousOrder | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_AutonomousOrders=${guid}`);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD checkGuidAutonomousOrders: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const AutonomousOrdersServices = {
	getAllAutonomousOrders,
	createAutonomousOrders,
	checkGuidAutonomousOrders,
};
