import { Text, View } from "react-native"
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Home from "./Screen/Home";

const Stack = createNativeStackNavigator();

function LoginTab(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
   
    </Stack.Navigator>
  )
}
const App = () =>{
  return(
     <NavigationContainer>
      <LoginTab />
     </NavigationContainer>
  )
}
export default App