import buttonClickReducer from './buttonClickReducer';
import textInputEditReducer from './textInputEditReducer';

import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
  buttonClickReducer:buttonClickReducer,
  textInputEditReducer:textInputEditReducer
});

export default combinedReducers;