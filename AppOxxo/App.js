import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import AnimationInitial from "./src/components/AnimationInitial/AnimationInitial";
import CadastroCliente from "./src/views/CadastroCliente/CadastroCliente";
import Login from "./src/views/Login/Login.js";
import AppMapa from "./src/views/AppMapa/AppMapa";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppMapa" component={AppMapa} />
        <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
        <Stack.Screen name="AnimationInitial" component={AnimationInitial} />
        <Stack.Screen name="Login" component={Login} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
