import React from 'react';
import { Text } from 'native-base';

// import { Container } from './styles';

interface TitleParams {
	children: React.ReactNode;
	textAlign?: any;
	color?: string;
}

const Title: React.FC<TitleParams> = ({ children, color, textAlign }) => {
	return (
		<Text
			// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
			textAlign={textAlign || undefined}
			fontSize={25}
			fontWeight={'bold'}
			color={color}>
			{children}
		</Text>
	);
};

export default Title;
