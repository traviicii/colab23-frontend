import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_PASSWORD, SET_CONFIRM_PASSWORD, SET_LINKEDIN, } from '../Actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  linkedin: '',
  password: '',
  confirmPassword: '',
};

const personalDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_LINKEDIN:
      return { ...state, linkedin: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

export default personalDetailsReducer;