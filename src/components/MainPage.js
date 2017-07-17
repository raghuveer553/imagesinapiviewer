import React from 'react';
import ReactDOM from 'react-dom';

import TopBox from './TopBox';
import BottomBox from './BottomBox';


class MainPage extends React.Component{
  render(){
    return (
      <div className='MainContainerBox'>
        <TopBox />
        <BottomBox />
      </div>
    );
  }
}

window.onload = ()=>{
  ReactDOM.render(<MainPage/>,document.getElementById('main'));
}

export default MainPage;