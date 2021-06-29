import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';

import styles from './styles';
import Header from '../../components/header';
import {Icon} from 'native-base';
import colors from '../../theme/colors';
import database from '@react-native-firebase/database';
import {connect} from 'react-redux';
import {createItemAction, signOut} from '../../redux/actions/user';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateData = props => {
  const [addItem, setaddItem] = useState('');

  const uuidv4 = () => {
    return 'xxxx-xxxx-4xxx-yxxx-xxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const onCreate = async () => {
    let data = {
      uid: uuidv4(),
      title: addItem,
    };
    await props.createItemAction(data);
    Keyboard.dismiss();
    setaddItem('');
    props.navigation.push('Home');
  };

  const signOut = async () => {
    await props.signOut();
  };

  return (
    <View style={styles.container}>
      <Header headerTitle={'CREATE ITEM'} signOut={signOut} />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add Item"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setaddItem(text)}
          value={addItem}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onCreate}>
          <Text style={styles.buttonTitle}>Add Item to list</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
  {createItemAction, signOut},
)(CreateData);
