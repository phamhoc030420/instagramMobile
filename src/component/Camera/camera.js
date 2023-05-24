import React, {useEffect, useState} from 'react';
import styles from '../../style/camera/styleCamera';
import {Text, View, Image, PermissionsAndroid} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const Camera = ({navigation}) => {
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
      serCameraPhoto(result.assets[0].uri);
    }
  };
  const handleOpenImage = async () => {
    const results = await launchImageLibrary(options);
    serCameraPhoto(results.assets[0].uri);
  };
  return (
    <View style={styles.cameraContainer}>
      <View style={styles.cameraHeader}>
        <View style={styles.cameraFirst}>
          <Feather
            onPress={() => navigation.navigate('Home')}
            style={styles.cameraTextHeaderX}
            name={'x'}
          />
          <Text style={styles.cameraTextHeader}>Bài viết mới</Text>
        </View>
        <AntDesign style={{color: '#47B0D5'}} name={'arrowright'} size={28} />
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
    </View>
  );
};
export default Camera;
