import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../style/users/styleUser';
import {
  Text,
  View,
  Image,
  ToastAndroid,
  Button,
  StatusBar,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RightHome from './rightHome';
import Slick from 'react-native-slick';
import {signOut} from 'firebase/auth';
import {authentication} from '../../../firebase/firebase-config';
import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dataPopUp} from './dataBottomPopUp';
import {dataPopUpCreate} from './dataBottomPopUp';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../../App';
import * as Keychain from 'react-native-keychain';
const User = ({navigation}) => {
  const {setUserRole, setIdToken, userRole, removeValue} =
    useContext(ThemeContext);
  const bottomSheetModalRef = useRef(null);
  const bottomCreateModalRef = useRef(null);
  const bottomChangeAccModalRef = useRef(null);
  const [logOut, setlogOut] = useState(false);
  const insets = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState);
    await AsyncStorage.setItem('mode', isEnabled ? 'white' : 'black');
    // await AsyncStorage.getItem('mode').then(value => {
    //   console.log('value', value);
    // });
  };

  const snapPoints = ['80%'];
  const snapPointscreate = ['70%'];
  const snapPointsChangeAcc = ['40%'];
  const hanlePresentModel = () => {
    bottomSheetModalRef.current?.present();
  };
  const hanleCreateModel = () => {
    bottomCreateModalRef.current?.present();
  };
  const hanleChangeAcc = () => {
    bottomChangeAccModalRef.current?.present();
  };
  const handleEdit = () => {
    if (userRole === 'admin') {
      navigation.navigate('EditUser');
    } else {
      ToastAndroid.show('No permision !', ToastAndroid.SHORT);
    }
  };
  const handleLogOut = () => {
    setlogOut(true);

    signOut(authentication)
      .then(async () => {
        ToastAndroid.show('Logut success !', ToastAndroid.SHORT);
        setUserRole('');
        setIdToken('');
        await removeValue();
        navigation.navigate('Authentication');
      })
      .catch(error => {});
  };
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Slick showsButtons={false} showsPagination={false} loop={false}>
          <GestureHandlerRootView style={{flex: 1}}>
            <View
              style={{
                backgroundColor: 'white',
                height: '100%',
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              }}>
              <View style={styles.userHeader}>
                <View style={styles.userHeaderLeft}>
                  <Text
                    style={styles.textUser}
                    onPress={() => navigation.navigate('Home')}>
                    user123
                  </Text>
                  <Feather
                    onPress={hanleChangeAcc}
                    style={styles.selectUser}
                    name={'chevron-down'}
                  />
                </View>

                <View style={styles.userIconHeader}>
                  <FontAwesome
                    style={styles.iconFirst}
                    name={'plus-square-o'}
                    size={25}
                    onPress={hanleCreateModel}
                  />
                  <Feather
                    onPress={hanlePresentModel}
                    style={styles.colorText}
                    name={'menu'}
                    size={25}
                  />
                </View>
              </View>
              <View style={styles.userContent}>
                <View>
                  <Image
                    style={styles.userContentImg}
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
                    }}
                  />
                  <Text style={styles.userText}>Rosé</Text>
                </View>
                <View style={styles.userTextCenter}>
                  <Text style={styles.userText}>123</Text>
                  <Text style={styles.userTexts}>Bài Viết</Text>
                </View>
                <View style={styles.userTextCenter}>
                  <Text style={styles.userText}>100K+</Text>
                  <Text style={styles.userTexts}>Người theo dõi</Text>
                </View>
                <View style={styles.userTextCenter}>
                  <Text style={styles.userText}>2</Text>
                  <Text style={styles.userTexts}>Đang theo dõi</Text>
                </View>
              </View>
              <View style={styles.userButton}>
                <View style={styles.userButtonItem} onTouchStart={handleEdit}>
                  <Text style={styles.userText}>Chỉnh sửa trang cá nhân</Text>
                </View>
                <View
                  onTouchStart={() => navigation.navigate('Map')}
                  style={styles.userButtonItem}>
                  <Text style={styles.userText}>Chia sẻ trang cá nhân</Text>
                </View>
              </View>
              <View style={styles.mode}>
                <Text style={styles.textMode}>Sáng/Tối</Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
            {/* Bottom modal button Menu */}
            <BottomSheetModalProvider>
              <View>
                <StatusBar style="auto" />
                <BottomSheetModal
                  ref={bottomSheetModalRef}
                  index={0}
                  snapPoints={snapPoints}
                  backgroundStyle={{borderRadius: 20}}>
                  <View style={styles.popupItem}>
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
                </BottomSheetModal>
              </View>
            </BottomSheetModalProvider>
            {/*  */}
            {/* Bottom modal button Add */}
            <BottomSheetModalProvider>
              <View>
                <StatusBar style="auto" />
                <BottomSheetModal
                  enablePanDownToClose={true}
                  ref={bottomCreateModalRef}
                  index={0}
                  snapPoints={snapPointscreate}
                  backgroundStyle={{borderRadius: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      borderBottomColor: '#E8EAED',
                      borderBottomWidth: 0.6,
                      paddingBottom: 20,
                    }}>
                    Tạo
                  </Text>
                  <View style={styles.popupItem}>
                    {dataPopUpCreate.map((item, index) => (
                      <View style={styles.itembottoms} key={index}>
                        <MaterialCommunityIcons
                          style={{color: 'black'}}
                          name={`${item.icon}`}
                          size={28}
                        />
                        <Text style={styles.textItems}>{item.text}</Text>
                      </View>
                    ))}
                  </View>
                </BottomSheetModal>
              </View>
            </BottomSheetModalProvider>
            {/* Bottom modal Change ACC */}
            <BottomSheetModalProvider>
              <View>
                <StatusBar style="auto" />
                <BottomSheetModal
                  enablePanDownToClose={true}
                  ref={bottomChangeAccModalRef}
                  index={0}
                  snapPoints={snapPointsChangeAcc}
                  backgroundStyle={{borderRadius: 20}}>
                  <View style={styles.popupItem}>
                    <View style={styles.itembottomUSerFirst}>
                      <View style={styles.accLeft}>
                        <Image
                          style={styles.imgPopUp}
                          source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
                          }}
                        />
                        <Text style={styles.textItemsuser}>user123</Text>
                      </View>
                      <View style={styles.radio}>
                        <View style={styles.radioChild}></View>
                      </View>
                    </View>
                    <View style={styles.itembottomUSer}>
                      <View></View>
                      <AntDesign
                        style={styles.iconAddAcc}
                        name={'pluscircleo'}
                        size={49}
                      />
                      <Text style={styles.textItemsuser}>Thêm tài khoản</Text>
                    </View>
                    <View
                      style={[
                        styles.itembottomUSer,
                        {backgroundColor: !logOut ? '' : '#DEE1E6'},
                      ]}
                      onTouchStart={handleLogOut}>
                      <View></View>
                      <AntDesign
                        style={styles.iconAddAcc}
                        name={'logout'}
                        size={49}
                      />
                      <Text style={styles.textItemsuser}>Đăng xuất</Text>
                    </View>
                  </View>
                </BottomSheetModal>
              </View>
            </BottomSheetModalProvider>
            {/*  */}
          </GestureHandlerRootView>

          <View>
            <RightHome navigation={navigation} />
          </View>
        </Slick>
      </SafeAreaView>
    </>
  );
};
export default User;
