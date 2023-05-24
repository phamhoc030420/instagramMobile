import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../style/styleSearch';
import {Text, View, Image, Button, TextInput} from 'react-native';
const Search = ({navigation}) => {
  return (
    <View style={styles.containers}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Tìm Kiếm"
        placeholderTextColor="#000"
        autoCapitalize="none"
        style={styles.searchInput}></TextInput>
    </View>
  );
};
export default Search;
