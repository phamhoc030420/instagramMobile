import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/styleUser';
import {Text, View, Image, Button} from 'react-native';
import RightHome from './rightHome';
import Slick from 'react-native-slick';
const User = ({navigation}) => {
  return (
    <Slick showsButtons={false} showsPagination={false} loop={false}>
      <View style={styles.containers}>
        <View style={styles.userHeader}>
          <Text
            style={styles.textUser}
            onPress={() => navigation.navigate('Home')}>
            user123
          </Text>
          <View style={styles.userIconHeader}>
            <MaterialIcons style={styles.iconFirst} name={'add'} size={30} />
            <Feather style={styles.colorText} name={'menu'} size={30} />
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
            <Text style={styles.userText}>Bài Viết</Text>
          </View>
          <View style={styles.userTextCenter}>
            <Text style={styles.userText}>100K+</Text>
            <Text style={styles.userText}>Người theo dõi</Text>
          </View>
          <View style={styles.userTextCenter}>
            <Text style={styles.userText}>2</Text>
            <Text style={styles.userText}>Đang theo dõi</Text>
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
      </View>
      <View>
        <RightHome navigation={navigation} />
      </View>
    </Slick>
  );
};
export default User;
