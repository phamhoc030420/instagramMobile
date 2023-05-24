import React, {useEffect, useState} from 'react';
import styles from '../style/styleLogin';
import {Text, View, TextInput, ToastAndroid} from 'react-native';
import {authentication} from '../../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [isSign, setIsSign] = useState(false);
  const handleRegister = () => {
    createUserWithEmailAndPassword(authentication, email, passWord)
      .then(userCredential => {
        setIsSign(true);
        const user = userCredential.user;
        ToastAndroid.show('Register success !', ToastAndroid.SHORT);
        navigation.navigate('Authentication');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ToastAndroid.show('Register error !', ToastAndroid.SHORT);
      });
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginSignIn}>Register </Text>
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
  );
};
export default Register;
