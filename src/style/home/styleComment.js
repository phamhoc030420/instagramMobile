import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  notify: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  headernotify: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  textbanner: {
    color: 'black',
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  notifyComment: {
    color: 'black',
    overflow: 'hidden',
    width: 300,
    marginRight: 20,
    paddingRight: 20,
    textAlign: 'justify',
  },
  textLable1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  textLable2: {fontSize: 16, color: '#47B0D5'},
  currentSearch: {
    marginTop: 30,
    // flex: 1,
    height: '100%',
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
    marginBottom: 30,
  },
  leftSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 20,
  },
  textSearh: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  tabBar: {
    backgroundColor: '#ffff',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgcomment: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  textComment: {
    marginLeft: 10,
    height: 100,
    width: '70%',
  },
});
export default styles;
