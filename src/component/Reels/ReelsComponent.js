import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './videodata';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const ReelsComponent = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mute, setMute] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const videoRef = useRef(null);
  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };
  const onError = buffer => {
    console.log('error', buffer);
  };
  const handleChangrIndexValue = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      keyExtractor={(item, index) => index}
      onChangeIndex={handleChangrIndexValue}
      renderItem={({item, index}) => (
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            position: 'relative',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setMute(!mute);
            }}
            style={{width: '100%', height: '100%', position: 'absolute'}}>
            <Video
              videoRef={videoRef}
              onBuffer={onBuffer}
              onError={onError}
              muted={mute}
              repeat={true}
              resizeMode="cover"
              paused={false}
              source={item.video}
              style={{width: '100%', height: '100%', position: 'absolute'}}
            />
          </TouchableOpacity>
          <Ionicons
            style={{
              fontSize: mute ? 20 : 0,
              color: 'white',
              position: 'absolute',
              top: windowWidth / 1.2,
              left: windowHeight / 4.5,
              backgroundColor: 'rgba(52,52,52,0.6)',
              borderRadius: 100,
              padding: mute ? 10 : 0,
            }}
            name={'volume-mute'}
          />
          <View
            style={{
              position: 'absolute',
              width: windowWidth,
              zIndex: 1,
              bottom: 100,
              padding: 10,
            }}>
            <View>
              <TouchableOpacity style={{width: 150}}>
                <View
                  style={{
                    width: 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 100,
                      backgroundColor: 'white',
                      margin: 10,
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 100,
                      }}
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Ros%C3%A9_at_a_fan_signing_event_on_September_25%2C_2022_%28cropped%29.jpg',
                      }}
                    />
                  </View>
                  <Text style={{color: 'white', fontSize: 16}}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
                {item.description}
              </Text>
              <View style={{flexDirection: 'row', padding: 10}}>
                <Ionicons
                  style={{
                    color: 'white',
                    fontSize: 16,
                  }}
                  name={'musical-note'}
                />
                <Text style={{color: 'white'}}>Original Audio</Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 20,
                right: 10,
                alignItems: 'center',
                zIndex: 1,
              }}>
              <TouchableOpacity>
                <AntDesign
                  name="hearto"
                  style={{color: 'white', fontSize: 25, paddingVertical: 10}}
                />
                <Text style={{color: 'white', paddingVertical: 10}}>
                  {item.likes}
                </Text>
                <FontAwesome
                  name="comment-o"
                  style={{color: 'white', fontSize: 25, paddingVertical: 10}}
                />
                <Text style={{color: 'white', paddingVertical: 10}}>
                  {item.comment}
                </Text>

                <Feather
                  name="send"
                  style={{color: 'white', fontSize: 25, paddingVertical: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
};
export default ReelsComponent;
