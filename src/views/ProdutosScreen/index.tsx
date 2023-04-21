import React, { useEffect, useState } from "react"
import { Box, Text, NativeBaseProvider, Image } from "native-base"
import { Alert, Button } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Header from "../../components/Header"
import { RouteProp, useNavigation } from "@react-navigation/native"
import useAuth from "../../contexts/Auth"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import { RoutesClientList } from "../../routes/routes.client"
import styles from "./styles"
import { ProductService, Product } from "../../services/products"
import { usePopup } from "../../services/popups"

export type ProdutosScreenParams = {

}

type ProdutosScreenNavigationProp = DrawerNavigationProp<RoutesClientList, 'ProdutosScreen'>

type ProdutosScreenRouteProp = RouteProp<RoutesClientList, 'ProdutosScreen'>

const ProdutosScreen: React.FC<ProdutosScreenParams> = () => {
	// contexto
	const { user } = useAuth()
	const [Products, setProducts] = useState<Product[] | null>(null)
	const navigation = useNavigation<ProdutosScreenNavigationProp>()

	const getProducts = async () => {
		var products = await ProductService.getAllProducts()
		products ? setProducts(products) : null
	}

	useEffect(() => {
		getProducts()
	}, []);

	return (
		<NativeBaseProvider>
			<Box flex='1' safeArea>
				<Header navigation={navigation} type={"full"} />
				<Box style={styles.container}>
					<ScrollView>
						<Box style={styles.containerProduto}>
							{Products?.map((item) => {
								return <Produto item={item} key={item.Id_Product} />
							})}
						</Box>
					</ScrollView>
				</Box>
			</Box>
		</NativeBaseProvider>
	)
}

interface ProdutoProps {
	item: Product
}

const Produto: React.FC<ProdutoProps> = ({ item }) => {

	const modalProduto = async (item: Product) => {
		var produto = item;
		usePopup.warning(produto.Name_Product, `${produto.Price.toString().replace('.', ',')} Reais`)
	}

	return (
		<Box style={styles.boxProduto}>
			<Image source={{ uri: item.Uri }} alt="image" size='xl' />
			<Text style={styles.titleProduto}>{item.Name_Product}</Text>
			<Box>
				<Button color='#FBB110' title='Comprar' onPress={() => { modalProduto(item) }} />
			</Box>
		</Box>
	)
}

export default ProdutosScreen;
