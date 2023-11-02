import { ADD_PROJECT, ADD_USER, CLEAR_PROJECTS, CLEAR_USERS } from '../Actions';

const initialState = {
  projects: [],
  users: [],
};

const projectUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            console.log('Adding project:', action.payload);
          return {
            ...state,
            projects: [...state.projects, action.payload],
          };
    
        case ADD_USER:
            console.log('Adding user:', action.payload);
          return {
            ...state,
            users: [...state.users, action.payload],
          };
    
        case CLEAR_PROJECTS:
          return {
            ...state,
            projects: [],
          };
    
        case CLEAR_USERS:
          return {
            ...state,
            users: [], 
          };

    default:
      return state;
  }
};

export default projectUserReducer;
