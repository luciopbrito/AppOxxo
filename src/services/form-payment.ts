import { type Guid } from 'guid-typescript';
import api from './api';
import { usePopup } from './popups';

const baseUrl = '/form-payments';

export interface FormPayment {
	Id_FormPayment: Guid;
	Nickname_CreditCard: string;
	IsCreditCard: number;
}

const getAllFormPayments = async (): Promise<FormPayment[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllFormPayments:  ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createFormPayment = async (
	formPayment: FormPayment
): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, formPayment);
		return status;
	} catch (error) {
		console.error('METHOD createFormPayment: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const checkGuidFormPayment = async (
	guid: string
): Promise<FormPayment | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_FormPayment=${guid}`);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD checkGuidFormPayment: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const FormPaymentsService = {
	getAllFormPayments,
	createFormPayment,
	checkGuidFormPayment,
};
