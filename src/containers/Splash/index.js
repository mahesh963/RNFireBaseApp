import React, {useEffect} from 'react';
import {View, Dimensions, Image, Text, StatusBar} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Splash = props => {
  useEffect(() => {
    if (Object.keys(props.user).length == 0) {
      setTimeout(() => {
        props.navigation.push('Login', {props: props});
      }, 3000);
    } else {
      setTimeout(() => {
        props.navigation.push('Home', {props: props});
      }, 3000);
    }
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#262446" barStyle={'light-content'} />
      <Text style={styles.title}>RNTestTask</Text>
    </View>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
  {},
)(Splash);
