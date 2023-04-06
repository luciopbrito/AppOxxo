import { Box, Input } from 'native-base';
import React, { FunctionComponent } from 'react';

interface Props {
	placeholder: string;
	funcState: (value: any) => void;
}

const FormInput: FunctionComponent<Props> = ({ placeholder, funcState }) => {
	return (
		<Input
			placeholder={placeholder}
			backgroundColor='#fff'
			fontSize={15}
			onChangeText={(e) => funcState(e)}
		/>
	)
}

export default FormInput;
