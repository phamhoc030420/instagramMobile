import React, {useState} from 'react';
import styles from '../../style/users/styleStar';
import {View, Text, Image, StatusBar} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Slider, Icon, AirbnbRating, Button} from 'react-native-elements';
import {ListItem, SpeedDial} from '@rneui/themed';
import TabBar from '../tab/tabBar';
const SliderStar = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);
  const [open, setOpen] = useState(false);
  const interpolate = (start, end) => {
    let k = (value - 0) / 100; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };
  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };
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
        <View style={styles.sliderStar}>
          <Slider
            style={styles.slider}
            value={value}
            onValueChange={setValue}
            maximumValue={100}
            minimumValue={0}
            step={5}
            allowTouchTrack
            trackStyle={{height: 5, backgroundColor: 'transparent'}}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: 'transparent',
            }}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                  color={color()}
                />
              ),
            }}
          />
          <Text style={{paddingTop: 20}}>Value: {value}</Text>
          <AirbnbRating />
          <ListItem.Swipeable
            leftContent={() => (
              <Button
                title="Info"
                icon={{name: 'info', color: 'white'}}
                buttonStyle={{minHeight: '100%'}}
              />
            )}
            rightContent={() => (
              <Button
                icon={{name: 'delete', color: 'white'}}
                buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
              />
            )}>
            {/* <Icon name="My Icon" /> */}
            <ListItem.Content>
              <ListItem.Title>Hello Swiper</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
          {/*  */}
          <SpeedDial
            style={{bottom: 50}}
            isOpen={open}
            icon={{name: 'edit', color: '#fff'}}
            openIcon={{name: 'close', color: '#fff'}}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
              icon={{name: 'add', color: '#fff'}}
              title="Add"
              onPress={() => console.log('Add Something')}
            />
            <SpeedDial.Action
              icon={{name: 'delete', color: '#fff'}}
              title="Delete"
              onPress={() => console.log('Delete Something')}
            />
          </SpeedDial>
          <View style={styles.tabBar}>
            <TabBar active={'user'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default SliderStar;
