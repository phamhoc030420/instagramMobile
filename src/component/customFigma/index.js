import React, {useState} from 'react';
import styles from './style';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useTranslation} from 'react-i18next';
const Viu = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;
  const locationIcon = (windowWidth - 64 - 263) / 2 + 5;
  const viewUp = (windowWidth - 337) / 2 + 50;
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.imageTiTle}
                source={require('./assest/title.png')}
              />
              <Text style={styles.textHeader}>Viu</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                onPress={() => {
                  i18n.changeLanguage('vi');
                }}
                style={{color: '#E45C81'}}>
                VI /{' '}
              </Text>
              <Text
                onPress={() => {
                  i18n.changeLanguage('en');
                }}
                style={{color: '#E45C81'}}>
                EN
              </Text>
            </View>
          </View>
          <View style={styles.modal}>
            <Text style={styles.modalText}>{t('title')}</Text>

            <Ionicons
              style={[styles.iconInput1, {left: locationIcon}]}
              name={'md-location-outline'}
              size={20}
            />
            <TextInput
              placeholder={t('localtion')}
              style={styles.inputViu}></TextInput>

            <Fontisto
              style={[styles.iconInput2, {left: locationIcon}]}
              name={'date'}
              size={20}
            />
            <TextInput placeholder={t('time')} style={styles.inputViu} />
            <Button
              onPress={() => navigation.navigate('Visit')}
              containerStyle={{
                marginTop: 16,
                borderRadius: 12,
                width: 263,
              }}
              title={t('search')}
            />
          </View>
          <View style={styles.imageBottom}>
            <Image
              style={styles.imageViu}
              source={require('./assest/imageViu.png')}
            />
            <View style={[styles.upModal, {left: viewUp}]}>
              <Text style={styles.textup}>{t('content')}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Viu;
