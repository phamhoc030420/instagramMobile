import React, {useEffect, useState} from 'react';
import styles from '../../style/authentication/styleLogin';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
// import {authentication} from '../../../firebase/firebase-config';
// import {createUserWithEmailAndPassword} from 'firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
const Register = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [isSign, setIsSign] = useState(false);
  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, passWord)
      .then(userCredential => {
        setIsSign(true);
        const user = userCredential.user;
        Toast.show({
          type: 'success',
          text1: 'Title',
          text2: 'Register success !',
          visibilityTime: 2000,
          autoHide: true,
        });
        navigation.navigate('Authentication');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Toast.show({
          type: 'error',
          text1: 'Title',
          text2: 'Register error !',
          visibilityTime: 2000,
          autoHide: true,
        });
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
        <Text style={styles.loginSignIn}>Register </Text>
        <TextInput
          value={email}
          onChangeText={e => setEmail(e)}
          style={styles.loginText1}
          placeholder="Email"
          placeholderTextColor={'#8A8B8D'}></TextInput>
        <TextInput
          secureTextEntry={true}
          value={passWord}
          onChangeText={e => setPassWord(e)}
          style={styles.loginText1}
          placeholder="Passsword"
          placeholderTextColor={'#8A8B8D'}></TextInput>
        <View onTouchStart={handleRegister} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Register</Text>
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
export default Register;
