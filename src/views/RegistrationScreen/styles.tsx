import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f00',
		color: '#fff',
		flex: 1,
		marginTop: 30,
		paddingLeft: "5%",
		paddingRight: "5%",
		rowGap: 50,
	},
	image_logo: {
		marginTop: 40,
		marginBottom: 40,
		alignItems: 'center',
		gap: 30
	},
	box_button: {
		marginTop: 20,
		paddingRight: '15%',
		paddingLeft: '15%',
		fontWeight: "800",
		backgroundColor: "#FBB110",
	},
	container_btnSubmit: {
		alignItems: "center",
		// paddingTop: 10,
		// paddingBottom: 10,
		// paddingLeft: 20,
		// paddingRight: 20,
		marginTop: 40,
		// borderRadius: 5,
	},
	btnSubmit: {
		backgroundColor: '#FBB110',
		width: '50%',
		paddingRight: '15%',
		paddingLeft: '15%',
		color: '#fff',
		fontWeight: "800",
		fontSize: 30,
	},
})
