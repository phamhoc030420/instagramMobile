import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imageContainer: {paddingHorizontal: 2},
  contentImg1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  touch1: {
    paddingBottom: 2,
  },
  img1: {height: 150},
  contentImg2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentImgLeft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: -2,
  },
  touch2: {
    paddingBottom: 2,
  },
  img2: {height: 150},
  imageLast: {
    marginLeft: 2,
  },
  imgRight: {height: 302},
  contentImg3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgLeft3: {
    height: 302,
  },
  imgRight3: {
    height: 150,
    marginBottom: 2,
  },
  imageRinght3: {
    marginLeft: 4,
  },
});
export default styles;
