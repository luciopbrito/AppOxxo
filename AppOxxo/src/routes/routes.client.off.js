import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import AnimationInitial from '../components/AnimationInitial';
import LoginScreen from '../views/LoginScreen';
import RecoverPasswordScreen from '../views/RecoverPasswordScreen';
import CadastroClienteScreen from '../views/CadastroClienteScreen';
import { RoutesClientOn } from './routes.client.on';

export function RoutesClientOff() {
    const { Navigator, Screen } = createStackNavigator();
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='AnimationInitial'
        >
            <Screen
                name='AnimationInitial'
                component={AnimationInitial}
            />
            <Screen
                name='LoginScreen'
                component={LoginScreen}
            />
            <Screen
                name='RecoverPasswordScreen'
                component={RecoverPasswordScreen}
            />
            <Screen
                name="RoutesClientOn"
                component={RoutesClientOn}
            />
            <Screen
                name='CadastroClienteScreen'
                component={CadastroClienteScreen}
            />
        </Navigator>
    );
}
