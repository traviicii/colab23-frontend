const initialState = {
    meetings: [],
  };
  
  export const meetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MEETING':
        return {
          ...state,
          meetings: [...state.meetings, action.payload],
        };
      default:
        return state;
    }
  };
  