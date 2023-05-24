import React, {useEffect, useState} from 'react';
import styles from '../style/styleCamera';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
      <Image style={styles.cameraImg} source={{uri: cameraPhoto}} />
      <View style={styles.cameraButton}>
        <Button
          style={styles.buttonCamera}
          title="Open Camera"
          onPress={handleOpenCamera}
        />
        <Button
          style={styles.buttonCamera}
          title="Choose Image"
          onPress={handleOpenImage}
        />
        <Button
          style={styles.buttonCamera}
          title="Close"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};
export default Camera;
