import { type Guid } from 'guid-typescript';
import { Box, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../globalStyles';
import { type CreditCard } from '../../services/credit-cards';

interface CreditCardComponentProps {
	creditCard: CreditCard;
	handleSelected: (id: Guid) => void;
}

const CreditCardComponent: React.FC<CreditCardComponentProps> = ({
	creditCard,
	handleSelected,
}) => {
	const [state, setState] = useState({
		bgColor: Colors.red,
		boder: Colors.yellow,
	});

	const changeSelected = (): void => {
		setState((prev) => {
			return {
				...prev,
				bgColor: prev.bgColor === Colors.red ? Colors.yellow : Colors.red,
				border: prev.borderColor === Colors.yellow ? Colors.red : Colors.yellow,
			};
		});
	};

	useEffect(() => {
		changeSelected();
	}, [handleSelected]);

	return (
		<TouchableOpacity
			onPress={() => {
				changeSelected();
			}}>
			<Box
				style={{
					backgroundColor: state.bgColor,
					padding: 10,
					width: '90%',
					borderColor: state.border,
					borderWidth: 3,
					borderStyle: 'solid',
					borderRadius: 10,
				}}>
				<Text style={{ color: '#fff' }}>
					Apelido:
					<Text style={{ fontWeight: 'bold' }}>{creditCard.Nickname_Card}</Text>
				</Text>
				<Text style={{ color: '#fff' }}>
					Número do Cartão:{' '}
					<Text style={{ fontWeight: 'bold' }}>
						{creditCard.Num_CreditCard}
					</Text>
				</Text>
				<Text style={{ color: '#fff' }}>
					Modalidade:{' '}
					<Text style={{ fontWeight: 'bold' }}>
						{creditCard.Modality === 1 ? 'Crédito' : 'Débito'}
					</Text>
				</Text>
			</Box>
		</TouchableOpacity>
	);
};

export default CreditCardComponent;
