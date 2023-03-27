import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import AnimationInitial from "./src/components/AnimationInitial/AnimationInitial";
import CadastroClienteScreen from "./src/views/CadastroClienteScreen/CadastroClienteScreen";
import LoginScreen from "./src/views/LoginScreen/LoginScreen";
import ProdutosScreen from "./src/views/ProdutosScreen/ProdutosScreen";
import AppMapaScreen from './src/views/AppMapaScreen/AppMapaScreen';
// import AppMapaScreen from "./src/views/AppMapaScreen/AppMapaScreen";

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AppMapaScreen'>
                <Stack.Screen
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerShown: false,
                    }}
                    name="AnimationInitial"
                    component={AnimationInitial}
                />
                <Stack.Screen
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerShown: false
                    }}
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerShown: false
                    }}
                    name="CadastroClienteScreen"
                    component={CadastroClienteScreen}
                />
                <Stack.Screen
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerShown: false
                    }}
                    name="ProdutosScreen"
                    component={ProdutosScreen}
                />
                <Stack.Screen
                    options={{
                        title: '',
                        headerTransparent: true,
                        headerShown: false
                    }}
                    name="AppMapaScreen"
                    component={AppMapaScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
