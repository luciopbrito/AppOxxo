import { Box, Center, HStack, NativeBaseProvider, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import MapView from 'react-native-maps';
import Header from "../../components/Header";
import useAuth, { UserSystem } from "../../contexts/Auth";
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RoutesClientList } from "../../routes/routes.client";
import { RoutesManagerList } from "../../routes/routes.manager";
import { RoutesEmployeeList } from "../../routes/routes.employee";

export type HomeScreenParams = {
	// type: UserSystem
}

type HomeScreenRouteProp = RouteProp<RoutesClientList, 'HomeScreen'>

const HomeScreen: React.FC<HomeScreenParams> = () => {
	const { userType, user } = useAuth();
	const [name, setName] = useState<string>('')
	// const [animateMap, setAnimatedMap] = useState(new AnimatedMapView.Value(0))

	const getFirstName = (): string | undefined => {
		if (user) {
			const firstName = user.Name.split(' ', 1)[0];
			return firstName;
		}
	}

	// const animation = () => {
	// 	Animated.timing(animateMap, {
	// 		toValue: '70.5%',
	// 		duration: 3000,
	// 		useNativeDriver: true,
	// 	}).start()
	// }

	useEffect(() => {
		// console.log("entrou home com o id: ", route.params?.userId)
		var name: string | undefined = getFirstName();
		if (name) {
			setName(name);
		}
		// animation()
	}, []);

	var navigation;
	switch (userType) {
		case UserSystem.Client:
			navigation = useNavigation<RoutesClientList>();
			return (
				<NativeBaseProvider>
					<VStack flex='1' bgColor='#f00' mt='30' >
						<Header navigation={navigation} type={"full"} />
						<Center>
							<Text color='#fff' bold={true} fontSize={"md"} mb='5' >
								{user?.Genero == 1 ? `Seja bem vindo, ${name}` : `Seja bem vinda, ${name}`}
							</Text>
						</Center>
						<VStack h='full'>
							<HStack w='full' justifyContent={'center'}>
								<Box zIndex={2000} backgroundColor='#FBB110' borderTopRadius={200} w='50%' >
									<Center>
										<Text fontSize='sm' color='#fff'>Escolha sua unidade</Text>
									</Center>
								</Box>
							</HStack>
							{/* <AnimatedMapView style={{ height: animateMap }}> */}
							<MapView style={{ height: '70.5%' }}
								initialRegion={{
									latitude: -23.464363,
									longitude: -46.523467,
									latitudeDelta: 0.00922,
									longitudeDelta: 0.00421,
								}}
								minZoomLevel={17}
								showsUserLocation={true}
							/>
							{/* </AnimatedMapView> */}
							<HStack w='full' justifyContent={'center'}>
								<Box backgroundColor='#FBB110' borderBottomRadius={100} w='50%' h='5'>
								</Box>
							</HStack>
						</VStack>
					</VStack>
				</NativeBaseProvider>
			)
		case UserSystem.Employee:
			navigation = useNavigation<RoutesEmployeeList>();
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={"center"} alignItems={"center"} >
						<Text>Home Funcionário</Text>
					</Box>
				</NativeBaseProvider>
			)
		case UserSystem.Manager:
			navigation = useNavigation<RoutesManagerList>()
			return (
				<NativeBaseProvider>
					<Box flex={1} justifyContent={"center"} alignItems={"center"} >
						<Text>Home Gerente</Text>
					</Box>
				</NativeBaseProvider>
			);
		default:
			return null;
	}
}
export default HomeScreen;
