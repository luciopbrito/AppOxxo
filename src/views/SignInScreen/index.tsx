import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from "../LoginScreen";
import AccountScreen from "../AccountScreen";
import ProdutosScreen from "../ProdutosScreen";
import HomeScreen from '../HomeScreen';
import { FunctionComponent } from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';

interface Props {
	route: RouteProp<ParamListBase>;
}

const SingInScreen: FunctionComponent<Props> = ({ route }) => {

	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			initialRouteName='HomeScreen'
		>
			<Drawer.Screen
				options={{
					title: '',
					headerTransparent: true,
					headerShown: false,
					drawerLabel: 'Início',
				}}
				name="HomeScreen"
				component={HomeScreen}
				initialParams={route}
			/>
			<Drawer.Screen
				options={{
					title: '',
					headerTransparent: true,
					headerShown: false,
					drawerLabel: 'Conta'
				}}
				name="AccountScreen"
				initialParams={route}
				component={AccountScreen}
			/>
			<Drawer.Screen
				options={{
					title: '',
					headerTransparent: true,
					headerShown: false,
					drawerLabel: 'Produtos'
				}}
				name="ProdutosScreen"
				component={ProdutosScreen}
			/>
			<Drawer.Screen
				options={{
					title: '',
					headerTransparent: true,
					headerShown: false,
					drawerLabel: 'Sair'
				}}
				name="LoginScreen"
				component={LoginScreen as React.ComponentType}
			/>
		</Drawer.Navigator>
	);
}

export default SingInScreen;
