import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../style/search/styleSearch';
import {Text, View, Image, Button, TextInput, Dimensions} from 'react-native';
import SearchOnPress from './searchOnpress';
import SearchImage from './searchImage';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = ({navigation}) => {
  const [changeContent, setChangeContent] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const insets = useSafeAreaInsets();
  const kq = async () => {
    await AsyncStorage.getItem('mode').then(value => {
      console.log('value', value);
    });
  };
  kq();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          styles.containerSearch,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        <View style={changeContent ? styles.searchBack : {}}>
          <AntDesign
            style={[
              styles.colorIcon,
              changeContent ? styles.SearchIconAffter : styles.SearchIcon,
            ]}
            name={'search1'}
            size={20}
          />
          {changeContent ? (
            <Ionicons
              style={styles.colorIconBack}
              name={'arrow-back'}
              size={25}
              onPress={() => setChangeContent(false)}
            />
          ) : null}
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Tìm Kiếm"
            placeholderTextColor="#8f8787"
            autoCapitalize="none"
            style={
              changeContent
                ? [styles.searchInputAffter, {width: windowWidth - 60}]
                : styles.searchInput
            }
            onPressIn={() => setChangeContent(true)}></TextInput>
        </View>
        {changeContent ? <SearchOnPress /> : <SearchImage />}
      </View>
    </SafeAreaView>
  );
};
export default Search;
