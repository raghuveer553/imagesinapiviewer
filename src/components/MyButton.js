import React from 'react';
import { connect } from 'react-redux'
import buttonClickedAction from '../actions/buttonClicked'
import apiResulted from '../actions/apiResulted'
import { kState_ApiURL, kState_Xpath } from '../constants/constants'
import constants from '../constants/constants';
import axios from 'axios';


/**
 * Props possible for MyButton are
 * 1.buttonTitle
 * 2.onSubmitClick - Function/Block passed to MyButton (from MainPage via TopBox)
 * 3.isApiCallHappening - Bool to know whether api call is happening or not
 * 4.currentApiURL - Current value in Enter API textfield 
 * 5.currentXPath - Current value in Enter XPath textfield
 */

class MyButton extends React.Component{
  render(){
      if(this.props.isApiCallHappening){
        return (
          <input type="button" value={this.props.buttonTitle} className='MyButton disabled' onClick={ (e)=>{ this.onSubmitClick(this.props.buttonTitle,this.props.buttonTitle,this.props.currentApiURL,this.props.currentXPath) } }>
          </input>
        );
      }else{
        return (
          <input type="button" value={this.props.buttonTitle} className='MyButton' onClick={ (e)=>{ this.onSubmitClick(this.props.buttonTitle,this.props.currentApiURL,this.props.currentXPath) } }>
          </input>
        );        
      }

  }

  onSubmitClick(inTitle, inApiURL, inXpath){
  if(inTitle === constants.kButtonTitle_Api){
    if (inApiURL.length > 0) {
      axios.get("/makeapicall?url=" + encodeURIComponent(inApiURL) + "")
        .then(res => {
          console.log("Response from api call is : ", res);
          this.props.dispatch(apiResulted("anyresult",res.data));
          // return {
          //   type: constants.kAction_ApiResulted,
          //   jsonResponse: res.data
          // }
        });

    } else {
      this.props.dispatch(buttonClickedAction(inTitle, inApiURL, inXpath));
    }
  }else if(inTitle === constants.kButtonTitle_Xpath){
    this.props.dispatch(buttonClickedAction(inTitle,inApiURL,inXpath));
  } 
}

}


// function mapDispatchToProps(dispatch){
//     return {
//        onSubmitClick : (inTitle,inURL,inXpath)=>{
//         dispatch(buttonClickedAction(inTitle,inURL,inXpath))
//        }
//     }
//   }

  function mapPropsWithSate(state){
    return{
      currentApiURL: state["buttonClickReducer"][kState_ApiURL],
      currentXPath: state["buttonClickReducer"][kState_Xpath]
    }
  }

export default connect(mapPropsWithSate,null)(MyButton);


// export default MyButton;