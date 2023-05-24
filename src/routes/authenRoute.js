import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainRoute from './mainRoute';
import Login from '../component/login';
import {NavigationContainer} from '@react-navigation/native';
import Detail from '../component/detail';
import Register from '../component/register';
const Stack = createNativeStackNavigator();
const AutheRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Authentication" component={Login} />
        <Stack.Screen name="MainRoute" component={MainRoute} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AutheRoute;
