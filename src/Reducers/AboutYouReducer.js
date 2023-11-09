import { SET_ADJECTIVES, SET_DESCRIPTION, SET_FIELDS_OF_INTEREST, SET_OTHER_INTERESTS } from '../Actions';
  
  const initialState = {
    adjectives: [],
    description: '',
    fieldsOfInterest: [],
    otherInterests: [],
  };
  
  const aboutYouReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ADJECTIVES:
        return { ...state, adjectives: action.payload };
      case SET_DESCRIPTION:
        return { ...state, description: action.payload };
      case SET_FIELDS_OF_INTEREST:
        return { ...state, fieldsOfInterest: action.payload };
      case SET_OTHER_INTERESTS:
        return { ...state, otherInterests: action.payload };
      default:
        return state;
    }
  };
  
  export default aboutYouReducer;