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
import {Image, View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import User from './src/component/user';
import Search from './src/component/search';
import Camera from './src/component/camera';
import {MenuProvider} from 'react-native-popup-menu';
import Video from './src/component/video';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <MenuProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              name="Home"
              component={Instagram}
              options={{
                tabBarIcon: ({focus}) => (
                  <Foundation
                    style={{color: 'black'}}
                    name={'home'}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{
                tabBarIcon: ({focus}) => (
                  <Feather style={{color: 'black'}} name={'search'} size={28} />
                ),
              }}
            />
            <Tab.Screen
              name="Camera"
              component={Camera}
              options={{
                tabBarIcon: ({focus}) => (
                  <AntDesign
                    style={{color: 'black'}}
                    name={'instagram'}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Video"
              component={Video}
              options={{
                tabBarIcon: ({focus}) => (
                  <MaterialCommunityIcons
                    style={{color: 'black'}}
                    name={'movie-outline'}
                    size={28}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="User"
              component={User}
              options={{
                tabBarIcon: ({focus}) => (
                  <Image
                    style={{width: 28, height: 28, borderRadius: 100}}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
                    }}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </>
  );
};
export default App;
