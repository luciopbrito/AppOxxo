import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import icon from './assets/oxxo_logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon}/>
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
