import constants from '../constants/constants';
import { kState_Xpath, kState_ApiURL, kState_ApiResponse, kState_Imageurls } from '../constants/constants';

const buttonClickReducer = function (state, action) {  
  let newstate;
  if(state){
   newstate = JSON.parse(JSON.stringify(state));
  }else{
    newstate = {};
  }
   
  if (action.type === constants.kAction_ApiButtonClick) {
    if (newstate[kState_ApiURL].includes('random')) {
      newstate[kState_ApiResponse] = constants.kRandomResponse;
    } else {
      newstate[kState_ApiResponse] = constants.kNonRandomResponse;
    }
    return newstate;
  } else if (action.type === constants.kAction_XpathButtonClick) {
    if (newstate[kState_Xpath] && newstate[kState_Xpath].length > 0) {
      if (newstate[kState_ApiResponse] && newstate[kState_ApiResponse].length > 0) {
        let xpathStr = newstate[kState_Xpath];
        let strsArr = xpathStr.split("].");
        let arraysPath = strsArr[0].substring(1);
        let imageURLPath = strsArr[1];

        let resultJSON = newstate[kState_ApiResponse];
        let dictsArr = resultJSON[arraysPath];
        let imageURLsArr = [];
        if (dictsArr.length > 0 && dictsArr[0][imageURLPath]) {
          dictsArr.forEach(function (element) {
            imageURLsArr.push(element[imageURLPath]);
          }, this);
          newstate[kState_Imageurls] = imageURLsArr;
        } else {
          alert("Please get api result before clicking here");
        }
      } else {
        alert("Please enter a valid Xpath");
      }
    }
    return newstate;
  }else{
    return newstate;
  }
}

export default buttonClickReducer;