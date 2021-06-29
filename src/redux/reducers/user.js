import {SIGN_IN, GET_RANDOM_DATA, CREATE_ITEM, SIGN_OUT} from '../actions/user';

export default function user(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        userSignInDetails: action.payload,
      };
    case GET_RANDOM_DATA:
      return {
        ...state,
        getDBList: action.payload,
      };
    case CREATE_ITEM:
      return {
        ...state,
        newItemCreated: action.payload,
      };
    case SIGN_OUT:
      return action.payload;
  }
  return state;
}
