import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  // buttonCamera: {
  //   marginBottom: 100,
  //   paddingBottom: 10,
  // },
  // cameraImg: {
  //   flex: 8,
  // },

  cameraHeader: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignContent: 'center',
    marginTop: 20,
  },
  cameraFirst: {
    flexDirection: 'row',
  },
  cameraTextHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 30,
  },
  cameraTextHeaderX: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 30,
  },
  cameraContent: {
    flex: 10,
    backgroundColor: '#DEE1E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContentText1: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 50,
    textAlign: 'center',
    opacity: 0.2,
  },
  cameraContentText2: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    textAlign: 'center',
    opacity: 0.8,
  },
  cameraContentText3: {marginTop: 20, color: '#47B0D5'},
  cameraOpenImage: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  cameraOpenImageFirst: {
    flexDirection: 'row',
  },
  cameraOpenImageText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hascode: {
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 20,
    color: 'black',
  },
  cameraOpenImageBorder: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#989494',
    justifyContent: 'center',
  },
  cameraOpenImageCam: {
    color: 'white',
    fontSize: 20,
    left: '25%',
  },
  textMenu: {
    color: 'black',
    fontSize: 16,
  },
});
export default styles;
