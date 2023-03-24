import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator  } from "@react-navigation/stack"
import AnimationInitial from "./src/components/AnimationInitial/AnimationInitial";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AnimationInitial" component={AnimationInitial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
