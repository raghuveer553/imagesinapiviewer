import React from 'react';
import InputWithTitle from './InputWithTitle';
import MyButton from './MyButton'

/**
 * Props for TopBox are
 * 1. onSubmitClick - A function/block passed to TopBox from MainPage
 * 2. isApiCallHappening - Bool to know whether api call is happening or not
 * 3. onInputTextChange - A function/block passed to TopBox from MainPage to handle when textinput changes 
 */

class TopBox extends React.Component {
  render() {
    return (
      <div className='TopBox'>
        <InputWithTitle labelText="API Endpoint" inputFieldPlaceholderText="Enter here" onInputTextChange={this.props.onInputTextChange} >
        </InputWithTitle>
        <InputWithTitle labelText="Array xPath" inputFieldPlaceholderText="Enter here" onInputTextChange={this.props.onInputTextChange} >
        </InputWithTitle>
        <MyButton buttonTitle="Submit" onSubmitClick={this.props.onSubmitClick} isApiCallHappening={this.props.isApiCallHappening}>
        </MyButton>
      </div>
    );
  }
}

export default TopBox;