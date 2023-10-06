import { combineReducers } from 'redux';
import nameReducer from './name';
import counterReducer from './counter';


const rootReducer = combineReducers({
  name: nameReducer, 
  counter: counterReducer,
});

export default rootReducer;
