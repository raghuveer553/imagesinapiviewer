import constants from '../constants/constants';
import axios from 'axios';

const buttonClickedAction = function(inBtnTitle,inApiURL,inXPath){
  if(inBtnTitle===constants.kButtonTitle_Api){
    //Make api call to get the result here
    if (inApiURL.length > 0) {
      // axios.get("/makeapicall?url=" + encodeURIComponent(inApiURL) + "")
      //   .then(res => {
      //     console.log("Response from api call is : ", res);
      //     return {
      //       type:constants.kAction_ApiResulted,
      //       jsonResponse:res.data
      //     }
      //   });

    } else {
      // return {
      //   type: constants.kAction_ApiButtonClick
      // };
    }
  }else if(inBtnTitle===constants.kButtonTitle_Xpath){
    return{
      type:constants.kAction_XpathButtonClick
    };
  }
}


export default buttonClickedAction;