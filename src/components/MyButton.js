import React from 'react';

/**
 * Props possible for MyButton are
 * 1.buttonTitle
 */

class MyButton extends React.Component{
  render(){
    return (
      <input type="button" value={this.props.buttonTitle} className='MyButton'>
      </input>
    );
  }
}

export default MyButton;