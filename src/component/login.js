import React, {useEffect, useState} from 'react';
import styles from '../style/styleLogin';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const Login = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginSignIn}>Sign In </Text>
      <TextInput
        style={styles.loginText1}
        placeholder="Username"
        placeholderTextColor={'white'}></TextInput>
      <TextInput
        style={styles.loginText1}
        placeholder="Passsword"
        placeholderTextColor={'white'}></TextInput>
      <View
        onTouchStart={() => navigation.navigate('MainRoute')}
        style={styles.loginButton}>
        <Text
          //   onPress={() => navigation.navigate('Search')}
          style={styles.loginButtonText}>
          Log In
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.cant}>Can't Login? </Text>
        <Text style={styles.forgot}>Forgot your password </Text>
      </View>
    </View>
  );
};
export default Login;
