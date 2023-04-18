import { Box, Input } from 'native-base';
import React from 'react';

type Props = {
	placeholder: string;
	funcState: (key: string, value: any) => void;
	field: string;
}

const FormInput: React.FC<Props> = ({ placeholder, funcState, field }) => {

	return (
		<Input
			placeholder={placeholder}
			backgroundColor='#fff'
			fontSize={15}
			onChangeText={(e) => funcState(field, e)}
		/>
	)
}

export default FormInput;
