import constants from '../constants/constants';

const textInputEditedAction = function (inTextInputType, inText) {
  if (inTextInputType === constants.kInputText_Api) {
    return {
      type: constants.kAction_EditApiURL,
      text: inText
    };
  } else if (inTextInputType === constants.kInputText_Xpath) {
    return {
      type: constants.kAction_EditXPath,
      text: inText
    };
  }
}

export default textInputEditedAction;