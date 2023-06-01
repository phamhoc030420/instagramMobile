import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../../style/home/styleComment';
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import TabBar from '../tab/tabBar';
const Stack = createNativeStackNavigator();
const Comment = ({navigation: {goBack}}) => {
  const windowWidth = Dimensions.get('window').width;
  const [text, onChangeText] = useState('');
  const insets = useSafeAreaInsets();
  const [data, setData] = useState([
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
  ]);
  const handleAddComment = () => {
    const comment = {
      id: Math.floor(Math.random() * 100),
      image: require('../../assets/image/post6.jpg'),
      name: text,
    };
    setData([comment, ...data]);
    onChangeText('');
  };
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
          <Text style={styles.textLable1}>Bình luận</Text>
        </View>
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
          <Image
            style={styles.imgcomment}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
            }}
          />
          <TextInput
            onChangeText={onChangeText}
            value={text}
            style={styles.textComment}
            placeholder="Thêm bình luận..."
            placeholderTextColor={'#8A8B8D'}
          />
          <Text onPress={handleAddComment} style={{color: 'blue'}}>
            Đăng
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Comment;
