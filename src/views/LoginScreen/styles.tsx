import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f00',
		color: '#fff',
		flex: 1,
		alignItems: 'center',
		gap: 50,
		marginTop: 30,
	},
	container_logo: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40
	},
	container_form: {
		width: '80%',
		height: '30%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	input: {
		backgroundColor: "#fff",
		padding: 15,
		textAlign: 'center',
		width: '100%',
		borderWidth: 0
	},
	container_forgetPassword: {
		width: '100%',
		marginTop: 10,
	},
	forgetPassword: {
		color: '#fff',
		textAlign: 'right',
		fontWeight: 'bold'
	},
	container_btnSubmit: {
		backgroundColor: '#FBB110',
		display: 'flex',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 40,
		borderRadius: 5,
	},
	btnSubmit_text: {
		width: '100%',
		paddingRight: '15%',
		paddingLeft: '15%',
		color: '#fff',
		textAlign: 'center',
		fontWeight: "800",
	},
	cadastro: {
		textTransform: 'uppercase',
		color: '#fff',
		marginTop: 30,
		fontWeight: 'bold',
	},
	funcionario: {
		color: '#fff',
		marginTop: 30,
		fontWeight: 'bold',
	},
	text: {

	}
})

export default styles;
