import React from 'react';
import InputWithTitle from './InputWithTitle';
import MyButton from './MyButton'

class TopBox extends React.Component {
  render() {
    return (
      <div className='TopBox'>
        <InputWithTitle labelText="Naveen" inputFieldPlaceholderText="Enter here">
        </InputWithTitle>
        <MyButton buttonTitle="Submit" >
        </MyButton>
      </div>
    );
  }
}

export default TopBox;