import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CombinedReducer from '../reducers/combinedReducer';
import MainPage from './MainPage'; //Component

class MainPageContainer extends React.Component{
  render(){
    return <MainPage />
  }
}

window.onload = ()=>{    
  let the_store = createStore(CombinedReducer);
  render(
    <Provider store={the_store} >
      <MainPageContainer />
    </Provider>, document.getElementById('main')
  );
}
export default MainPageContainer;
