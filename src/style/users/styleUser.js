import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const primaryColor = AsyncStorage.getItem('mode');
console.log(primaryColor);
const styles = StyleSheet.create({
  userHeader: {
    flexDirection: 'row',
    color: 'black',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  userHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIconHeader: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconFirst: {
    marginRight: 20,
    color: 'black',
    zIndex: 100,
  },
  textUser: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  selectUser: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  userContentImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  userTextCenter: {
    alignItems: 'center',
  },
  colorText: {
    color: 'black',
  },
  userButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 8,
  },
  userButtonItem: {
    color: 'black',
    overflow: 'hidden',
    width: 170,
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#DEE1E6',
    borderColor: '#fff',
    paddingLeft: 10,
  },
  logOut: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userText: {
    color: 'black',
    fontWeight: 'bold',
  },
  userTexts: {
    color: 'black',
  },
  popupItem: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  itembottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itembottoms: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 0.6,
    borderBottomColor: '#E8EAED',
  },
  itembottomUSer: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itembottomUSerFirst: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  textItem: {
    marginLeft: 20,
    color: 'black',
    fontSize: 16,
  },
  textItemsuser: {
    marginLeft: 20,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textItems: {
    marginLeft: 20,
    color: 'black',
    fontSize: 16,
  },
  imgPopUp: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  iconAddAcc: {
    color: 'black',
  },
  radio: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#23A0FD',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioChild: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  accLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mode: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
  },
  textMode: {
    fontSize: 20,
    // color: 'black',
    marginRight: 20,
  },
});
export default styles;
