import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/styleSearch';
import {Text, View, Image, Button, TextInput, Dimensions} from 'react-native';
import SearchImage from './searchImage';
import SearchOnPress from './searchOnpress';
const Search = ({navigation}) => {
  const [changeContent, setChangeContent] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.containerSearch}>
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
  );
};
export default Search;