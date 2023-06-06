/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, createContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {
  PermissionsAndroid,
  BackHandler,
  Alert,
  ToastAndroid,
} from 'react-native';
import AutheRoute from './src/routes/authenRoute';
import RNBootSplash from 'react-native-bootsplash';
export const ThemeContext = createContext();
import * as Keychain from 'react-native-keychain';
const App = () => {
  const [datas, setDatas] = useState([]);
  const [idToken, setIdToken] = useState('');
  const [userRole, setUserRole] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    const init = async () => {
      const result = await Keychain.getGenericPassword();
      setToken(!result ? '' : result.password);
      //permission
      try {
        const checkGranted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (!checkGranted) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the POST NOTIFICATIONS');
          } else {
            BackHandler.exitApp();
          }
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
      LocalAuthentication.isSupportedAsync()
        .then(isSecure => {
          if (isSecure) {
            console.log('Thiết bị hỗ trợ xác thực local');
            const handleAuthenticate = async () => {
              const result = await LocalAuthentication.authenticateAsync({
                reason: 'Very important reason to authenticate',
                fallbackEnabled: true,
                fallbackTitle: 'Enter password',
                cancelTitle: 'Cancel',
                fallbackToPinCodeAction: true,
                reuseDuration: '100',
                fallbackEnabled: true,
                fallbackTitle: true,
                cancelTitle: true,
              });
              if (result.success) {
                await RNBootSplash.hide({fade: true, duration: 10});
                console.log('BootSplash has been hidden successfully');
              } else {
                BackHandler.exitApp();
              }
            };
            handleAuthenticate();
          } else {
            console.log('Thiết bị không hỗ trợ xác thực local');
          }
        })
        .catch(error => {
          console.log('Lỗi kiểm tra tính khả dụng của xác thực local:', error);
        });
    };
    RNBootSplash.hide({fade: true, duration: 10});
    init();
  }, []);
  //save token
  const authenticate = async newToken => {
    try {
      await Keychain.setGenericPassword('token', newToken);
      setToken(newToken);
    } catch (error) {
      console.log('Lỗi khi lưu token vào Keychain:', error);
    }
  };
  //token
  useEffect(() => {
    const readValue = async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          const token = credentials.password;
          setToken(token);
        } else {
          console.log('Không tìm thấy giá trị');
        }
      } catch (error) {
        console.log('Lỗi khi đọc giá trị:', error);
      }
    };
    readValue();
  }, []);
  //remove
  const removeValue = async () => {
    try {
      await Keychain.resetGenericPassword();
      setToken('');
      console.log('Giá trị đã được xóa thành công!');
    } catch (error) {
      console.log('Lỗi khi xóa giá trị:', error);
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        datas,
        idToken,
        setIdToken,
        userRole,
        setUserRole,
        token,
        authenticate,
        removeValue,
      }}>
      <AutheRoute />
    </ThemeContext.Provider>
  );
};
export default App;
