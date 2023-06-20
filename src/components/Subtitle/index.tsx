import React from 'react';
import { Text } from 'native-base';

// import { Container } from './styles';

interface SubtitleParams {
	children: React.ReactNode;
	textAlign?: any;
	color?: string;
}

const Subtitle: React.FC<SubtitleParams> = ({ children, color, textAlign }) => {
	return (
		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		<Text textAlign={textAlign || undefined} fontSize={20} color={color}>
			{children}
		</Text>
	);
};

export default Subtitle;
