import {StyleSheet} from 'react-native';
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
  userText: {
    color: 'black',
    fontWeight: 'bold',
  },
  userTexts: {
    color: 'black',
  },
});
export default styles;
