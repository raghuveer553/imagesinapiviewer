import constants from '../constants/constants';

const apiResultedAction = function(inResultType, inApiResultJSON){
  return {
    type:constants.kAction_ApiResulted,
    jsonResponse:inApiResultJSON
  }
}

export default apiResultedAction;