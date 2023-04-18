import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "#f00",
		gap: 15,
		paddingBottom: 10
	},
	containerPontuacao: {
		borderRadius: 20,
		borderStyle: "solid",
		borderWidth: 5,
		borderColor: "#FBB110",
		width: "30%",
		display: "flex",
		justifyContent: "center"
	},
	containerCupons: {
		width: "95%",
		gap: 10,
		borderRadius: 15,
		backgroundColor: "white",
		paddingTop: 15,
		paddingBottom: 15
	}
})

export default styles;
