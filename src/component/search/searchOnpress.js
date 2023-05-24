import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/search/styleSearch';
import {Text, View, Image, Button, TextInput} from 'react-native';
const SearchOnPress = ({navigation}) => {
  const data = [
    {
      id: 1,
      image: require('../../assets/image/post1.jpg'),
      tk: '_hello.miniii_',
      name: 'Trần Lê Hà My',
    },
    {
      id: 2,
      image: require('../../assets/image/post10.jpg'),
      tk: 'abcd_xyz',
      name: 'Trần Huyền Diệp',
    },
    {
      id: 3,
      image: require('../../assets/image/post6.jpg'),
      tk: 'Kitty_sss',
      name: 'Ly Ly',
    },
  ];
  return (
    <View style={styles.containerSearchClick}>
      <View style={styles.headerLable}>
        <Text style={styles.textLable1}>Gần đây</Text>
        <Text style={styles.textLable2}>Xem tất cả</Text>
      </View>
      <View style={styles.currentSearch}>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.itemSearch}>
              <View style={styles.leftSearch}>
                <Image style={styles.imageSearch} source={item.image} />
                <View style={styles.textSearh}>
                  <Text style={styles.textSearh1}>{item.tk}</Text>
                  <Text>{item.name}</Text>
                </View>
              </View>
              <Feather style={styles.cancel} name={'x'} />
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default SearchOnPress;
