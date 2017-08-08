import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import axios from 'axios';


// import TopBox from './TopBox';
import BottomBox from './BottomBox';
import InputWithTitle from './InputWithTitle';
import MyButton from './MyButton';
import buttonClickedAction from '../actions/buttonClicked'
import constants from '../constants/constants'



class MainPage extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     isApiCallHappening:false,
  //     apiURL : "",
  //     xpath : "",
  //     jsonResponseDict:"",
  //     imageURLs : []
  //   }
  // }

  render(){
    return(
      <div className='MainContainerBox'>
      <div className='TopBox'>
        <InputWithTitle labelText="API Endpoint" inputFieldPlaceholderText="Enter here">
        </InputWithTitle>
        <MyButton buttonTitle={constants.kButtonTitle_Api} >
        </MyButton>
        <InputWithTitle labelText="xPath with Format : [path_to_array].key_for_image" inputFieldPlaceholderText="Enter here" >
        </InputWithTitle>
        <MyButton buttonTitle={constants.kButtonTitle_Xpath} >
        </MyButton>
      </div>
      <BottomBox />
      </div>
    );

    // return (
    //   <div className='MainContainerBox'>
    //     <TopBox
    //     onCallApiClick={ ()=>{this.handleClickOnCallApi()} }
    //     onShowImagesClick={()=>this.handleClickOnShowImages()}
    //     isApiCallHappening = {this.state.isApiCallHappening} 
    //     onInputTextChange = { (e)=>{this.handleInputTextChange(e)}  }
    //     />
    //     <BottomBox
    //     jsonResponse = {this.state.jsonResponseDict}
    //     imageURLs = {this.state.imageURLs}
    //     />
    //   </div>
    // );
  }

  mapDispatchToProps(dispatch){
    return {
       onSubmitClick : (inTitle)=>{
        dispatch(buttonClickedAction(inTitle))
       }
    }
  }

  tempMainPage = connect(mapDispatchToProps)(MyButton);

  handleClickOnCallApi() {
    // if (this.state.apiURL.length <= 0) {
    //   alert("Please enter a proper URL");
    // } else {      
    //   axios.get("/makeapicall?url=" + encodeURIComponent(this.state.apiURL) + "")
    //     .then(res => {
    //       console.log("Response from api call is : ", res);
    //       this.setState({
    //         jsonResponseDict:res.data
    //       });
    //     });
    // }     
  }

  handleClickOnShowImages(){
    // if(!this.state.jsonResponseDict){
    //   alert("Please Get result for an api call first");
    //   return;
    // }
    // if(!this.state.xpath || this.state.xpath.length <=0 ){
    //   alert("Please enter a xpath ");
    //   return;
    // }

    // let xpathStr = this.state.xpath;
    // let strsArr = xpathStr.split("].");
    // let arraysPath = strsArr[0].substring(1);
    // let imageURLPath = strsArr[1];

    // let resultJSON = this.state.jsonResponseDict;
    // let dictsArr = resultJSON[arraysPath];
    // let imageURLsArr = [];
    // if(dictsArr.length > 0 && dictsArr[0][imageURLPath]){
    //   dictsArr.forEach(function(element) {
    //     imageURLsArr.push(element[imageURLPath]); 
    //   }, this);      
    //   this.setState({
    //     imageURLs:imageURLsArr
    //   });      
    // }else{
    //   alert("Please enter a valid xpath ");
    //   return;
    // }
  }

  handleInputTextChange(e){    
  //   if(e.currentTarget.id === 'API Endpoint'){
  //     this.setState({
  //       apiURL : e.currentTarget.value
  //     });
  //   }else if(e.currentTarget.id === 'xPath with Format : [path_to_array].key_for_image'){
  //     this.setState({
  //       xpath : e.currentTarget.value
  //     });
  //   }
  }
}

// window.onload = ()=>{
//   ReactDOM.render(<MainPage/>,document.getElementById('main'));
// }

export const tempMainPage;
export default MainPage;