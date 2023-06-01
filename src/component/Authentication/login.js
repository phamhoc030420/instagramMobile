import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from '../../style/authentication/styleLogin';
import {
  Text,
  View,
  TextInput,
  ToastAndroid,
  StatusBar,
  Button,
} from 'react-native';
import {authentication} from '../../../firebase/firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../../App';
const Login = ({navigation}) => {
  const {setIdToken, setUserRole, authenticate} = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const insets = useSafeAreaInsets();
  const recaptcha = useRef();
  const handleLogIn = async () => {
    // navigation.navigate('MainRoute');
    if (!email === true || !passWord === true) {
      ToastAndroid.show('Please enter !', ToastAndroid.SHORT);
      return;
    }
    signInWithEmailAndPassword(authentication, email, passWord)
      .then(userCredential => {
        // // Signed in
        const user = userCredential.user;
        user
          .getIdToken()
          .then(async idToken => {
            // console.log('ID token:', idToken);
            setIdToken(idToken);
            if (email === 'hoc@gmail.com') {
              setUserRole('admin');
            } else {
              setUserRole('user');
            }
            await authenticate(idToken);
            ToastAndroid.show('Login success !', ToastAndroid.SHORT);
            setEmail('');
            setPassWord('');
            navigation.navigate('MainRoute');
          })
          .catch(error => {
            console.log('Lỗi khi lấy ID token:', error);
          });
      })
      .catch(error => {
        setEmail('');
        setPassWord('');
        ToastAndroid.show('Wrong account or password !', ToastAndroid.SHORT);
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
        <Text style={styles.loginSignIn}>Sign In </Text>
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
    </SafeAreaView>
  );
};
export default Login;
