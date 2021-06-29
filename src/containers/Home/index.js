import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {getRandomData, signOut} from '../../redux/actions/user';
import styles from './styles';
import Header from '../../components/header';
import {Icon} from 'native-base';
import colors from '../../theme/colors';
import database from '@react-native-firebase/database';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = props => {
  const [search, setSearch] = useState('');
  const [randomList, setRandomList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRandomList, setSelectedRandomList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRender, setisRender] = useState(false);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    console.log('mounted');
    let results = [];
    database()
      .ref('/randomlist/results/')
      .once('value', snapshot => {
        setshowModal(true);
        let totalList = snapshot.val();
        if (typeof totalList == 'object') {
          Object.keys(totalList).map(function (key, index) {
            results.push(totalList[key]);
          });
          setRandomList(results.reverse());
          setshowModal(false);
        } else {
          setRandomList(totalList);
          setshowModal(false);
        }
        console.log('User_data: ', snapshot.val());
      });
  }, []);

  const getData = () => {
    try {
      let results = [];
      setshowModal(true);
      props.getRandomData();
      let totalList = props.user.getDBList;
      if (typeof totalList == 'object') {
        Object.keys(totalList).map(function (key, index) {
          results.push(totalList[key]);
        });
        setRandomList(results.reverse());
        setshowModal(false);
      } else {
        setRandomList(totalList);
        setshowModal(false);
      }
    } catch (err) {
      setshowModal(false);
      console.log('statedata_err', err);
    }
  };

  const updateSearch = searchText => {
    setSearch(searchText);
    let filteredData = randomList.filter(function (item) {
      const itemData = `${item.title.toLowerCase()}`;
      const textData = searchText.toLowerCase();
      return itemData.includes(textData);
    });
    setFilteredData(filteredData);
    // console.log('filteredData', filteredData);
  };

  const onSelectItem = async item => {
    let query = database()
      .ref('/randomlist/results/')
      .orderByChild('uid')
      .equalTo(item.uid);
    let count = 0;
    if (randomList.length == 0) {
      selectedRandomList.push(item);
      query.once('value').then(snapshot => {
        snapshot.forEach(userSnapshot => {
          userSnapshot.ref.child('isChecked').set(true);
        });
      });
    } else {
      selectedRandomList.map((res, i) => {
        if (item.uid == res.uid) {
          selectedRandomList.splice(i, 1);
          query.once('value').then(snapshot => {
            snapshot.forEach(userSnapshot => {
              userSnapshot.ref.child('isChecked').set(false);
            });
          });
          count++;
        }
      });
      if (count == 0) {
        selectedRandomList.push(item);
        query.once('value').then(snapshot => {
          snapshot.forEach(userSnapshot => {
            userSnapshot.ref.child('isChecked').set(true);
          });
        });
      }
    }
    setisRender(!isRender);
    setSelectedRandomList(selectedRandomList);
    // setRandomList(randomList);
    console.log('selectedRandomList_123', selectedRandomList);
  };

  const renderItem = ({item}) => {
    var count = 0;
    var showActive = false;
    var iconType = false;
    selectedRandomList.map((res, i) => {
      if (res.uid == item.uid) {
        showActive = true;
        count = count + 1;
      }
      if (count === 0) {
        showActive = false;
      }
    });

    if (item.isChecked) {
      iconType = (
        <Icon
          type="MaterialIcons"
          name={'check-circle'}
          style={styles.activeIcon}
        />
      );
    } else {
      iconType = (
        <Icon
          type="MaterialIcons"
          name={'radio-button-unchecked'}
          style={styles.inActiveIcon}
        />
      );
    }

    return (
      <TouchableOpacity onPress={() => onSelectItem(item)}>
        <View style={styles.cardView}>
          <View style={styles.leftContainer}>
            <Text style={styles.rowTitle}>
              {item.title}
              {item.isChecked}
            </Text>
          </View>
          <View style={styles.rightContainer}></View>
          {iconType}
        </View>
      </TouchableOpacity>
    );
  };

  const signOut = async () => {
    await props.signOut();
  };

  return (
    <View style={styles.container}>
      <Header headerTitle={'HOME'} signOut={signOut} />
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <SearchBar
            placeholder="Search..."
            onChangeText={updateSearch}
            value={search}
            inputStyle={styles.searchInput}
            containerStyle={styles.searchBarContainer}
            round={false}
            inputContainerStyle={{
              backgroundColor: 'white',
            }}
            lightTheme={true}
            onClear={() => {
              Keyboard.dismiss();
            }}
            searchIcon={{size: windowWidth * 0.06}}
            clearIcon={{size: windowWidth * 0.06}}
          />
        </View>
        <TouchableOpacity style={styles.rightContainer} onPress={getData}>
          <Icon name={'reload'} type={'Ionicons'} style={styles.reloadIcon} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        {search !== '' && filteredData.length == 0 ? (
          <View style={styles.alertContainer}>
            <Text style={styles.noResults}>No Results Found</Text>
          </View>
        ) : search !== '' && filteredData.length != 0 ? (
          <FlatList
            contentContainerStyle={{paddingTop: windowWidth * 0.036}}
            extraData={onSelectItem}
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.uid}
            showsVerticalScrollIndicator={false}
            windowSize={2}
            initialNumToRender={25}
            removeClippedSubviews={true}
          />
        ) : (
          <FlatList
            contentContainerStyle={{paddingTop: windowWidth * 0.036}}
            extraData={onSelectItem}
            data={randomList}
            renderItem={renderItem}
            keyExtractor={item => item.uid}
            showsVerticalScrollIndicator={false}
            windowSize={2}
            initialNumToRender={25}
            removeClippedSubviews={true}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.createItem}
        onPress={() => props.navigation.push('CreateData')}>
        <Text style={styles.createItemText}>Create Item</Text>
      </TouchableOpacity>
      <Modal
        isVisible={showModal}
        deviceWidth={windowWidth}
        deviceHeight={windowHeight}
        style={styles.modalContainer}
        backdropOpacity={0.1}>
        <View style={styles.modalContainer}>
          <ActivityIndicator
            size="large"
            color="#ffffff"
            // style={{width: 160, height: 160}}
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
  {getRandomData, signOut},
)(Home);
