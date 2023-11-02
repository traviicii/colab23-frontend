import { SET_DESIGN_SKILLS, SET_DEVELOPER_SKILLS, SET_MANAGEMENT_SKILLS, SET_OTHER_SKILLS, SET_WANTED_SKILLS } from '../Actions';

const initialState = {
    designSkills: [],
    developerSkills: [],
    managementSkills: [],
    otherSkills: [],
    wantedSkills: []
};

const skillsToolsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DESIGN_SKILLS:
        return { ...state, designSkills: action.payload };
      case SET_DEVELOPER_SKILLS:
        return { ...state, developerSkills: action.payload };
      case SET_MANAGEMENT_SKILLS:
        return { ...state, managementSkills: action.payload };
      case SET_OTHER_SKILLS:
        return { ...state, otherSkills: action.payload}
      case SET_WANTED_SKILLS:
        return { ...state, wantedSkills: action.payload}
      default:
        return state;
    }
  };
  
  export default skillsToolsReducer;