import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: 'rgb(20,35,61)'},
  headerView: {
    backgroundColor: '#114c96',
    borderBottomWidth: 0,
  },
  headerBody: {
    flex: 1,
  },
  headerTitle: {
    color: 'snow',
    textAlign: 'center',
    alignSelf: 'center',
    letterSpacing: 0,
  },
  mainView: {flex: 1, padding: 10, justifyContent: 'center'},
  ambButton: {justifyContent: 'center'},
  ambTitle: {color: 'white'},
});
