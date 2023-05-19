import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  userHeader: {
    flexDirection: 'row',
    color: 'black',
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  userIconHeader: {
    flexDirection: 'row',
  },
  iconFirst: {
    marginRight: 20,
    color: 'black',
  },
  textUser: {
    fontSize: 30,
    color: 'black',
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  userContentImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  userText: {
    color: 'black',
    fontSize: 16,
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
    marginTop: 40,
  },
  userButtonItem: {
    color: 'black',
  },
});
export default styles;
