import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
  },
  containerSearchUser: {
    backgroundColor: 'white',
    position: 'relative',
  },
  searchInput: {
    margin: 15,
    height: 40,
    borderColor: '#ffff',
    borderWidth: 1,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    paddingLeft: 30,
    // width: 330,
  },
  searchInputAffter: {
    margin: 15,
    height: 40,
    // width: 300,
    borderColor: '#ffff',
    borderWidth: 1,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    paddingLeft: 30,
  },
  SearchIcon: {
    position: 'absolute',
    left: 20,
    top: 5,
    zIndex: 1,
  },
  SearchIconAffter: {
    position: 'absolute',
    left: 49,
    top: 5,
    zIndex: 1,
  },
  rightHomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  rightHomeHeaderRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  rightHomeIconFirst: {
    flexDirection: 'row',
  },
  colorIcon: {
    color: 'black',
    marginTop: 20,
  },
  colorIconBack: {color: 'black', marginTop: 22, marginLeft: 5, width: 25},
  Icon: {marginRight: 16},
  userContentImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  rightText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  textRight: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  colorIcons: {
    color: '#47B0D5',
  },
  searchBack: {flexDirection: 'row'},
  rightImg: {
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
  },
  rightFooter: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  rightText1: {fontSize: 20, textAlign: 'center'},
  rightText2: {marginTop: 20, textAlign: 'center', opacity: 0.5},
  rightText3: {
    color: '#47B0D5',
    marginTop: 10,
    fontWeight: 'bold',
  },
  nameUser: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  selectUserRight: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 27,
    marginLeft: 5,
  },
  containerSearchClick: {
    flex: 1,
  },
  headerLable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textLable1: {fontSize: 18, fontWeight: 'bold', color: 'black'},
  textLable2: {fontSize: 16, color: '#47B0D5'},
  currentSearch: {
    marginTop: 30,
  },
  imageSearch: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  itemSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  leftSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSearh: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  textSearh1: {
    color: 'black',
    fontWeight: 'bold',
  },
  cancel: {
    fontSize: 16,
    marginTop: 15,
  },
});
export default styles;
