import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styleUser';
import {Text, View, Image, ToastAndroid} from 'react-native';
import RightHome from './rightHome';
import Slick from 'react-native-slick';
import {signOut} from 'firebase/auth';
import {authentication} from '../../firebase/firebase-config';
const User = ({navigation}) => {
  const handleLogOut = () => {
    signOut(authentication)
      .then(() => {
        ToastAndroid.show('Logut success !', ToastAndroid.SHORT);
        navigation.navigate('Authentication');
      })
      .catch(error => {});
  };
  return (
    <Slick showsButtons={false} showsPagination={false} loop={false}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.userHeader}>
          <View style={styles.userHeaderLeft}>
            <Text
              style={styles.textUser}
              onPress={() => navigation.navigate('Home')}>
              user123
            </Text>
            <Feather style={styles.selectUser} name={'chevron-down'} />
          </View>

          <View style={styles.userIconHeader}>
            <FontAwesome
              style={styles.iconFirst}
              name={'plus-square-o'}
              size={25}
            />
            <Feather style={styles.colorText} name={'menu'} size={25} />
          </View>
        </View>
        <View style={styles.userContent}>
          <View>
            <Image
              style={styles.userContentImg}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
              }}
            />
            <Text style={styles.userText}>Rosé</Text>
          </View>
          <View style={styles.userTextCenter}>
            <Text style={styles.userText}>123</Text>
            <Text style={styles.userTexts}>Bài Viết</Text>
          </View>
          <View style={styles.userTextCenter}>
            <Text style={styles.userText}>100K+</Text>
            <Text style={styles.userTexts}>Người theo dõi</Text>
          </View>
          <View style={styles.userTextCenter}>
            <Text style={styles.userText}>2</Text>
            <Text style={styles.userTexts}>Đang theo dõi</Text>
          </View>
        </View>
        <View style={styles.userButton}>
          <View style={styles.userButtonItem}>
            <Text style={styles.userText}>Chỉnh sửa trang cá nhân</Text>
          </View>
          <View style={styles.userButtonItem}>
            <Text style={styles.userText}>Chia sẻ trang cá nhân</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            onTouchStart={handleLogOut}
            style={[styles.userButtonItem, styles.logOut]}>
            <Text style={styles.userText}>Logout</Text>
          </View>
        </View>
      </View>
      <View>
        <RightHome navigation={navigation} />
      </View>
    </Slick>
  );
};
export default User;
