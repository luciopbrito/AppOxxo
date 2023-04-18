import { Box, HStack, Text } from 'native-base';
import React from 'react';

import styles from './styles';

type CupomParams = {
	infoCupom: CupomProps
}

export type CupomProps = {
	Id_Coupon: number,
	Id_Category: number,
	Id_Filial: number,
	Id_Status: number,
	Percentage: number,
	DateCreated: Date
}

const Cupom: React.FC<CupomParams> = ({ infoCupom }) => {
	return (
		<HStack style={styles.container}>
			<Text style={styles.title}>OXXO</Text>
			<Box style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 5 }}>
				<Box
					paddingRight={1}
					paddingLeft={2}
					borderRadius={50}
					h={3}
					bgColor={
						infoCupom.Id_Status != 1 ? "#f00" : "#0F0"
					}
				/>
				<Text style={styles.numberPercentage}>
					{`${infoCupom.Percentage}%`}
				</Text>
			</Box>
		</HStack>
	);
}

export default Cupom;
