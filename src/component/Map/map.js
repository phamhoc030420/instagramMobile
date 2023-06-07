import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Text, View, Image, Button, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
const Map = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      {/* <SafeAreaView>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}> */}
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      {/* </View>
      </SafeAreaView> */}
    </>
  );
};
export default Map;
