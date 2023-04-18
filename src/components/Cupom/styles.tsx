import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		// borderStyle: "solid",
		// borderWidth: 5,
		borderRadius: 20,
		backgroundColor: "#FBB110",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		width: "80%",
		paddingTop: 20,
		paddingBottom: 20,
	},
	title: {
		fontSize: 20,
		color: "#fff"
	},
	numberPercentage: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
		transform: [{ rotate: '-90deg' }]
	}
});

export default styles;
