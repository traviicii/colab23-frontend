import { combineReducers } from 'redux';
import personalFormReducer from './PersonalDetailsReducer';
import professionalBackgroundReducer from './ProfessionalBackground';

const rootReducer = combineReducers({
  personalForm: personalFormReducer,
  professionalBackground: professionalBackgroundReducer,
});

export default rootReducer;