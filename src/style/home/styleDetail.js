import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageAvarta: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageMainAvarta: {
    height: 300,
    marginTop: 10,
    width: '100%',
  },
  tagComment: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.2,
  },
  comment: {
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'justify',
  },
  backDetail: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  detailHome: {
    marginLeft: 20,
    color: 'black',
    fontSize: 16,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
  },
});
export default styles;
