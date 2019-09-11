/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import MainForm from "./components/MainForm/MainForm";
import { validateForm } from "./form-validation/validateForm";
import "./App.css";

class App extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Form Submitted");
    validateForm(event);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  };

  render() {
    return (
      <MainForm
        type="person_details"
        state={this.state}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default App;

{
  /* <form>
<div className="name-field">
  <label htmlFor="">Name</label>
  <input type="text" name="name" />
</div>
<div className="dob">
  <label htmlFor="">Date of Birth</label>
  <input type="date" name="dob" />
</div>
<div className="gender">
  <label htmlFor="">Gender</label>
  <input type="radio" name="gender" value="male" /> Male
  <input type="radio" name="gender" value="female" /> Female
  <input type="radio" name="gender" value="other" /> Other
</div>
<div className="home-number">
  <label htmlFor="">Home Phone Number</label>
  <input
    type="tel"
    name="home-phone"
    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    required
  />
</div>
<div className="mobile-number">
  <label htmlFor="">Home Phone Number</label>
  <input
    type="tel"
    name="mobile-number"
    pattern="[0][4][0-9]{8}"
    required
  />
</div>
<div className="guardian">
  <div className="name-field">
    <label htmlFor="">Name</label>
    <input type="text" name="name" />
  </div>
  <div className="mobile-number">
    <label htmlFor="">Home Phone Number</label>
    <input
      type="tel"
      name="mobile-number"
      pattern="[0][4][0-9]{8}"
      required
    />
  </div>
</div>
</form> */
}
