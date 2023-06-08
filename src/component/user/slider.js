import React, {useState} from 'react';
import styles from '../../style/users/styleStar';
import {View, Text, Image, StatusBar} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Slider, Icon, AirbnbRating, Button} from 'react-native-elements';
import {ListItem, SpeedDial} from '@rneui/themed';
import TabBar from '../tab/tabBar';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SelectDropdown from 'react-native-select-dropdown';
const SliderStar = ({navigation}) => {
  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
  ];
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
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
            <ListItem.Content>
              <ListItem.Title>Hello Swiper</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
          <Button title="Choose Date" onPress={() => setOpenDate(true)} />
          <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>
            {date.toDateString()}
          </Text>
          <DatePicker
            modal
            open={openDate}
            date={date}
            onConfirm={date => {
              setOpenDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text style={{color: 'black', fontSize: 20, marginRight: 20}}>
              City
            </Text>
            <SelectDropdown
              search={true}
              searchPlaceHolder="Enter your text"
              dropdownIconPosition="right"
              defaultValue="aaa"
              buttonStyle={{
                backgroundColor: 'white',
                borderRadius: 10,
                borderWidth: 0.5,
                width: 250,
              }}
              defaultButtonText="Select City"
              renderDropdownIcon={() => {
                <AntDesign
                  style={{color: 'black'}}
                  name={'googleplus'}
                  size={18}
                />;
              }}
              searchInputStyle={true}
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
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
