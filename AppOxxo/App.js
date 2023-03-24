import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator  } from "@react-navigation/stack"
import AnimationInitial from "./src/components/AnimationInitial/AnimationInitial";
import Login from "./src/views/Login/Login.js";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AnimationInitial" component={AnimationInitial} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
