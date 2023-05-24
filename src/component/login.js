import React, {useEffect, useState} from 'react';
import styles from '../style/styleLogin';
import {Text, View, TextInput, ToastAndroid} from 'react-native';
import {authentication} from '../../firebase/firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const handleLogIn = () => {
    if (!email === true || !passWord === true) {
      ToastAndroid.show('Please enter !', ToastAndroid.SHORT);
      return;
    }
    signInWithEmailAndPassword(authentication, email, passWord)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        ToastAndroid.show('Login success !', ToastAndroid.SHORT);
        setEmail('');
        setPassWord('');
        navigation.navigate('MainRoute');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEmail('');
        setPassWord('');
        ToastAndroid.show('Wrong account or password !', ToastAndroid.SHORT);
      });
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginSignIn}>Sign In </Text>
      <TextInput
        value={email}
        onChangeText={e => setEmail(e)}
        style={styles.loginText1}
        placeholder="Email"
        placeholderTextColor={'white'}></TextInput>
      <TextInput
        secureTextEntry={true}
        value={passWord}
        onChangeText={e => setPassWord(e)}
        style={styles.loginText1}
        placeholder="Passsword"
        placeholderTextColor={'white'}></TextInput>
      <View onTouchStart={handleLogIn} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.cant}>Can't Login? </Text>
        <Text
          style={styles.forgot}
          onPress={() => navigation.navigate('register')}>
          Register Account{' '}
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
  );
};
export default Login;
