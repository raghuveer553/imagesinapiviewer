import React from 'react';
import { connect } from 'react-redux'
import { kState_ApiResponse, kState_Imageurls } from '../constants/constants'

/**
 * Props required for this component are -
 * 1. jsonResponse - JSON Dict which has to be displayed in the left side jsonBox
 * 2. imageURLs - An array of imageURLs, which are to be loaded in the right side box
 */

class BottomBox extends React.Component {
  render() {
    if (this.props.imageURLs && this.props.imageURLs.length > 0) {
      let images = [];
      for(let i=0; i<this.props.imageURLs.length;i++){
        let imageDiv = <img key={i.toString()} src={this.props.imageURLs[i]} alt="Mountain View" style={{width:150, height:150}} ></img> ;
        images.push(imageDiv);
      }      
      return (
        <div className='BottomBox'>
          <div className='jsonBox'>
            {JSON.stringify(this.props.jsonResponse)}
          </div>
          <div className='imagesBox'>
            {images}
          </div>
        </div>
      );
    } else {
      return (
        <div className='BottomBox'>
          <div className='jsonBox'>
            {JSON.stringify(this.props.jsonResponse)}
          </div>
          <div className='imagesBox'>

          </div>
        </div>
      );
    }

  }
}

function mapPropsToState(state){
  return{
    jsonResponse:state["buttonClickReducer"][kState_ApiResponse],
    imageURLs : state["buttonClickReducer"][kState_Imageurls]
  }  
}

export default connect(mapPropsToState,null)(BottomBox);