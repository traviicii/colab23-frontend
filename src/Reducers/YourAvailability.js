import { SET_LOCATION, SET_TIMEZONE, SET_HOURS_PER_WEEK, SET_AVAILABILITY } from '../Actions';

const initialState = {
  location: '',
  timezone: '',
  hoursPerWeek: '',
  availability: [],
};

const availabilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_TIMEZONE:
      return {
        ...state,
        timezone: action.payload,
      };
    case SET_HOURS_PER_WEEK:
      return {
        ...state,
        hoursPerWeek: action.payload,
      };
    case SET_AVAILABILITY:
      return {
        ...state,
        availability: action.payload,
      };
    default:
      return state;
  }
};

export default availabilityReducer;
