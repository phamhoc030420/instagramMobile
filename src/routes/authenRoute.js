import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainRoute from './mainRoute';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../component/Authentication/login';
import Detail from '../component/home/detail';
import Register from '../component/Authentication/register';
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
