import 'react-native-gesture-handler';
import * as React from 'react';
import Routes from './routes';
import { AuthProvider } from './contexts/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): JSX.Element {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	);
}
