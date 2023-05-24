import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../style/styleDetail';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Detail = ({route, navigation}) => {
  const {avatar, comment, fullName, thumbnailUrl} = route.params;
  return (
    <>
      <View style={styles.detailContainer}>
        <View style={styles.backDetail}>
          <Ionicons
            style={{color: 'black'}}
            name={'arrow-back'}
            size={30}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.detailHome}>Home</Text>
        </View>
        <View style={styles.detailHeader}>
          <Image
            style={styles.imageAvarta}
            source={{
              uri: avatar,
            }}
          />
          <Text>{fullName}</Text>
        </View>
        <Image
          style={styles.imageMainAvarta}
          source={{
            uri: thumbnailUrl,
          }}
        />
        <Text style={styles.tagComment}>Bình Luận </Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </>
  );
};
export default Detail;
