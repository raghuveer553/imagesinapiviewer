import React from 'react';
import { connect } from 'react-redux'
import buttonClickedAction from '../actions/buttonClicked'

/**
 * Props possible for MyButton are
 * 1.buttonTitle
 * 2.onSubmitClick - Function/Block passed to MyButton (from MainPage via TopBox)
 * 3.isApiCallHappening - Bool to know whether api call is happening or not
 */

class MyButton extends React.Component{
  render(){
      if(this.props.isApiCallHappening){
        return (
          <input type="button" value={this.props.buttonTitle} className='MyButton disabled' onClick={ (e)=>{ this.props.onSubmitClick(this.props.buttonTitle) } }>
          </input>
        );
      }else{
        return (
          <input type="button" value={this.props.buttonTitle} className='MyButton' onClick={ (e)=>{ this.props.onSubmitClick(this.props.buttonTitle) } }>
          </input>
        );        
      }

  }
}

function mapDispatchToProps(dispatch){
    return {
       onSubmitClick : (inTitle)=>{
        dispatch(buttonClickedAction(inTitle))
       }
    }
  }

export default connect(null,mapDispatchToProps)(MyButton);


// export default MyButton;