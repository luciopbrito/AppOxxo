import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from './routes';
import AuthProvider from './contexts/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
		// <NavigationContainer>
		//     <Stack.Navigator initialRouteName='LoginScreen'>
		//         <Stack.Screen
		//             options={{
		//                 title: '',
		//                 headerTransparent: true,
		//                 headerShown: false,
		//             }}
		//             name="AnimationInitial"
		//             component={AnimationInitial}
		//         />
		//         <Stack.Screen
		//             options={{
		//                 title: '',
		//                 headerTransparent: true,
		//                 headerShown: false
		//             }}
		//             name="LoginScreen"
		//             component={LoginScreen}
		//         />
		//         <Stack.Screen
		//             options={{
		//                 title: '',
		//                 headerTransparent: true,
		//                 headerShown: false
		//             }}
		//             name="CadastroClienteScreen"
		//             component={CadastroClienteScreen}
		//         />
		//         <Stack.Screen
		//             options={{
		//                 title: '',
		//                 headerTransparent: true,
		//                 headerShown: false
		//             }}
		//             name="SignInScreen"
		//             component={SingInScreen}
		//         />
		//         <Stack.Screen
		//             options={{
		//                 title: '',
		//                 headerTransparent: true,
		//                 headerShown: false
		//             }}
		//             name="RecoverPasswordScreen"
		//             component={RecoverPasswordScreen}
		//         />
		//     </Stack.Navigator>
		// </NavigationContainer>
	);
}
