import React, {useEffect, useState, useContext, lazy, useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../style/home/style';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {signOut} from 'firebase/auth';
import {authentication} from '../../../firebase/firebase-config';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
  Modal,
  TextInput,
  Pressable,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  Animated,
  ToastAndroid,
} from 'react-native';
import Detail from './detail';
import {ThemeContext} from '../../../App';
import LocalAuthentication from 'rn-local-authentication';
const Instagram = ({route, navigation}) => {
  const result = route.params;
  const [isloading, setIsLoading] = useState(false);
  const insets = useSafeAreaInsets();
  //refresh
  const [refresh, setRefresh] = useState(false);

  //load more
  const [flag, setFlag] = useState(1);
  const [first, setFirst] = useState(false);
  const [dataAdd, setDataAdd] = useState([]);
  const [hide, setHide] = useState(false);
  const [enableScrollViewScroll, setenableScrollViewScroll] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  const [active, setActive] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedComment, setSelectedComment] = useState([]);
  const {datas, token, removeValue, setUserRole, setIdToken} =
    useContext(ThemeContext);
  useEffect(() => {
    if (result !== undefined) {
      const newData = [result, ...dataAdd];
      setDataAdd(newData);
    }
  }, [result]);
  const handleHeart = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(
        selectedItems.filter(selectedItem => selectedItem !== itemId),
      );
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  const handleComment = () => {
    setShowModal(true);
  };
  useEffect(() => {
    console.log('call API thu', flag);
    setIsLoading(true);
    const dataScroll = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/albums/${flag}/photos`)
        .then(response => response.json())
        .then(json => {
          setDataAdd(dataAdd.concat(json.slice(0, 10)));
          setIsLoading(false);
          setFirst(true);
          setRefresh(false);
        });
    };
    dataScroll();
  }, [flag]);
  const handleRefreshData = () => {
    setRefresh(true);
    const flagRefresh = Math.floor(Math.random() * 11) + 10;
    flag !== flagRefresh ? setDataAdd([]) : setRefresh(false);
    setFlag(flagRefresh);
  };
  const [fadeAnim] = useState(new Animated.Value(1)); // Giá trị ban đầu là 1 (đầy đủ hiển thị)
  const flatListRef = useRef(null);
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0, // Đặt giá trị mới là 0 (ẩn dần)
      duration: 10000, // Thời gian để hoàn thành hiệu ứng (1000ms = 1 giây)
      useNativeDriver: true, // Sử dụng native driver để tối ưu hiệu năng
    }).start();
  };
  const componentHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.menuHome}>
          <Image
            style={styles.nameHeader}
            source={require('../../assets/image/instagramLogo.png')}
          />
          <Menu>
            <MenuTrigger>
              <Feather size={25} name={'chevron-down'} />
            </MenuTrigger>
            <MenuOptions style={styles.menuAlert}>
              <MenuOption style={styles.menutext}>
                <Text style={styles.text1}>Đang theo dõi</Text>
                <Feather style={styles.text2} name={'users'} size={25} />
              </MenuOption>
              <MenuOption
                style={styles.menutext}
                onSelect={() => alert(`Save`)}>
                <Text style={styles.text1}>Yêu thích</Text>
                <Feather style={styles.text2} name={'star'} size={25} />
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

        <View style={styles.headerIcon}>
          <FontAwesome
            onPress={() => navigation.navigate('Notify')}
            style={styles.add}
            name={'heart-o'}
            size={25}
          />
          <Feather style={styles.add} name={'send'} size={25} />
        </View>
      </View>
    );
  };
  const renderBanner = () => {
    return (
      <>
        {componentHeader()}
        <View style={styles.banner}>
          <SafeAreaView>
            <ScrollView
              nestedScrollEnabled={true}
              scrollEnabled={enableScrollViewScroll}>
              <FlatList
                keyExtractor={item => {
                  return item.id;
                }}
                onTouchStart={() => {
                  setenableScrollViewScroll(false);
                }}
                onMomentumScrollEnd={() => {
                  setenableScrollViewScroll(true);
                }}
                data={datas}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}
                nestedScrollEnabled // Cho phép cuộn dọc trong `FlatList`
                overScrollMode="never" // Ẩn hiệu ứng cuộn qua đỉnh/bottom
                renderItem={({item}) => {
                  return (
                    <>
                      <View style={styles.homeBanner}>
                        <View style={styles.itemBanner}>
                          <FastImage
                            style={styles.imageContent}
                            source={{
                              uri: item.url,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </View>
                        <Text style={styles.nameBanner}>{item.id}</Text>
                      </View>
                    </>
                  );
                }}
              />
            </ScrollView>
          </SafeAreaView>
        </View>
      </>
    );
  };
  const renderFooter = item => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <View style={styles.totalImg}>
        <View style={styles.iconFooter}>
          <FontAwesome
            onPress={() => handleHeart(item.id)}
            style={[styles.add, {color: isSelected ? 'red' : 'black'}]}
            name={isSelected ? 'heart' : 'heart-o'}
            size={25}
          />
          <FontAwesome
            style={styles.add}
            name={'comment-o'}
            size={25}
            onPress={handleComment}
          />
          <Feather style={styles.add} name={'send'} size={25} />
        </View>
        <FontAwesome style={styles.iconFoters} name={'bookmark-o'} />
      </View>
    );
  };
  return (
    <>
      {Object.keys(dataAdd).length !== 0 ? (
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <View
            style={[
              styles.container,
              {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              },
            ]}>
            <View style={styles.content}>
              {/* alert modal comment */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setShowModal(!showModal);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Your comment </Text>
                    <SafeAreaView>
                      <TextInput
                        value={comment}
                        onChangeText={setComment}
                        style={styles.input}
                      />
                    </SafeAreaView>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setShowModal(!showModal)}>
                      <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <SafeAreaView>
                <View style={styles.scrollView}>
                  <SafeAreaView>
                    {first && (
                      <FlatList
                        ref={flatListRef}
                        keyExtractor={item => item.id}
                        scrollEventThrottle={16}
                        //refresh data
                        onRefresh={handleRefreshData}
                        refreshing={refresh}
                        //loadm mode
                        onEndReached={() =>
                          setFlag(!isloading ? flag + 1 : flag)
                        }
                        onEndReachedThreshold={0}
                        ListFooterComponent={
                          <>
                            {isloading && !refresh ? (
                              <View
                                style={{
                                  marginTop: 10,
                                  alignItems: 'center',
                                  marginBottom: 5,
                                }}>
                                <ActivityIndicator size="large" color="grey" />
                              </View>
                            ) : null}
                          </>
                        }
                        data={dataAdd}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => {
                          return (
                            <>
                              {index === 0 ? renderBanner() : null}
                              {active && <Detail />}
                              <View style={styles.contentTotal}>
                                <View style={styles.contentTitle}>
                                  <FastImage
                                    style={styles.imageContents}
                                    source={{
                                      uri: item.url,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                  />

                                  <Text style={styles.titleContent}>
                                    {item.albumId}
                                  </Text>
                                </View>
                                <Text style={styles.dot}>...</Text>
                              </View>
                              <TouchableHighlight
                                onPress={() =>
                                  navigation.navigate('Detail', item)
                                }>
                                <Image
                                  style={styles.image}
                                  source={{
                                    uri: item.thumbnailUrl,
                                  }}
                                />
                              </TouchableHighlight>
                              {renderFooter(item)}
                              <View
                                style={{marginHorizontal: 10, marginTop: 25}}>
                                <Text style={{color: 'black'}}>
                                  100 lượt thích
                                </Text>
                                <Text
                                  numberOfLines={
                                    selectedComment.includes(item.id) ? 10 : 1
                                  }>
                                  {item.title}
                                </Text>
                                {!selectedComment.includes(item.id) ? (
                                  <Text
                                    onPress={() =>
                                      setSelectedComment([
                                        ...selectedComment,
                                        item.id,
                                      ])
                                    }>
                                    Xem thêm
                                  </Text>
                                ) : null}
                                <Text
                                  onPress={() =>
                                    navigation.navigate('Comment')
                                  }>
                                  Xem tất cả bình luận
                                </Text>
                              </View>
                              <Text style={styles.like}>Like and Share</Text>
                            </>
                          );
                        }}
                      />
                    )}
                  </SafeAreaView>
                </View>
              </SafeAreaView>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#ed6c1d"
        />
      )}
    </>
  );
};

export default Instagram;
