import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  KeyboardAwareScrollView,
} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {signIn} from '../../redux/actions/user';
import Modal from 'react-native-modal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = props => {
  //console.log('Login_props', props);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(false);

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onLoginPress = () => {
    if (email == '') {
      alert('Please Enter Email');
    } else if (password == '') {
      alert('Please Enter Password');
    } else if (!validateEmail(email)) {
      alert('Please Enter Valid Email');
    } else {
      setloading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(async () => {
          let userData = {
            email: email,
            password: password,
          };
          await props.signIn(userData);
          await props.navigation.push('Home');
          setloading(false);
          console.log('Login_props_success', props);
        })
        .catch(error => {
          setloading(false);
          console.log('errorCode_123', error);
          if (error.code == 'auth/wrong-password') {
            alert('Please Enter Correct Password');
          } else if (error.code == 'auth/user-not-found') {
            alert('User not exists');
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Icon type="FontAwesome" name="user" style={styles.userIcon} />
      </View>
      <View>
        <Text style={styles.title}>MEMBER LOGIN</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={text => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={onLoginPress}>
        <Text style={styles.buttonTitle}>Sign-In</Text>
      </TouchableOpacity>
      <Modal
        isVisible={loading}
        deviceWidth={windowWidth}
        deviceHeight={windowHeight}
        style={styles.modalContainer}
        backdropOpacity={0.36}>
        <View style={styles.modalContainer}>
          <ActivityIndicator
            size="large"
            color="#ffffff"
            size={windowWidth * 0.3146}
          />
        </View>
      </Modal>
    </View>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
  {signIn},
)(Login);
