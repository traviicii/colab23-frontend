import { SET_PROJECT_TEAM, SET_PROJECT, SET_PROJECT_RESOURCES, SET_DATA, SET_PROJECT_LINKS, SET_PROJECT_INSPIRATION } from '../Actions';

const initialState = {
  project_team: [],
  project: {},
  project_resources: [],
  project_links: [],
  project_inspiration: [],
  data: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT_TEAM:
      return { ...state, project_team: action.payload };
    case SET_PROJECT:
      return { ...state, project: action.payload };
    case SET_PROJECT_RESOURCES:
      return { ...state, project_resources: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_PROJECT_LINKS:
      return { ...state, project_links: action.payload };
    case SET_PROJECT_INSPIRATION:
      return { ...state, project_inspiration: action.payload }
    default:
      return state;
  }
};

export default userReducer;