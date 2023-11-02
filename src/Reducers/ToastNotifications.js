// reducers/toasts.js
import { v4 as uuidv4 } from 'uuid';
import { ADD_TOAST, REMOVE_TOAST } from '../Actions';

const initialState = [];

const toastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return [...state, { id: uuidv4(), ...action.payload }];
    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== action.payload);
    default:
      return state;
  }
};

export default toastsReducer;
