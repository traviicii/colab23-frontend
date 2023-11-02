import { SET_PREVIOUS_ROLE, SET_MENTORSHIP_STATUS, SET_PRODUCT_ROLE, SET_PRODUCT_EXPERIENCE } from '../Actions';
  
  const initialState = {
    previousRole: '',
    isMentor: false,
    productRole: '',
    productExperience: '',
  };
  
  const professionalBackgroundReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PREVIOUS_ROLE:
        return { ...state, previousRole: action.payload };
      case SET_MENTORSHIP_STATUS:
        return { ...state, isMentor: action.payload };
      case SET_PRODUCT_ROLE:
        return { ...state, productRole: action.payload };
      case SET_PRODUCT_EXPERIENCE:
        return { ...state, productExperience: action.payload };
      default:
        return state;
    }
  };
  
  export default professionalBackgroundReducer;
  