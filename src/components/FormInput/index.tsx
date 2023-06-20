import { Input } from 'native-base';
import React from 'react';
import { Colors } from '../../globalStyles';

interface Props {
	placeholder: string;
	funcState: (key: string, value: any) => void;
	field: string;
}

const FormInput: React.FC<Props> = ({ placeholder, funcState, field }) => {
	return (
		<Input
			placeholder={placeholder}
			backgroundColor="#fff"
			fontSize={15}
			borderColor={Colors.yellow}
			borderStyle={'solid'}
			borderWidth={5}
			onChangeText={(e) => {
				funcState(field, e);
			}}
		/>
	);
};

export default FormInput;
