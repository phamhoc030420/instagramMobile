import React, {useEffect, useState} from 'react';
import styles from '../../style/camera/styleCamera';
import {Text, View, Image, TextInput, Switch} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Upload = ({route, navigation}) => {
  const cameraPhoto = route.params;
  const insets = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = useState(false);
  const [textContent, setTextContent] = useState();
  const ig = true;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const handlePost = async () => {
    const result = {
      albumId: 1,
      id: 100 + Math.floor(Math.random() * 100),
      title: textContent,
      url: cameraPhoto,
      thumbnailUrl: cameraPhoto,
    };
    await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
      method: 'POST',
      body: JSON.stringify({
        albumId: 1,
        id: 100 + Math.floor(Math.random() * 100),
        title: textContent,
        url: cameraPhoto,
        thumbnailUrl: cameraPhoto,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => navigation.navigate('Home', result))
      .catch(erorr => console.log(erorr));
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
      <View style={styles.uploadHeader}>
        <View style={styles.uploadTitle}>
          <Feather
            style={styles.cameraTextHeaderX}
            name={'x'}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text1}>Bài viết mới</Text>
          <Text onPress={handlePost} style={styles.text2}>
            Đăng
          </Text>
        </View>
        <View style={styles.uploadContent}>
          <View style={styles.infopost}>
            <Image
              style={styles.imgupload}
              source={{
                uri: cameraPhoto,
              }}
            />
            <TextInput
              value={textContent}
              onChangeText={setTextContent}
              style={styles.input}
              placeholder="Viết chú thích..."
            />
          </View>
          <Text style={[styles.textContent, styles.textContentFirst]}>
            Gắn thẻ người khác{' '}
          </Text>
          <Text style={styles.textContent}>Thêm vị trí</Text>
          <Text style={styles.textContent}>Thêm nhạc</Text>
          <Text style={styles.textContent}>Thêm nhạc</Text>
          <View style={styles.face}>
            <Text style={styles.textContentface}>Chia sẻ lên Facebook</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
          </View>
          <Text>Chia sẻ dưới tên Róse. Đối tượng là Chỉ mình tôi</Text>
          <View style={styles.last}>
            <Text style={styles.textLast}>Cài đặt nâng cao</Text>
            <AntDesign style={{marginRight: 10}} name={'right'} size={18} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default Upload;
