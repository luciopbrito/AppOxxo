import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	titleProduto: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		backgroundColor: "#f8f8f8",
		flexDirection: "column",
		width: '100%'
	},
	containerProduto: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	boxProduto: {
		backgroundColor: '#fff',
		width: "45%",
		borderRadius: 5,
		padding: 15,
		margin: 10,
		borderWidth: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10
	},
})

export default styles;
