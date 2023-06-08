import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../../style/search/styleImage';
import FastImage from 'react-native-fast-image';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
const SearchImage = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const data = [
    {
      id: 1,
      images: [
        require('../../assets/image/post1.jpg'),
        require('../../assets/image/post2.jpg'),
        require('../../assets/image/post3.jpg'),
        require('../../assets/image/post4.jpg'),
        require('../../assets/image/post5.jpg'),
        require('../../assets/image/post6.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../assets/image/post7.jpg'),
        require('../../assets/image/post8.jpg'),
        require('../../assets/image/post9.jpg'),
        require('../../assets/image/post10.jpg'),
        require('../../assets/image/post14.jpg'),
      ],
    },
    {
      id: 3,
      images: [
        require('../../assets/image/post15.jpg'),
        require('../../assets/image/post13.jpg'),
        require('../../assets/image/post12.jpg'),
      ],
    },
  ];
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        {data.map((item, index) => (
          <>
            {item.id === 1 ? (
              <View key={item.id + 100} style={styles.contentImg1}>
                {item.images.map((datas, i) => {
                  return (
                    <TouchableOpacity key={i + 5} style={styles.touch1}>
                      <FastImage
                        style={[styles.img1, {width: windowWidth / 3 - 4}]}
                        source={datas}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {item.id === 2 ? (
              <>
                <View key={item.id + 100} style={styles.contentImg2}>
                  <View
                    style={[
                      styles.contentImgLeft,
                      {width: (windowWidth * 2) / 3},
                    ]}>
                    {item.images.slice(0, 4).map((datas, i) => {
                      return (
                        <TouchableOpacity key={i + 15} style={styles.touch2}>
                          <FastImage
                            style={[styles.img2, {width: windowWidth / 3 - 4}]}
                            source={datas}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <View
                    style={[styles.imageLast, {width: (windowWidth * 1) / 3}]}>
                    <TouchableOpacity>
                      <FastImage
                        style={[styles.imgRight, {width: windowWidth / 3 - 4}]}
                        source={item.images[4]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : null}
            {item.id === 3 ? (
              <>
                <View key={item.id + 100} style={styles.contentImg3}>
                  <View style={[styles.contentImgRight3]}>
                    <TouchableOpacity>
                      <FastImage
                        style={[
                          styles.imgLeft3,
                          {width: (windowWidth * 2) / 3 - 4},
                        ]}
                        source={item.images[0]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.imageRinght3,
                      {width: (windowWidth * 1) / 3},
                    ]}>
                    {item.images.slice(1, 3).map((datas, i) => {
                      return (
                        <TouchableOpacity key={i + 25}>
                          <FastImage
                            key={i + 30}
                            style={[
                              styles.imgRight3,
                              {width: windowWidth / 3 - 4},
                            ]}
                            source={datas}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </>
            ) : null}
          </>
        ))}
        {data.map((item, index) => (
          <>
            {item.id === 1 ? (
              <View key={item.id + 100} style={styles.contentImg1}>
                {item.images.map((datas, i) => {
                  return (
                    <TouchableOpacity key={i + 5} style={styles.touch1}>
                      <FastImage
                        style={[styles.img1, {width: windowWidth / 3 - 4}]}
                        source={datas}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {item.id === 2 ? (
              <>
                <View key={item.id + 100} style={styles.contentImg2}>
                  <View
                    style={[
                      styles.contentImgLeft,
                      {width: (windowWidth * 2) / 3},
                    ]}>
                    {item.images.slice(0, 4).map((datas, i) => {
                      return (
                        <TouchableOpacity key={i + 15} style={styles.touch2}>
                          <FastImage
                            style={[styles.img2, {width: windowWidth / 3 - 4}]}
                            source={datas}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <View
                    style={[styles.imageLast, {width: (windowWidth * 1) / 3}]}>
                    <TouchableOpacity>
                      <FastImage
                        style={[styles.imgRight, {width: windowWidth / 3 - 4}]}
                        source={item.images[4]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : null}
            {item.id === 3 ? (
              <>
                <View key={item.id + 100} style={styles.contentImg3}>
                  <View style={[styles.contentImgRight3]}>
                    <TouchableOpacity>
                      <FastImage
                        style={[
                          styles.imgLeft3,
                          {width: (windowWidth * 2) / 3 - 4},
                        ]}
                        source={item.images[0]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.imageRinght3,
                      {width: (windowWidth * 1) / 3},
                    ]}>
                    {item.images.slice(1, 3).map((datas, i) => {
                      return (
                        <TouchableOpacity key={i + 25}>
                          <FastImage
                            key={i + 30}
                            style={[
                              styles.imgRight3,
                              {width: windowWidth / 3 - 4},
                            ]}
                            source={datas}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </>
            ) : null}
          </>
        ))}
        {data.map((item, index) => (
          <>
            {item.id === 1 ? (
              <View key={item.id + 100} style={styles.contentImg1}>
                {item.images.map((datas, i) => {
                  return (
                    <TouchableOpacity key={i + 5} style={styles.touch1}>
                      <FastImage
                        style={[styles.img1, {width: windowWidth / 3 - 4}]}
                        source={datas}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {item.id === 2 ? (
              <>
                <View key={item.id + 100} style={styles.contentImg2}>
                  <View
                    style={[
                      styles.contentImgLeft,
                      {width: (windowWidth * 2) / 3},
                    ]}>
                    {item.images.slice(0, 4).map((datas, i) => {
                      return (
                        <TouchableOpacity key={i + 15} style={styles.touch2}>
                          <FastImage
                            style={[styles.img2, {width: windowWidth / 3 - 4}]}
                            source={datas}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <View
                    style={[styles.imageLast, {width: (windowWidth * 1) / 3}]}>
                    <TouchableOpacity>
                      <FastImage
                        style={[styles.imgRight, {width: windowWidth / 3 - 4}]}
                        source={item.images[4]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : null}
            {item.id === 3 ? (
              <>
                <View key={item.id + 100} style={styles.contentImg3}>
                  <View style={[styles.contentImgRight3]}>
                    <TouchableOpacity>
                      <FastImage
                        style={[
                          styles.imgLeft3,
                          {width: (windowWidth * 2) / 3 - 4},
                        ]}
                        source={item.images[0]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      styles.imageRinght3,
                      {width: (windowWidth * 1) / 3},
                    ]}>
                    {item.images.slice(1, 3).map((datas, i) => {
                      return (
                        <TouchableOpacity key={i + 25}>
                          <FastImage
                            key={i + 30}
                            style={[
                              styles.imgRight3,
                              {width: windowWidth / 3 - 4},
                            ]}
                            source={datas}
                            resizeMode={FastImage.resizeMode.cover}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </>
            ) : null}
          </>
        ))}
      </View>
    </ScrollView>
  );
};
export default SearchImage;
