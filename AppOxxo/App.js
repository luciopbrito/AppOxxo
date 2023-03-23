import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import icon from './assets/oxxo_logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon}/>
      <Text>Oxxo</Text>
      <Text>Mercado</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
