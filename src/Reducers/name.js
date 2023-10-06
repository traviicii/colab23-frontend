const initialState = '';

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_NAME':
      return action.payload;
    default:
      return state;
  }
};

export default nameReducer;
