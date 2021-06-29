import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    width: windowWidth,
    height: windowWidth * 0.1636,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 0.87,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: colors.whiteColor,
    fontSize: windowWidth * 0.076,
    alignSelf: 'center',
  },
  title: {
    fontSize: windowWidth * 0.0516,
    color: colors.whiteColor,
    fontFamily: 'Mukta-Regular',
    marginLeft: windowWidth * 0.136,
  },
  logoutIcon: {
    fontSize: windowWidth * 0.06,
    color: colors.whiteColor,
  },
});

export default styles;
