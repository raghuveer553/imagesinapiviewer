import buttonClickReducer from './buttonClickReducer';
import textInputEditReducer from './textInputEditReducer';

import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
  buttonClickReducer,
  textInputEditReducer
});

export default combinedReducers;