import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';
import colors from '../../theme/colors';

const Header = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.primaryColor}
        barStyle={'light-content'}
      />
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{props.headerTitle}</Text>
      </View>

      <TouchableOpacity
        style={styles.rightContainer}
        onPress={() => props.signOut()}>
        <Icon name={'logout'} type={'AntDesign'} style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
