import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../style/home/styleNotify';
import {View, Text, Image, StatusBar, FlatList, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const TabBar = ({active}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const focused = false;
  const windowWidth = Dimensions.get('window').width;
  let home,
    search,
    camera,
    video,
    user = false;
  switch (active) {
    case 'home':
      home = true;
      break;

    case 'search':
      search = true;
      break;

    case 'camera':
      camera = true;
      break;

    case 'video':
      video = true;
      break;

    case 'user':
      user = true;
      break;
    default:
      break;
  }

  return (
    <>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          backgroundColor: '#ffff',
          width: windowWidth,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Ionicons
          name={home ? 'home' : 'home-outline'}
          size={30}
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
        <Ionicons
          name={search ? 'search' : 'search-outline'}
          size={30}
          color="black"
          onPress={() => navigation.navigate('Search')}
        />
        <AntDesign
          name={camera ? 'plussquare' : 'plussquareo'}
          size={30}
          color="black"
          onPress={() => navigation.navigate('Camera')}
        />
        <MaterialCommunityIcons
          size={30}
          color="black"
          name={video ? 'movie' : 'movie-outline'}
          onPress={() => navigation.navigate('Video')}
        />
        <View onTouchStart={() => navigation.navigate('User')}>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              borderWidth: user ? 1 : null,
              borderColor: user ? 'black' : null,
            }}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
            }}
          />
        </View>
      </View>
    </>
  );
};
export default TabBar;
