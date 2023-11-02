import { SET_MAIN_FILTER, SET_ROLE, SET_STATUS, SET_DURATION, SET_INTERESTS } from '../Actions';

const initialState = {
  mainFilter: null,
  role: null,
  status: null,
  duration: null,
  interests: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_FILTER:
      return { ...state, mainFilter: action.payload };
    case SET_DURATION:
      return { ...state, duration: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    case SET_ROLE:
      return { ...state, role: action.payload };
    case SET_INTERESTS: 
      return { ...state, interests: action.payload }; 
    default:
      return state;
  }
};

export default filterReducer;
