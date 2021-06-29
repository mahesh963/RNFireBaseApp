import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../theme/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 0.35,
    backgroundColor: '#24486e',
    paddingHorizontal: windowWidth * 0.06,
  },
  bottomContainer: {flex: 0.65, backgroundColor: '#f6f6f6'},
  input: {
    height: windowWidth * 0.136,
    width: windowWidth - windowWidth * 0.136,
    borderRadius: windowWidth * 0.0136,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: windowWidth * 0.036,
    padding: windowWidth * 0.036,
    fontSize: windowWidth * 0.046,
    fontFamily: 'Mukta-Regular',
    borderWidth: 1,
    borderColor: colors.greyColor,
  },
  button: {
    backgroundColor: colors.primaryColor,
    height: windowWidth * 0.136,
    width: windowWidth - windowWidth * 0.136,
    borderRadius: windowWidth * 0.0136,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth * 0.136,
  },
  buttonTitle: {
    color: colors.whiteColor,
    fontSize: windowWidth * 0.0516,
    fontFamily: 'Mukta-Regular',
    fontWeight: 'bold',
  },
});

export default styles;
