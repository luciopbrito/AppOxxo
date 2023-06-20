import React, { useEffect, useState } from 'react';
import {
	NativeBaseProvider,
	VStack,
	Text,
	Button,
	HStack,
	Radio,
	Box,
} from 'native-base';
import {
	type CreditCard,
	CreditCardsService,
} from '../../services/credit-cards';
import FormInput from '../../components/FormInput';
import useAuth from '../../contexts/Auth';
import { type Client } from '../../services/clients';
import { type Guid } from 'guid-typescript';
import { usePopup } from '../../services/popups';
import CreditCardComponent from '../../components/CreditCard';
import Title from '../../components/Title';
import { Colors } from '../../globalStyles';

export interface CreditCardScreenParams {
	createNewCreditCard: boolean;
}

// type CreditCardScreenRouteProp = RouteProp<
// 	RoutesFlowCheckoutList,
// 	'CreditCardScreen'
// >;

interface FormCreditCard {
	Nickname_Card: string | null;
	Num_CreditCard: number | null;
	Card_Banner: string | null;
}

interface CreditCardScreenProps {
	isModeCreate: boolean;
	creditCardToCreate: FormCreditCard;
	Modality: number;
	ClientCreditCards: CreditCard[];
}

const CreditCardScreen: React.FC<CreditCardScreenParams> = ({
	createNewCreditCard,
}) => {
	// context
	const { user } = useAuth();

	const [state, setState] = useState<CreditCardScreenProps>({
		isModeCreate: createNewCreditCard,
		creditCardToCreate: {
			Card_Banner: null,
			Nickname_Card: null,
			Num_CreditCard: null,
		},
		Modality: 1,
		ClientCreditCards: [],
	});

	const handleChangeMode = (): void => {
		setState((prev) => {
			return { ...prev, isModeCreate: !prev.isModeCreate };
		});
	};

	const changeFormCreditCard = (key: string, value: any): void => {
		setState((prev) => {
			return {
				...prev,
				creditCardToCreate: {
					...prev.creditCardToCreate,
					[key]: value,
				},
			} as CreditCardScreenProps;
		});

		console.log('creditCard: ', state.creditCardToCreate);
	};

	const checkForm = (): boolean => {
		let isValid = true;
		// eslint-disable-next-line
		Object.values(state.creditCardToCreate).map((e) => {
			if (e === null) {
				isValid = false;
			}
		});

		if (state.Modality === null) {
			isValid = false;
		}

		return isValid;
	};

	const getGuidValid = async (): Promise<Guid> => {
		let guid: Guid = Guid.create();

		while (
			(await CreditCardsService.checkGuidCreditCard(guid.toString())) !== null
		) {
			guid = Guid.create();
		}

		return guid;
	};

	const handleCreateNewCreditCard = async (): Promise<void> => {
		if (checkForm()) {
			const userToPersist = user as Client;
			const creditCardToPersist: CreditCard = {
				Id_CreditCard: await getGuidValid(),
				Id_Client: userToPersist.Id_Client,
				Num_CreditCard: state.creditCardToCreate.Num_CreditCard as number,
				Nickname_Card: state.creditCardToCreate.Nickname_Card as string,
				Modality: state.Modality,
				Card_Banner: state.creditCardToCreate.Card_Banner as string,
			};
			await CreditCardsService.createCreditCard(creditCardToPersist);
		} else {
			usePopup.warning('Cadastro Incorreto', 'Preencha todos campos');
		}
	};

	const getAllCreditCards = (): void => {
		const client = user as Client;
		CreditCardsService.getAllCreditCardsByClient(
			client.Id_Client.toString()
		).then((response) => {
			setState((prev) => {
				return { ...prev, ClientCreditCards: response as CreditCard[] };
			});
		});
	};

	useEffect(() => {
		if (!state.isModeCreate) {
			// eslint-disable-next-line
			getAllCreditCards();
		}
	}, []);

	return state.isModeCreate ? (
		<NativeBaseProvider>
			<VStack
				space={5}
				style={{ paddingTop: 10, backgroundColor: Colors.yellow, flex: 1 }}>
				<HStack style={{ justifyContent: 'center' }}>
					<Title>Criar Cartão de Crédito</Title>
				</HStack>
				<FormInput
					placeholder="Número do Cartão"
					funcState={changeFormCreditCard}
					field={'Num_CreditCard'}
				/>
				<FormInput
					placeholder="Bandeira do cartão"
					funcState={changeFormCreditCard}
					field={'Card_Banner'}
				/>
				<FormInput
					placeholder="Apelido do Cartão"
					funcState={changeFormCreditCard}
					field={'Nickname_Card'}
				/>
				<HStack space={3} alignItems={'center'}>
					<Text style={{ fontSize: 16 }}>Modalidade:</Text>
					<Radio.Group
						name="Genero"
						value={state.Modality?.toString()}
						onChange={(nextValue) => {
							setState((prev: CreditCardScreenProps) => {
								return { ...prev, Modality: +nextValue };
							});
						}}>
						<HStack space={3}>
							<Radio value="1" my="1">
								Crédito
							</Radio>
							<Radio value="2" my="1">
								Débito
							</Radio>
						</HStack>
					</Radio.Group>
				</HStack>
				<VStack space={5} style={{ alignItems: 'center' }}>
					<Button
						style={{ width: '80%' }}
						onPress={() => {
							// eslint-disable-next-line
							handleCreateNewCreditCard();
						}}>
						Adicionar
					</Button>
					<Button
						style={{ width: '80%' }}
						onPress={() => {
							handleChangeMode();
						}}>
						Cancelar
					</Button>
				</VStack>
			</VStack>
		</NativeBaseProvider>
	) : (
		<NativeBaseProvider>
			<VStack style={{ flex: 1 }} space={5}>
				{/* <HStack style={{ justifyContent: 'center' }}> */}
				{state.ClientCreditCards.length > 0 ? (
					state.ClientCreditCards.map((e) => {
						return (
							<Box style={{ width: '90%' }}>
								<CreditCardComponent
									key={e.Id_CreditCard.toString()}
									creditCard={e}
									// handleSelected={}
								/>
							</Box>
						);
					})
				) : (
					<Text>Não possui nenhum cartão</Text>
				)}
				{/* </HStack> */}
				<HStack style={{ justifyContent: 'center' }}>
					<Button
						style={{ width: '50%' }}
						onPress={() => {
							// eslint-disable-next-line
							handleChangeMode();
						}}>
						Adicionar um Novo Cartão
					</Button>
				</HStack>
			</VStack>
		</NativeBaseProvider>
	);
};

export default CreditCardScreen;
