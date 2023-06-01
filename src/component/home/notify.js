import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../style/home/styleNotify';
import {View, Text, Image, StatusBar, FlatList, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import TabBar from '../tab/tabBar';
const Stack = createNativeStackNavigator();
const Notify = ({navigation: {goBack}}) => {
  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;

  const data = [
    {
      id: 1,
      image: require('../../assets/image/post1.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 2,
      image: require('../../assets/image/post10.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 3,
      image: require('../../assets/image/post6.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 4,
      image: require('../../assets/image/post1.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 5,
      image: require('../../assets/image/post10.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 6,
      image: require('../../assets/image/post6.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 7,
      image: require('../../assets/image/post1.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 8,
      image: require('../../assets/image/post10.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
    {
      id: 9,
      image: require('../../assets/image/post6.jpg'),
      name: 'Theo dõi Khánh Huyền, Nguyễn Trinh và những người khác mà bạn biết để xem ảnh và theo dõi video của họ. 2 tuần',
    },
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <View
        style={[
          styles.notify,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        <View style={styles.headernotify}>
          <Ionicons
            style={{color: 'black'}}
            name={'arrow-back'}
            size={30}
            onPress={() => goBack()}
          />
          <Text style={styles.textLable1}>Thông báo</Text>
        </View>
        <Text style={styles.textbanner}>Tháng này</Text>
        <View style={styles.currentSearch}>
          <SafeAreaView>
            <FlatList
              keyExtractor={item => {
                return item.id;
              }}
              data={data}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.itemSearch}>
                    <View style={styles.leftSearch}>
                      <Image style={styles.imageSearch} source={item.image} />
                      <View style={styles.textSearh}>
                        <Text
                          numberOfLines={3}
                          style={[
                            styles.notifyComment,
                            {width: windowWidth / 1.5 + 10},
                          ]}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </SafeAreaView>
        </View>
        <View style={styles.tabBar}>
          <TabBar active={'home'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Notify;
