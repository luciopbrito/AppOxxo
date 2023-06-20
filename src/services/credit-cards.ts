import { type Guid } from 'guid-typescript';
import api from './api';
import { usePopup } from './popups';

const baseUrl = '/credit-cards';

export interface CreditCard {
	Id_CreditCard: Guid;
	Id_Client: Guid;
	Nickname_Card: string;
	Num_CreditCard: number;
	Card_Banner: string;
	Modality: number;
}

const getAllCreditCards = async (): Promise<CreditCard[] | null> => {
	try {
		const { data } = await api.get(baseUrl);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllCreditCards:  ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const getAllCreditCardsByClient = async (
	idClient: string
): Promise<CreditCard[] | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_Client=${idClient}`);
		return data || null;
	} catch (error) {
		console.log('METHOD getAllCreditCardsByClient:  ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const createCreditCard = async (
	creditCard: CreditCard
): Promise<number | null> => {
	try {
		const { status } = await api.post(`${baseUrl}`, creditCard);
		return status;
	} catch (error) {
		console.error('METHOD createCreditCard: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

const checkGuidCreditCard = async (
	guid: string
): Promise<CreditCard | null> => {
	try {
		const { data } = await api.get(`${baseUrl}?Id_CreditCard=${guid}`);
		return data.length === 1 ? data[0] : null;
	} catch (error) {
		console.error('METHOD checkGuidCreditCard: ', error);
		usePopup.warning('Error', error as string);
		return null;
	}
};

export const CreditCardsService = {
	getAllCreditCards,
	getAllCreditCardsByClient,
	createCreditCard,
	checkGuidCreditCard,
};
