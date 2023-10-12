import { combineReducers } from 'redux';
import personalFormReducer from './PersonalDetailsReducer';
import professionalBackgroundReducer from './ProfessionalBackground';
import aboutYouReducer from './AboutYou';
import availabilityReducer from './YourAvailability';
import skillsToolsReducer from './SkillsToolsReducer';

const rootReducer = combineReducers({
  personalForm: personalFormReducer,
  professionalBackground: professionalBackgroundReducer,
  aboutYouForm: aboutYouReducer,
  availabilityForm: availabilityReducer,
  skillsTools: skillsToolsReducer
});

export default rootReducer;