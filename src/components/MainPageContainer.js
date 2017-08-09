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
  the_store.subscribe(()=>{
    let the_state = the_store.getState();
    console.log("Current State is : ", JSON.stringify(the_state));
  });
  render(
    <Provider store={the_store} >
      <MainPageContainer />
    </Provider>, document.getElementById('main')
  );
}
export default MainPageContainer;