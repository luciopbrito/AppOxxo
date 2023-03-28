import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from "../LoginScreen/LoginScreen";
import AccountScreen from "../AccountScreen";
import ProdutosScreen from "../ProdutosScreen/ProdutosScreen";
import AppMapaScreen from '../AppMapaScreen/AppMapaScreen';

const Drawer = createDrawerNavigator();

export default function SingInScreen({ route }) {

    return (
        <Drawer.Navigator
            initialRouteName='AppMapaScreen'
        >
            <Drawer.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    drawerLabel: 'Início',
                }}
                name="AppMapaScreen"
                component={AppMapaScreen}
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
                component={LoginScreen}
            />
        </Drawer.Navigator>
    );
}
