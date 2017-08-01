import React from 'react';
import InputWithTitle from './InputWithTitle';
import MyButton from './MyButton'

/**
 * Props for TopBox are
 * 1. onCallApiClick - A function/block passed to TopBox from MainPage
 * 2. onShowImagesClick - A functino/block passed to TopBox from MainPage
 * 3. isApiCallHappening - Bool to know whether api call is happening or not
 * 4. onInputTextChange - A function/block passed to TopBox from MainPage to handle when textinput changes 
 */

class TopBox extends React.Component {
  render() {
    return (
      <div className='TopBox'>
        <InputWithTitle labelText="API Endpoint" inputFieldPlaceholderText="Enter here" onInputTextChange={this.props.onInputTextChange} >
        </InputWithTitle>
        <MyButton buttonTitle="CallAPI" onSubmitClick={this.props.onCallApiClick} isApiCallHappening={this.props.isApiCallHappening}>
        </MyButton>
        <InputWithTitle labelText="xPath with Format : [path_to_array].key_for_image" inputFieldPlaceholderText="Enter here" onInputTextChange={this.props.onInputTextChange} >
        </InputWithTitle>
        <MyButton buttonTitle="ShowImages" onSubmitClick={this.props.onShowImagesClick} isApiCallHappening={this.props.isApiCallHappening}>
        </MyButton>
      </div>
    );
  }
}

export default TopBox;