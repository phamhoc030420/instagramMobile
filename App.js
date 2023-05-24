/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, createContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {PermissionsAndroid, BackHandler} from 'react-native';
import AutheRoute from './src/routes/authenRoute';
import RNBootSplash from 'react-native-bootsplash';
export const ThemeContext = createContext();
const App = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const init = async () => {
      //permission
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          BackHandler.exitApp();
        }
      } catch (err) {
        console.warn(err);
      }
      //
      const response = await fetch(
        'https://64677693ba7110b663b98c03.mockapi.io/api/Instagram/users',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      const data = await response.json();
      setDatas(data);
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 10});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <ThemeContext.Provider value={datas}>
      <AutheRoute />
    </ThemeContext.Provider>
  );
};
export default App;
