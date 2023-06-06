/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  Alert.alert(
    'Message handled in the background!',
    JSON.stringify(remoteMessage),
  );
});
AppRegistry.registerComponent(appName, () => App);
