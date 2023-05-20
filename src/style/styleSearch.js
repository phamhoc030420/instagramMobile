import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  searchInput: {
    margin: 15,
    height: 40,
    borderColor: '#ffff',
    borderWidth: 1,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    paddingLeft: 10,
  },
  rightHomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  colorIcon: {
    color: 'black',
  },
  userContentImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  rightText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  colorIcons: {
    color: 'blue',
  },
  rightImg: {
    marginLeft: 30,
    marginTop: 20,
  },
  rightFooter: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  rightText1: {fontSize: 20, textAlign: 'center'},
  rightText2: {marginTop: 20, textAlign: 'center'},
  rightText3: {
    color: 'blue',
  },
  nameUser: {
    fontSize: 20,
  },
});
export default styles;
