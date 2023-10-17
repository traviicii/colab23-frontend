import { combineReducers } from 'redux';
import personalFormReducer from './PersonalDetailsReducer';
import professionalBackgroundReducer from './ProfessionalBackground';
import aboutYouReducer from './AboutYouReducer';
import availabilityReducer from './YourAvailabilityReducer';
import skillsToolsReducer from './SkillsToolsReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  personalForm: personalFormReducer,
  professionalBackground: professionalBackgroundReducer,
  aboutYouForm: aboutYouReducer,
  availabilityForm: availabilityReducer,
  skillsTools: skillsToolsReducer,
  user: userReducer
});

export default rootReducer;