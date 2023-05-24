import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import styles from '../style/style';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import Slick from 'react-native-slick';
import RightHome from './rightHome';
const Instagram = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  useEffect(() => {
    fetch('https://64677693ba7110b663b98c03.mockapi.io/api/Instagram/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  const handleHeart = () => {};
  const handleComment = () => {
    setShowModal(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.nameHeader}>Instagram</Text>
        </View>
        <View style={styles.headerIcon}>
          <FontAwesome style={styles.add} name={'heart-o'} size={25} />
          <AntDesign style={styles.add} name={'search1'} size={25} />
          <Feather style={styles.add} name={'send'} size={25} />
        </View>
      </View>
      <View style={styles.banner}>
        <SafeAreaView>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <>
                  <View style={styles.homeBanner}>
                    <View style={styles.itemBanner}>
                      <Image
                        style={styles.imageContent}
                        source={{
                          uri: item.avatar,
                        }}
                      />
                    </View>
                    <Text style={styles.nameBanner}>{item.name}</Text>
                  </View>
                </>
              );
            }}
          />
        </SafeAreaView>
      </View>
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
              <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <>
                      <>
                        <View style={styles.contentTotal}>
                          <View style={styles.contentTitle}>
                            <Image
                              style={styles.imageContents}
                              source={{
                                uri: item.avatar,
                              }}
                            />
                            <Text style={styles.titleContent}>
                              {item.fullName}
                            </Text>
                          </View>
                          <Text style={styles.dot}>...</Text>
                        </View>
                        <Image
                          style={styles.image}
                          source={{
                            uri: item.thumbnailUrl,
                          }}
                        />
                        <View style={styles.totalImg}>
                          <View style={styles.iconFooter}>
                            <FontAwesome
                              onPress={handleHeart}
                              style={styles.add}
                              name={'heart-o'}
                              size={20}
                            />
                            <FontAwesome
                              style={styles.add}
                              name={'comment-o'}
                              size={20}
                              onPress={handleComment}
                            />
                            <Feather
                              style={styles.add}
                              name={'send'}
                              size={20}
                            />
                          </View>
                          <FontAwesome
                            style={styles.iconFoters}
                            name={'bookmark-o'}
                          />
                        </View>
                        <View style={{marginHorizontal: 10, marginTop: 20}}>
                          <Text style={{color: 'black'}}>100 lượt thích</Text>
                          <Text>{item.comment}</Text>
                          <Text>Xem tất cả bình luận</Text>
                        </View>
                        <Text style={styles.like}>Like and Share</Text>
                      </>
                    </>
                  );
                }}
              />
            </SafeAreaView>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Instagram;
