import React, {useState} from 'react';
import styles from './style';
import {View, Text, Image, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from '@rneui/themed';
import {useTranslation} from 'react-i18next';
const Visit = ({navigation: {goBack}}) => {
  const insets = useSafeAreaInsets();
  const {t, i18n} = useTranslation();
  return (
    <>
      <SafeAreaView
        style={{
          height: '100%',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: 'white',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#E7EBF7" />
        <View style={styles.visitContainer}>
          <View style={styles.visitHeader}>
            <View>
              <Text style={styles.textVisit1}>Đà Nẵng</Text>
              <Text style={styles.textVisit2}>12/08 - 15/08</Text>
            </View>
            <MaterialCommunityIcons
              onPress={() => goBack()}
              name={'image-filter-tilt-shift'}
              size={32}
            />
          </View>
          <View style={styles.visitContent}>
            <ScrollView>
              <Text style={styles.textVisit}>{t('textPageNext')}</Text>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#FEF4F7',
                  borderColor: '#FEF4F7',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh1.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Thùy Tiên (24t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttons}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#F5F6FC',
                  borderColor: '#F5F6FC',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh2.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Thu Thủy (19t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttonsXanh}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#FEF4F7',
                  borderColor: '#FEF4F7',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh3.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Khánh Vy (20t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttons}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#F5F6FC',
                  borderColor: '#F5F6FC',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh4.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Tuấn Nguyễn (18t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttonsXanh}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#FEF4F7',
                  borderColor: '#FEF4F7',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh1.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Thùy Tiên (24t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttons}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#F5F6FC',
                  borderColor: '#F5F6FC',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh2.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Thu Thủy (19t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttonsXanh}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#FEF4F7',
                  borderColor: '#FEF4F7',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh3.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Khánh Vy (20t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttons}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#F5F6FC',
                  borderColor: '#F5F6FC',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh4.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Tuấn Nguyễn (18t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttonsXanh}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#FEF4F7',
                  borderColor: '#FEF4F7',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh1.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Thùy Tiên (24t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttons}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#F5F6FC',
                  borderColor: '#F5F6FC',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh2.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Thu Thủy (19t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttonsXanh}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#FEF4F7',
                  borderColor: '#FEF4F7',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh3.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Khánh Vy (20t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttons}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttons}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
              <Card
                containerStyle={{
                  borderRadius: 12,
                  backgroundColor: '#F5F6FC',
                  borderColor: '#F5F6FC',
                }}>
                <View style={styles.contents}>
                  <Image
                    style={styles.imageVisit}
                    source={require('./assest/anh4.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 6,
                      }}>
                      Tuấn Nguyễn (18t)
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Ionicons name={'md-location-outline'} size={20} />
                      <Text>Tp Hồ Chí Minh</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.buttonsXanh}>
                        <Text>11/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>12/08</Text>
                      </View>
                      <View style={styles.buttonsXanh}>
                        <Text>14/08</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Visit;
