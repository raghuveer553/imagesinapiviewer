import constants from '../constants/constants';
// import textInputEdited from '../actions/textInputEdited';

import { kState_ApiURL, kState_Xpath } from '../constants/constants';
const textInputEditReducer = function (state, action) {
  let newState;
  if(state){
    newState = JSON.parse(JSON.stringify(state));
  }else{
    newState = {};
  }
  
  // if (action.type === constants.kAction_EditApiURL) {
  //   newState[kState_ApiURL] = action.text;
  // } else if (action.type === constants.kAction_EditXPath) {
  //   newState[kState_Xpath] = action.text;
  // }
  return newState;
}

export default textInputEditReducer;