import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import TopBox from './TopBox';
import BottomBox from './BottomBox';


class MainPage extends React.Component{
  constructor(){
    super();
    this.state={
      isApiCallHappening:false,
      apiURL : "",
      xpath : "",
      jsonText:""
    }
  }

  render(){
    return (
      <div className='MainContainerBox'>
        <TopBox
        onSubmitClick={ ()=>{this.handleClickOnSubmit()} }
        isApiCallHappening = {this.state.isApiCallHappening} 
        onInputTextChange = { (e)=>{this.handleInputTextChange(e)}  }
        />
        <BottomBox 
        jsonText = {this.state.jsonText}/>
      </div>
    );
  }

  handleClickOnSubmit() {
    if (this.state.apiURL.length <= 0) {
      alert("Please enter a proper URL");
    } else {
      alert("will call for URL " + this.state.apiURL);
      axios.get("/makeapicall?url=" + encodeURIComponent(this.state.apiURL) + "")
        .then(res => {
          console.log("Response from api call is : ", res);
          this.setState({
            jsonText:res
          });
        });
    }
     
  }

  handleInputTextChange(e){    
    if(e.currentTarget.id === 'API Endpoint'){
      this.setState({
        apiURL : e.currentTarget.value
      });
    }else if(e.currentTarget.id === 'Array xPath'){
      this.setState({
        xpath : e.currentTarget.value
      });
    }
  }

}

window.onload = ()=>{
  ReactDOM.render(<MainPage/>,document.getElementById('main'));
}

export default MainPage;