import React from 'react';
import { Text } from 'native-base';

// import { Container } from './styles';

type TitleParams = {
	children: React.ReactNode,
	textAlign?: any,
	color?: string,
}

const Title: React.FC<TitleParams> = ({ children, color, textAlign }) => {
	return (
		<Text textAlign={textAlign ? textAlign : undefined}
			fontSize={25}
			fontWeight={"bold"}
			color={color}
		>
			{children}
		</Text >
	);
}

export default Title;
