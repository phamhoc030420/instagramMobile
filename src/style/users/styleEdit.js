import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  textHeader: {
    width: 200,
    overflow: 'hidden',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 10,
  },
  imageAvatars: {
    width: 105,
    height: 105,
    borderRadius: 100,
    margin: 10,
  },
  editText: {
    color: '#47B0D5',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  contentEdit: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  itemEdit: {
    borderBottomWidth: 0.6,
    borderBottomColor: '#E9EBEC',
    height: 60,
    justifyContent: 'center',
  },
  textName: {
    color: 'black',
    fontSize: 20,
  },
  lastText: {
    color: '#47B0D5',
    fontSize: 20,
  },
});
export default styles;
