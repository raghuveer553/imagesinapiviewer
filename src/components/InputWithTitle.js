import React from 'react';

/**
 * Props required for this Component are 
 * 1.labelText
 * 2.inputFieldPlaceholderText
 * 3.onInputTextChange - A function/block which will be called when <Input> text value changes
 */
class InputWithTitle extends React.Component{  
  render(){
    return (
      <div className='InputWithTitle'>
        <p className='InputWithTitle_Label'>
          {this.props.labelText}
        </p>
        <br/>
     
        <input className='InputWithTitle_Input' id={this.props.labelText}
         type='text' name='url'
          placeholder={this.props.inputFieldPlaceholderText}
          onKeyUp={ (event)=>{this.tempOnInputTextChange(event)} }
          >
        </input>
      </div>
    );
  }

  tempOnInputTextChange(e){    
    this.props.onInputTextChange(e);
  }
}

export default InputWithTitle;