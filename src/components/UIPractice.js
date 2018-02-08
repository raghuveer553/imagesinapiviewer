import React, { Component } from 'react';

class UIPractice extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (<div> Madala Naveen Raghuveer
      <br />
      <select value={this.state.selectedday} onChange={this.handleChange}>
        <option value="Thursday"> Thursday </option>
        <option value="Friday"> Friday </option>
        <option value="Saturday"> Saturday </option>
      </select>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>);
  }

  handleChange(event) {
    console.log("selected value is : " + event.target.value);
    this.state.selectedday = event.target.value;
    console.log("selected day according to state is : ",this.state.selectedday);
  }
}

export default UIPractice;
