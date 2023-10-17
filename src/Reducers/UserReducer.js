import { SET_ID, SET_UID, SET_TOKEN, SET_DATA } from '../Actions';

const initialState = {
    id: '',
    uid: '',
    token: '',
    data: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ID:
        return { ...state, id: action.payload };
      case SET_UID:
        return { ...state, uid: action.payload };
      case SET_TOKEN:
        return { ...state, token: action.payload };
    case SET_DATA:
        return { ...state, data: action.payload}
      default:
        return state;
    }
  };
  
  export default userReducer;