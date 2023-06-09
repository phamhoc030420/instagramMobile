import React, {useEffect, useState} from 'react';
import styles from '../../style/authentication/styleLogin';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const ForgotPassword = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const handleForgot = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Toast.show({
          type: 'info',
          text1: 'Title',
          text2: 'Send email suscess ',
          visibilityTime: 2000,
          autoHide: true,
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View
        style={[
          styles.loginContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        <Text style={styles.loginSignIn}>Forgot Passs </Text>
        <TextInput
          value={email}
          onChangeText={e => setEmail(e)}
          style={styles.loginText1}
          placeholder="Email"
          placeholderTextColor={'#8A8B8D'}></TextInput>
        <View onTouchStart={handleForgot} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Forgot</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.cant}>Can't Login? </Text>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Authentication')}>
            Login{' '}
          </Text>
        </View>
        <View style={styles.iconLogin}>
          <AntDesign
            style={{color: 'white', marginRight: 10}}
            name={'googleplus'}
            size={28}
          />
          <AntDesign
            style={{color: 'blue', marginRight: 10}}
            name={'facebook-square'}
            size={28}
          />
          <AntDesign
            style={{color: 'red', marginRight: 10}}
            name={'instagram'}
            size={28}
          />
        </View>
      </View>
      <Toast />
    </SafeAreaView>
  );
};
export default ForgotPassword;
