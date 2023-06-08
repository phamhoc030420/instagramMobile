import styles from '../../style/reels/styleVideo';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from './ReelsComponent';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Video = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          backgroundColor: 'white',
          position: 'relative',
          backgroundColor: 'black',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 1,
            padding: 10,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
            Reels
          </Text>
          <Feather
            style={{color: 'black', color: 'white'}}
            name={'camera'}
            size={25}
          />
        </View>
        <ReelsComponent />
      </View>
    </SafeAreaView>
  );
};
export default Video;
