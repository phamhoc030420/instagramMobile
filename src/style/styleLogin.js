import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    color: '#ffffff',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginSignIn: {
    fontSize: 35,
    color: 'white',
  },
  loginText1: {
    color: 'white',
    fontSize: 12,
    height: 35,
    backgroundColor: '#3C3C3C',
    width: 250,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
  },
  loginButton: {
    width: 250,
    height: 35,
    backgroundColor: '#dd5050',
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgot: {color: '#dd5050'},
  cant: {
    color: 'white',
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
export default styles;
