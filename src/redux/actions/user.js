export const SIGN_IN = 'SIGN_IN';
export const GET_RANDOM_DATA = 'GET_RANDOM_DATA';
export const CREATE_ITEM = 'CREATE_ITEM';
export const SIGN_OUT = 'SIGN_OUT';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export function signIn(data) {
  return async dispatch => {
    return dispatch({
      type: SIGN_IN,
      payload: data,
    });
  };
}

export function getRandomData() {
  return async dispatch => {
    try {
      database()
        .ref('/randomlist/results/')
        .once('value', snapshot => {
          let data = snapshot.val();
          //console.log('User_data: ', snapshot.val());
          return dispatch({
            type: GET_RANDOM_DATA,
            payload: data,
          });
        });
    } catch (err) {
      console.log('getRandomData_api_err: ', err);
    }
  };
}

export function createItemAction(data) {
  return async dispatch => {
    try {
      let docData = {
        uid: data.uid,
        title: data.title,
        isChecked: false,
      };
      var newArray = [];
      var ref = database().ref('/randomlist/results/');
      var newChildRef = ref.push();
      // now it is appended at the end of data at the server
      newChildRef
        .set(docData)
        .then(res => {
          console.log('array push success done ', res);
          database()
            .ref('/randomlist/results/')
            .on('value', snapshot => {
              let data = snapshot.val();
              console.log('User_data_after_pushing: ', snapshot.val());
              Object.keys(data).map(function (key, index) {
                newArray.push(data[key]);
              });

              console.log('data of newArray: ', newArray);
              return dispatch({
                type: GET_RANDOM_DATA,
                payload: newArray,
              });
            });
          return dispatch({
            type: CREATE_ITEM,
            payload: docData,
          });
        })
        .catch(err => {
          console.log('got error in array ', err);
        });
    } catch (err) {
      console.log('getRandomData_api_err: ', err);
    }
  };
}

export function signOut() {
  return async dispatch => {
    auth()
      .signOut()
      .then(async () => {
        return dispatch({
          type: SIGN_OUT,
          payload: {},
        });
      })
      .catch(err => {
        console.log('signout error', err);
      });
  };
}

export default {
  SIGN_IN,
  GET_RANDOM_DATA,
  CREATE_ITEM,
  SIGN_OUT,
  signIn,
  getRandomData,
  createItemAction,
  signOut,
};
