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
const Instagram = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  const handleSearch = name => {
    Alert.alert(`${name} Title`, 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
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
          <FontAwesome style={styles.add} name={'heart-o'} size={20} />
          <AntDesign style={styles.add} name={'search1'} size={20} />
          <Feather style={styles.add} name={'send'} size={20} />
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
                  <View style={styles.itemBanner}>
                    <Image
                      style={styles.imageContent}
                      source={{
                        uri: item.thumbnailUrl,
                      }}
                    />
                    <Text style={styles.nameBanner}>{item.id}</Text>
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
                                uri: item.thumbnailUrl,
                              }}
                            />
                            <Text style={styles.titleContent}>{item.id}</Text>
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
                          <MaterialIcons
                            style={styles.iconFoters}
                            name={'label-important-outline'}
                            size={40}
                          />
                        </View>
                        <View style={{marginHorizontal: 10, marginTop: 20}}>
                          <Text style={{color: 'black'}}>100 lượt thích</Text>
                          <Text>{item.title}</Text>
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
      <View style={styles.footer}>
        <Foundation
          onPress={() => handleSearch('Home')}
          style={styles.iconFooter}
          name={'home'}
          size={30}
        />
        <Feather
          onPress={() => handleSearch('Search')}
          style={styles.iconFooter}
          name={'search'}
          size={30}
        />
        <AntDesign
          onPress={() => handleSearch('Instagram')}
          style={styles.iconFooter}
          name={'instagram'}
          size={30}
        />
        <AntDesign
          onPress={() => handleSearch('Heart')}
          style={styles.iconFooter}
          name={'heart'}
          size={30}
        />
        <AntDesign
          onPress={() => handleSearch('User')}
          style={styles.iconFooter}
          name={'user'}
          size={30}
        />
      </View>
    </View>
  );
};

export default Instagram;
