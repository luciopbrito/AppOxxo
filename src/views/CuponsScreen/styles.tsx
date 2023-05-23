import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import { Colors } from '../../globalStyles';
import * as Font from 'expo-font';

const styles = StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: 25,
		backgroundColor: "#fff",
		//gap: 15,
		//paddingBottom: 5,
		fontFamily: "Montserrat",
	},
	containerPontuacao: {
		borderRadius: 20,
		borderStyle: "solid",
		borderWidth: 5,
		borderColor: "#FBB110",
		width: "30%",
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	containerCupons: {
		width: "95%",
		gap: 10,
		borderRadius: 15,
		backgroundColor: "white",
		paddingTop: 15,
		paddingBottom: 15,
		marginBottom: 20,
	},
	View: {
		backgroundColor: "#f00",
		//marginBottom: 20,

	},

	draw: {
		backgroundColor: "#F00",

	},
})

export default styles;
