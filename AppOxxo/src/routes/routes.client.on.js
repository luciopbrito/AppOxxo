import { createDrawerNavigator } from '@react-navigation/drawer';
import AppMapaScreen from '../views/AppMapaScreen/AppMapaScreen'
import AccountScreen from '../views/AccountScreen/'
import ProdutosScreen from '../views/ProdutosScreen/ProdutosScreen'
import LoginScreen from '../views/LoginScreen/LoginScreen'
import { React, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DrawerCustom } from '../components/DrawerCustom';

export function RoutesClientOn({ navigation, route }) {

    useEffect(() => {
        // console.log("entrou em RoutesClientOn com id: ", route.params?.userId)
    })

    const { Navigator, Screen } = createDrawerNavigator()

    return (
        <Navigator
            initialRouteName='AppMapaScreen'
        // drawerContent={props => <DrawerCustom {...props} />}
        >
            <Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Início',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="md-home"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
                name="AppMapaScreen"
                component={AppMapaScreen}
                initialParams={route}
            />
            <Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Conta',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="person"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
                name="AccountScreen"
                initialParams={route}
                component={AccountScreen}
            />
            <Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Produtos',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="cart"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
                name="ProdutosScreen"
                component={ProdutosScreen}
            />
            <Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Sair',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="log-out"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
                name="LoginScreen"
                component={LoginScreen}
            />
        </Navigator>
    );
}
