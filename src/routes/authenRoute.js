import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainRoute from './mainRoute';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../component/Authentication/login';
import Detail from '../component/home/detail';
import Register from '../component/Authentication/register';
import EditProfile from '../component/user/edit_profile';
import Upload from '../component/Camera/upload';
import {ThemeContext} from '../../App';
import Notify from '../component/home/notify';
import Map from '../component/Map/map';
import Comment from '../component/home/comment';
import * as Keychain from 'react-native-keychain';
import ForgotPassword from '../component/Authentication/forgotPassword';
import SliderStar from '../component/user/slider';
const Stack = createNativeStackNavigator();
const AutheRoute = () => {
  const {userRole, token} = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!!token ? (
          <Stack.Group>
            <Stack.Screen name="MainRoute" component={MainRoute} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="EditUser" component={EditProfile} />
            <Stack.Screen name="Upload" component={Upload} />
            <Stack.Screen name="Notify" component={Notify} />
            <Stack.Screen name="Comment" component={Comment} />
            <Stack.Screen name="Slider" component={SliderStar} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Authentication" component={Login} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="Forgot" component={ForgotPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AutheRoute;
