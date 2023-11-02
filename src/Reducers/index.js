import { combineReducers } from 'redux';
import personalFormReducer from './PersonalDetailsReducer';
import professionalBackgroundReducer from './ProfessionalBackground';
import aboutYouReducer from './AboutYouReducer';
import availabilityReducer from './YourAvailabilityReducer';
import skillsToolsReducer from './SkillsToolsReducer';
import { taskReducer } from './TaskReducer';
import { meetingReducer } from './MeetingReducer';
import userReducer from './UserReducer';
import filterReducer from './FilterReducer';
import projectUserReducer from './ProjectUserReducer';
import toastsReducer from './ToastNotifications';


const rootReducer = combineReducers({
  personalForm: personalFormReducer,
  professionalBackground: professionalBackgroundReducer,
  aboutYouForm: aboutYouReducer,
  availabilityForm: availabilityReducer,
  skillsTools: skillsToolsReducer,
  tasks: taskReducer,
  meetings: meetingReducer,
  user: userReducer,
  filter: filterReducer,
  projectUser: projectUserReducer,
  toasts: toastsReducer

});

export default rootReducer;