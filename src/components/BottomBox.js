import React from 'react';
/**
 * Props required for this component are -
 * 1. jsonText - JSON Text which has to be displayed in the left side jsonBox
 * 2. imagesArr - An array of imageURLs, which are to be loaded in the right side box
 */

class BottomBox extends React.Component{
  render(){
    return (
      <div className='BottomBox'>
        <div className='jsonBox'>
        {JSON.stringify(this.props.jsonText)}
        </div>
        <div className='imagesBox'>
        </div>
      </div>
    );
  }
}

export default BottomBox;