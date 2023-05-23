import React, { useState } from 'react';
import { Box, HStack, NativeBaseProvider, Text, VStack } from 'native-base';
import { RoutesClientList } from '../../routes/routes.client';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Header from '../../components/Header';
import Cupom, { CupomProps } from '../../components/Cupom';
import styles from './styles';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import { ScrollView } from "react-native-gesture-handler";


export type CuponsScreenParams = {

}

type CuponsScreenRouteProps = RouteProp<RoutesClientList, "CuponsScreen">
type CuponsScreenNavigationProps = DrawerNavigationProp<RoutesClientList, "CuponsScreen">

const CuponsScreen: React.FC = () => {
	const [state, setState] = useState({
		currentPoints: 0,
		availableCupons: [
			{
				Id_Coupon: 2,
				Id_Category: 1,
				Id_Filial: 1,
				Id_Status: 1,
				Percentage: 10,
				DateCreated: new Date("2023-04-17")
			},
			{
				Id_Coupon: 5,
				Id_Category: 1,
				Id_Filial: 1,
				Id_Status: 1,
				Percentage: 10,
				DateCreated: new Date("2023-04-17")
			},
			{
				Id_Coupon: 4,
				Id_Category: 1,
				Id_Filial: 1,
				Id_Status: 1,
				Percentage: 25,
				DateCreated: new Date("2023-04-17")
			},
		] as CupomProps[],
		usedCupons: [
			{
				Id_Coupon: 1,
				Id_Category: 1,
				Id_Filial: 1,
				Id_Status: 2,
				Percentage: 70,
				DateCreated: new Date("2023-04-17")
			},
			{
				Id_Coupon: 3,
				Id_Category: 1,
				Id_Filial: 1,
				Id_Status: 2,
				Percentage: 5,
				DateCreated: new Date("2023-04-17")
			}
		] as CupomProps[],
	})

	const navigation = useNavigation<CuponsScreenNavigationProps>()
	return (
		<NativeBaseProvider>
			<Box style={styles.container}>
				<Header navigation={navigation} type={"normal"}></Header>
				<ScrollView style={styles.View}>
					<HStack w={"100%"} mb={30} justifyContent={"center"} alignItems={"center"} space={5}>
						<Title color='white'>Pontuação</Title>
						<Box style={styles.containerPontuacao}>
							<Text textAlign={"center"} fontSize={15}>{state.currentPoints}</Text>
						</Box>
					</HStack>
					<VStack justifyContent={"center"} alignItems={"center"} space={10}>
						<Box style={styles.containerCupons}>
							<Title textAlign={"center"}>Cupons Disponíveis</Title>
							<VStack alignItems={"center"} space={5}>
								{
									state.availableCupons.length > 0
										?
										state.availableCupons.map((infoCupom) => {
											return <Cupom key={infoCupom.Id_Coupon}
												infoCupom={infoCupom}
											/>
										})
										:
										<Box p={5}>
											<Subtitle textAlign={"center"}>
												Não há nenhum cupom disponível
											</Subtitle>
										</Box>
								}
							</VStack>
						</Box>
						<Box style={styles.containerCupons}>
							<Title textAlign={"center"}>Cupons Utilizados</Title>
							<VStack alignItems={"center"} space={5}>
								{
									state.usedCupons.length > 0
										?
										state.usedCupons.map((infoCupom) => {
											return <Cupom key={infoCupom.Id_Coupon}
												infoCupom={infoCupom}
											/>
										})
										:
										<Box p={5}>
											<Subtitle textAlign={"center"}>
												Não há nenhum cupom disponível
											</Subtitle>
										</Box>
								}
							</VStack>
						</Box>
					</VStack>
				</ScrollView>
			</Box>
		</NativeBaseProvider>
	);
}

export default CuponsScreen;
