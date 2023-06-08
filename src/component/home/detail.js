import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../style/home/styleDetail';
import {View, Text, Image, StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import TabBar from '../tab/tabBar';
const Stack = createNativeStackNavigator();
const Detail = ({route, navigation: {goBack}}) => {
  const {url, title, albumId, thumbnailUrl} = route.params;
  const insets = useSafeAreaInsets();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={[
            styles.detailContainer,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
          ]}>
          <View style={styles.backDetail}>
            <Ionicons
              style={{color: 'black'}}
              name={'arrow-back'}
              size={30}
              onPress={() => goBack()}
            />
            <Text style={styles.detailHome}>Home</Text>
          </View>
          <View style={styles.detailHeader}>
            <Image
              style={styles.imageAvarta}
              source={{
                uri: url,
              }}
            />
            <Text>{albumId}</Text>
          </View>
          <Image
            style={styles.imageMainAvarta}
            source={{
              uri: thumbnailUrl,
            }}
          />
          <Text style={styles.tagurl}>Bình Luận </Text>
          <Text style={styles.comment}>{title}</Text>
          <View style={styles.tabBar}>
            <TabBar active={'home'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Detail;
