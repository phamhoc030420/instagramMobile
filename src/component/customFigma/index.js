import React, {useState} from 'react';
import styles from './style';
import {View, Text, Image, StatusBar, TextInput} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Slider, Icon, AirbnbRating, Button} from 'react-native-elements';
import {ListItem, SpeedDial} from '@rneui/themed';
import TabBar from '../tab/tabBar';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SelectDropdown from 'react-native-select-dropdown';
import {Input} from '@rneui/themed';
const Viu = ({navigation}) => {
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
          backgroundColor: 'white',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#FCE5EB" />
        <View style={styles.customFigma}>
          <View style={styles.headerViu}>
            <Image
              style={styles.imageTiTle}
              source={require('./assest/title.png')}
            />
            <Text style={styles.textHeader}>Viu</Text>
          </View>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Bạn dự định đi đâu?</Text>
            <Ionicons
              style={styles.iconInput1}
              name={'md-location-outline'}
              size={20}
            />

            <TextInput placeholder="Địa điểm" style={styles.inputViu} />

            <Fontisto style={styles.iconInput2} name={'date'} size={20} />
            <TextInput placeholder="Thời gian" style={styles.inputViu} />
            <Button
              onPress={() => navigation.navigate('Visit')}
              containerStyle={{
                marginTop: 16,
                borderRadius: 12,
                width: 263,
              }}
              title="Tìm kiếm"
            />
          </View>
          <View style={styles.imageBottom}>
            <Image
              style={styles.imageViu}
              source={require('./assest/imageViu.png')}
            />
            <View style={styles.upModal}>
              <Text style={styles.textup}>
                Kết nối trải nghiệm tìm bạn đồng hành{' '}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Viu;
