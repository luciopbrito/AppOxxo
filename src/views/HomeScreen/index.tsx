import {
	Box,
	Center,
	HStack,
	NativeBaseProvider,
	Text,
	VStack,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Header from '../../components/Header';
import useAuth, { UserSystem } from '../../contexts/Auth';
import { type RouteProp, useNavigation } from '@react-navigation/native';
import { type RoutesClientList } from '../../routes/routes.client';
import { type RoutesManagerList } from '../../routes/routes.manager';
import { type RoutesEmployeeList } from '../../routes/routes.employee';
import { type Filial } from '../../services/filial';
import { FilialService } from '../../services/filial';
import { Guid } from 'guid-typescript';

export interface HomeScreenParams {
	// type: UserSystem
}

type HomeScreenRouteProp = RouteProp<RoutesClientList, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenParams> = () => {
	const { userType, user, setIdFilialSelected } = useAuth();
	const [state, setState] = useState({
		name: '',
		filiais: [] as Filial[],
	});
	// const [animateMap, setAnimatedMap] = useState(new AnimatedMapView.Value(0))

	const getFirstName = (): string | undefined => {
		if (user) {
			const firstName = user.Name.split(' ', 1)[0];
			return firstName;
		}
	};

	// const animation = () => {
	// 	Animated.timing(animateMap, {
	// 		toValue: '70.5%',
	// 		duration: 3000,
	// 		useNativeDriver: true,
	// 	}).start()
	// }

	const handleGoFilial = (idFilial: string) => {
		setIdFilialSelected(idFilial);
		navigation.navigate('FlowCheckout');
	};

	useEffect(() => {
		// console.log("entrou home com o id: ", route.params?.userId)
		var name: string | undefined = getFirstName();
		if (name) {
			setState((state) => {
				return { ...state, name: name as string };
			});
		}
		const fetchFiliais = async () => {
			const filiais = await FilialService.getAllFilials();
			if (filiais != null) {
				setState((prevState: { name: string; filiais: Filial[] }) => ({
					...prevState,
					filiais: filiais as Filial[],
				}));
			}
		};
		// eslint-disable-next-line
		fetchFiliais();
		// animation()
	}, []);

	var navigation: any;
	switch (userType) {
		case UserSystem.Client:
			navigation = useNavigation<RoutesClientList>();
			return (
				<NativeBaseProvider>
					<VStack flex="1" bgColor="#f00" mt="30">
						<Header nav={navigation} type={'full'} />
						<Center>
							<Text color="#fff" bold={true} fontSize={'md'} mb="5">
								{user?.Genero === 1
									? `Seja bem vindo, ${state.name}`
									: `Seja bem vinda, ${state.name}`}
							</Text>
						</Center>
						<VStack h="full">
							<HStack w="full" justifyContent={'center'}>
								<Box
									zIndex={2000}
									backgroundColor="#FBB110"
									borderTopRadius={200}
									w="50%">
									<Center>
										<Text fontSize="sm" color="#fff">
											Escolha sua unidade
										</Text>
									</Center>
								</Box>
							</HStack>
							{/* <AnimatedMapView style={{ height: animateMap }}> */}
							<MapView
								style={{ height: '70.5%' }}
								initialRegion={{
									latitude: -23.4727966,
									longitude: -46.5333825,
									latitudeDelta: 0.00922,
									longitudeDelta: 0.00421,
								}}
								minZoomLevel={17}
								showsUserLocation={true}>
								{state.filiais.map((filial: Filial) => (
									<Marker
										key={filial.Id_Filial}
										coordinate={{
											latitude: filial.Address.latitude,
											longitude: filial.Address.longitude,
										}}
										title={filial.Name_Filial}
										onPress={() => handleGoFilial(filial.Id_Filial)}
									/>
								))}
							</MapView>
							{/* </AnimatedMapView> */}
							<HStack w="full" justifyContent={'center'}>
								<Box
									backgroundColor="#FBB110"
									borderBottomRadius={100}
									w="50%"
									h="5"></Box>
							</HStack>
						</VStack>
					</VStack>
				</NativeBaseProvider>
			);
		case UserSystem.Employee:
			navigation = useNavigation<RoutesEmployeeList>();
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={'center'} alignItems={'center'}>
						<Text>Home Funcionário</Text>
					</Box>
				</NativeBaseProvider>
			);
		case UserSystem.Manager:
			navigation = useNavigation<RoutesManagerList>();
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={'center'} alignItems={'center'}>
						<Text>Home Gerente</Text>
					</Box>
				</NativeBaseProvider>
			);
		default:
			return null;
	}
};
export default HomeScreen;
