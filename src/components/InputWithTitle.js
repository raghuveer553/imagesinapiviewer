import React from 'react';

/**
 * Props required for this Component are 
 * 1.labelText
 * 2.inputFieldPlaceholderText
 */
class InputWithTitle extends React.Component{
  render(){
    return (
      <div className='InputWithTitle'>
        <p className='InputWithTitle_Label'>
          {this.props.labelText}
        </p>
        <br/>
        <input className='InputWithTitle_Input' type='text' name='url' placeholder={this.props.inputFieldPlaceholderText}>
        </input>
      </div>
    );
  }
}

export default InputWithTitle;