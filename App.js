/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Instagram from './src/component/ig';
import {View} from 'react-native/types';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import User from './src/component/user';
import Search from './src/component/search';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            component={Instagram}
            options={{
              tabBarIcon: ({focus}) => <Foundation name={'home'} size={30} />,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({focus}) => <Feather name={'search'} size={30} />,
            }}
          />
          <Tab.Screen
            name="Camera"
            component={Instagram}
            options={{
              tabBarIcon: ({focus}) => (
                <AntDesign name={'instagram'} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Video"
            component={Instagram}
            options={{
              tabBarBadge: 3,
              tabBarIcon: ({focus}) => (
                <AntDesign name={'videocamera'} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={User}
            options={{
              tabBarBadge: 10,
              tabBarIcon: ({focus}) => <AntDesign name={'user'} size={30} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
