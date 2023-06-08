import React, {useEffect, useState} from 'react';
import styles from '../../style/camera/styleCamera';
import {
  Text,
  View,
  Image,
  PermissionsAndroid,
  Alert,
  Linking,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Camera = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraPhoto, serCameraPhoto] = useState();
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const handleOpenCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      if (result.assets !== undefined) {
        serCameraPhoto(result.assets[0].uri);
      }
      return;
    }
    if (granted === PermissionsAndroid.RESULTS.DENIED) {
      console.log('camera denied', granted);
    } else {
      showPermissionDeniedAlert();
    }
  };
  const handleOpenImage = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const results = await launchImageLibrary(options);
      if (results.assets !== undefined) {
        serCameraPhoto(results.assets[0].uri);
      }

      return;
    }
    if (granted === PermissionsAndroid.RESULTS.DENIED) {
      console.log('photo app denied', granted);
    } else {
      showPermissionDeniedAlert();
    }
  };
  const showPermissionDeniedAlert = () => {
    Alert.alert(
      'Permission Denied',
      'Open Settings and allow.',
      [
        {
          text: 'Open Settings',
          onPress: () => openAppSettings(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };
  const openAppSettings = () => {
    try {
      if (Platform.OS === 'ios') {
        Linking.openURL('app-settings:');
      } else {
        Linking.openSettings();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = () => {
    if (cameraPhoto === undefined) {
      Toast.show({
        type: 'info',
        text1: 'Title',
        text2: 'Choose Image',
        visibilityTime: 2000,
        autoHide: true,
      });
      return;
    }
    navigation.navigate('Upload', cameraPhoto);
    serCameraPhoto(undefined);
  };
  return (
    <View
      style={[
        styles.cameraContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <View style={styles.cameraHeader}>
        <View style={styles.cameraFirst}>
          <Feather
            onPress={() => navigation.navigate('Home')}
            style={styles.cameraTextHeaderX}
            name={'x'}
          />
          <Text style={styles.cameraTextHeader}>Bài viết mới</Text>
        </View>
        <AntDesign
          style={{color: '#47B0D5'}}
          name={'arrowright'}
          size={28}
          onPress={handleUpload}
        />
      </View>
      {cameraPhoto === undefined ? (
        <View style={styles.cameraContent}>
          <Text style={styles.cameraContentText1}>
            Đăng ảnh từ điện thoại lên Instagram
          </Text>
          <Text style={styles.cameraContentText2}>
            Hãy đăng ảnh bạn chụp bằng điện thoại lên Instegram, ứng dụng này từ
            động lưu ảnh bạn chỉnh sửa vào thư viện....
          </Text>
          <Text style={styles.cameraContentText3} onPress={handleOpenCamera}>
            Bật
          </Text>
        </View>
      ) : (
        <Image style={styles.cameraContent} source={{uri: cameraPhoto}} />
      )}
      <View style={styles.cameraOpenImage}>
        <View style={styles.cameraOpenImageFirst}>
          <Text style={styles.cameraOpenImageText} onPress={handleOpenImage}>
            Thư viện
          </Text>
          <Menu>
            <MenuTrigger>
              <Feather style={styles.hascode} name={'chevron-down'} />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={handleOpenImage}>
                <Text style={styles.textMenu}>Thư Viện</Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`Save`)}>
                <Text style={styles.textMenu}>Khác...</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
        <View style={styles.cameraOpenImageBorder}>
          <Feather
            onPress={handleOpenCamera}
            style={styles.cameraOpenImageCam}
            name={'camera'}
          />
        </View>
      </View>
      <Toast />
    </View>
  );
};
export default Camera;
