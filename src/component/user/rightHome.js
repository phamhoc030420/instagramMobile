import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../style/search/styleSearch';
import {Text, View, Image, Button, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {dataPopUp} from './dataBottomPopUp';
const RightHome = ({navigation: {goBack}}) => {
  const insets = useSafeAreaInsets();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView
      style={{
        height: '100%',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View style={styles.rightHomeHeaderRight}>
          <View style={styles.rightHomeIconFirst}>
            <Ionicons
              style={styles.colorIcon}
              name={'arrow-back'}
              size={30}
              onPress={() => goBack()}
            />
            <Text style={[styles.colorIcon, styles.nameUser]}>user123</Text>
            <Feather style={styles.selectUserRight} name={'chevron-down'} />
          </View>
          <View style={styles.rightHomeIconFirst}>
            <AntDesign
              style={[styles.colorIcon, styles.Icon]}
              name={'videocamera'}
              size={25}
            />
            <FontAwesome
              onPress={toggleModal}
              style={styles.colorIcon}
              name={'pencil-square-o'}
              size={25}
            />
          </View>
        </View>
        <Modal
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          isVisible={isModalVisible}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          backdropOpacity={0.7}
          height={200}
          style={styles.modalPopup}>
          <View style={styles.popupItem}>
            <View style={styles.scrollModal}></View>
            {dataPopUp.map((item, index) => (
              <View style={styles.itembottom} key={index}>
                <Ionicons
                  style={{color: 'black'}}
                  name={`${item.icon}`}
                  size={28}
                />
                <Text style={styles.textItem}>{item.text}</Text>
              </View>
            ))}
          </View>
        </Modal>
        <View style={styles.containerSearchUser}>
          <AntDesign
            style={[styles.colorIcon, styles.SearchIcon]}
            name={'search1'}
            size={20}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Tìm Kiếm"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={styles.searchInput}></TextInput>
        </View>
        <View style={styles.rightImg}>
          <Image
            style={styles.userContentImg}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
            }}
          />
          <Text style={styles.userText}>Ghi chú của bạn</Text>
        </View>
        <View style={styles.rightText}>
          <Text style={[styles.colorIcon, styles.textRight]}>Tin nhắn</Text>
          <Text style={[styles.colorIcons, styles.textRight]}>
            Tin nhắn đang chờ
          </Text>
        </View>
        <View style={styles.rightFooter}>
          <Text style={[styles.colorIcon, styles.rightText1]}>
            Nhắn tin cho bạn bè bằng Direct
          </Text>
          <Text style={[styles.colorIcon, styles.rightText2]}>
            Nhắn tin riêng hoặc chia sẻ trực tiếp các bài viết yêu thích với bạn
            bè
          </Text>
          <Text style={styles.rightText3}>Gửi tin nhắn</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RightHome;
