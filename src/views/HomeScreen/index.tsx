import { View, Box, Center, HStack, NativeBaseProvider, Text, VStack } from "native-base";
import React, { useEffect, useState, useContext, FunctionComponent } from "react";
import MapView from 'react-native-maps';
import { Animated } from "react-native";
import Header from "../../components/Header";
import { AuthContext, AuthContextType } from "../../contexts/Auth";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface Props {
	navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: FunctionComponent<Props> = ({ navigation }) => {

	const { user } = useContext<AuthContextType>(AuthContext as any)
	const [name, setName] = useState<string>('')
	// const [animateMap, setAnimatedMap] = useState(new AnimatedMapView.Value(0))

	const getFirstName = (): string[] | undefined => {
		if (user) {
			console.log("USER getfirstname", user)
			return user.name.toString().split(' ', 1)
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
		var name: string | undefined = getFirstName()?.toString();
		if (name) {
			setName(name);
		}
		// animation()
	}, []);

	return (
		<NativeBaseProvider>
			<VStack flex='1' bgColor='#f00' mt='30' >
				<Header />
				<Center>
					<Text color='#fff' bold={true} fontSize={"md"} mb='5' >
						{user.genero == 1 ? `Seja bem vindo, ${name}` : `Seja bem vinda, ${name}`}
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
}



export default HomeScreen;
