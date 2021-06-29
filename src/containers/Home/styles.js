import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../theme/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {flex: 0.65, backgroundColor: '#f6f6f6'},

  rowContainer: {
    borderBottomWidth: 0.36,
    // paddingHorizontal: windowWidth * 0.036,
    // paddingVertical: windowWidth * 0.0136,
  },
  rowTitle: {
    fontSize: windowWidth * 0.0436,
    fontFamily: 'Mukta-Regular',
    color: colors.darkGrey,
  },
  cardView: {
    backgroundColor: 'white',
    shadowColor: '#363636',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.9,
    elevation: 3,
    paddingLeft: windowWidth * 0.036,
    width: windowWidth - windowWidth * 0.036,
    borderRadius: windowWidth * 0.0136,
    margin: windowWidth * 0.0136,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: windowWidth * 0.136,
    alignSelf: 'center',
  },
  leftContainer: {flex: 0.9},
  rightContainer: {
    flex: 0.1,
    alignItems: 'center',
    minHeight: windowWidth * 0.136,
    justifyContent: 'center',
  },
  searchBarContainer: {
    backgroundColor: color.primaryBgColour,
    width: windowWidth - windowWidth * 0.1136,
    borderBottomWidth: 0,
    marginLeft: windowWidth * 0.0136,
  },
  searchInput: {
    fontFamily: 'CenturyGothic',
    color: 'black',
    fontSize: windowWidth * 0.0416,
    alignSelf: 'center',
  },
  alertContainer: {
    backgroundColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResults: {
    fontSize: windowWidth * 0.04636,
    fontFamily: 'Mukta-Regular',
    color: colors.darkGrey,
    alignSelf: 'center',
    marginTop: windowWidth * 0.636,
  },
  activeIcon: {
    fontSize: windowWidth * 0.0636,
    color: colors.paleOrange,
    // backgroundColor: 'pink',
    padding: windowWidth * 0.0316,
  },
  inActiveIcon: {
    fontSize: windowWidth * 0.0636,
    color: colors.darkGrey,
    // backgroundColor: 'pink',
    padding: windowWidth * 0.0316,
  },
  createItem: {
    backgroundColor: colors.primaryColor,
    width: windowWidth,
    height: windowWidth * 0.136,
    justifyContent: 'center',
  },
  createItemText: {
    fontSize: windowWidth * 0.04636,
    fontFamily: 'Mukta-Regular',
    color: colors.whiteColor,
    alignSelf: 'center',
  },
  reloadIcon: {
    fontSize: windowWidth * 0.0736,
    color: colors.blackColor,
  },
});

export default styles;
