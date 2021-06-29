import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../theme/colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  image: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    alignSelf: 'center',
    marginBottom: windowWidth * 0.06,
  },
  title: {
    fontSize: windowWidth * 0.096,
    color: 'white',
    fontFamily: 'Mukta-Medium',
  },
});

export default styles;
