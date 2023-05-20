import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  //modal
  //input
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderRadius: 10,
    color: 'black',
    borderWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconFoters: {
    color: 'black',
    marginRight: 20,
    fontSize: 20,
    marginTop: 8,
  },
  totalImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconFooter: {
    marginTop: 10,
    flexDirection: 'row',
  },
  nameBanner: {
    color: 'black',
    marginLeft: 20,
    position: 'relative',
  },
  add: {
    paddingLeft: 10,
    color: 'black',
    paddingRight: 10,
  },
  headerIcon: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  homeBanner: {
    flexDirection: 'column',
  },
  itemBanner: {
    marginHorizontal: 10,
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
  },
  like: {
    color: 'black',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  contentTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTitle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  dot: {
    color: 'black',
    marginRight: 20,
    fontSize: 20,
  },
  imageContent: {
    width: '92%',
    height: '92%',
    borderRadius: 100,
    borderColor: 'orange',
    position: 'absolute',
    right: '4%',
  },
  imageContents: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  titleContent: {
    color: 'black',
    alignItems: 'center',
    marginLeft: 20,
  },
  scrollView: {},
  image: {
    width: '100%',
    height: 500,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    paddingVertical: 10,
  },
  nameHeader: {
    fontFamily: 'DancingScript-Bold',
    color: 'black',
    fontSize: 30,
  },
  banner: {
    borderBottomWidth: 0.2,
    flex: 2,
    flexDirection: 'row',
    paddingTop: 30,
  },
  content: {
    flex: 10,
  },
});
export default styles;
