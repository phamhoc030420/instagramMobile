import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MenuProvider} from 'react-native-popup-menu';
const Tab = createBottomTabNavigator();
import Camera from '../component/Camera/camera';
import Search from '../component/search/search';
import Instagram from '../component/home/ig';
import Video from '../component/Reels/video';
import User from '../component/user/user';
import {ThemeContext} from '../../App';
const MainRoute = () => {
  const {colorMode, colorText} = useContext(ThemeContext);
  return (
    <MenuProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colorMode,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Instagram}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={30}
                color={colorText}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={30}
                color={colorText}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <AntDesign
                name={focused ? 'plussquare' : 'plussquareo'}
                size={30}
                color={colorText}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                size={30}
                color={colorText}
                name={focused ? 'movie' : 'movie-outline'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  borderWidth: focused ? 1 : null,
                  borderColor: focused ? 'black' : null,
                }}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </MenuProvider>
  );
};
export default MainRoute;
