import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../style/users/styleEdit';
import {View, Text, Image, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
const EditProfile = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <SafeAreaView
        style={{
          height: '100%',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
        <View style={{backgroundColor: 'white', height: '100%'}}>
          <View style={styles.headerEdit}>
            <Feather
              onPress={() => navigation.navigate('User')}
              style={{color: 'black'}}
              name={'x'}
              size={40}
            />
            <Text numberOfLines={1} style={styles.textHeader}>
              Chỉnh sửa trang cá nhân
            </Text>
            <AntDesign
              style={{color: 'black', color: '#47B0D5'}}
              name={'check'}
              size={40}
            />
          </View>
          <View style={styles.image}>
            <View style={styles.imageContent}>
              <Image
                style={styles.imageAvatar}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
                }}
              />
              <Image
                style={styles.imageAvatars}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJy1XrO8MRzr3SOA5rasXbBRpl5ovILp0DCbx8G5ejQdXpn1KqD1HHBQbCHAgPHhv7k0Y&usqp=CAU',
                }}
              />
            </View>
            <Text style={styles.editText}>Chỉnh sửa ảnh hoặc avatar</Text>
          </View>
          <View style={styles.contentEdit}>
            <View style={styles.itemEdit}>
              <Text>Tên</Text>
              <Text style={styles.textName}>Instagram</Text>
            </View>
            <View style={styles.itemEdit}>
              <Text>Tên người dùng</Text>
              <Text style={styles.textName}>user123</Text>
            </View>
            <View style={styles.itemEdit}>
              <Text style={{fontSize: 20}}>Tiểu sử</Text>
            </View>
            <View style={styles.itemEdit}>
              <Text style={styles.textName}>Thêm liên kết</Text>
            </View>
            <View style={styles.itemEdit}>
              <Text style={styles.lastText}>
                Chuyển sang tài khoản công việc
              </Text>
            </View>
            <View style={styles.itemEdit}>
              <Text style={styles.lastText}>Cài đặt thông tin cá nhân</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default EditProfile;
