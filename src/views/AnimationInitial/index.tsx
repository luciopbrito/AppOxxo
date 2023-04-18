import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, Image } from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native'
import icon from '../../assets/logo.png'
import { Box, NativeBaseProvider } from "native-base";
import api from "../../services/api";

const AnimationInitial: React.FC = () => {
	const [animate, setAnimate] = useState(new Animated.Value(0))
	const navigation = useNavigation<NavigationProp<ParamListBase>>();

	useEffect(() => {
		Animation();
	}, []);

	const Animation = () => {
		console.log("animação incial...")
		Animated.timing(animate, {
			toValue: 1,
			duration: 3000,
			useNativeDriver: true,
			// }).start(() => { navigation.navigate('LoginScreen', { type: 'cliente' }); console.log("redirecinado para login tipo cliente") });
		}).start(() => { navigation.navigate('ChooseUserScreen'); console.log("redirecinado para escolher tipo de usuário") });
	}

	return (
		<NativeBaseProvider>
			<Box style={styles.container}>
				<Animated.View style={{ opacity: animate }}>
					<Image source={icon} />
				</Animated.View>
			</Box>
		</NativeBaseProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red'
	},
});

export default AnimationInitial;
