import constants from '../constants/constants';

const buttonClickedAction = function(inBtnTitle){
  if(inBtnTitle===constants.kButtonTitle_Api){
    return{
      type:constants.kAction_ApiButtonClick
    };
  }else if(inBtnTitle===constants.kButtonTitle_Xpath){
    return{
      type:constants.kAction_XpathButtonClick
    };
  }
}


export default buttonClickedAction;