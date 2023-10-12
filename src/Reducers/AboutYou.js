import { SET_ADJECTIVES, SET_DESCRIPTION, SET_FIELDS_OF_INTEREST } from '../Actions';
  
  const initialState = {
    adjectives: [],
    description: '',
    fieldsOfInterest: [],
  };
  
  const aboutYouReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ADJECTIVES:
        return { ...state, adjectives: action.payload };
      case SET_DESCRIPTION:
        return { ...state, description: action.payload };
      case SET_FIELDS_OF_INTEREST:
        return { ...state, fieldsOfInterest: action.payload };
      default:
        return state;
    }
  };
  
  export default aboutYouReducer;