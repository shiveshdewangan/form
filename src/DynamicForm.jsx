import React, { Component } from "react";
import InputTextField from "./InputTextField";
import TextAreaField from "./TextAreaField";
import DropdownSelect from "./DropdownSelect";

class DynamicForm extends Component {
  state = {
    fields: [
      {
        placeholder: "Purpose of loan",
        name: "name",
        input_type: "dropdown",
        required: true,
        values: [
          "Home Loan",
          "Business Loan",
          "Working Capital",
          "Personal Loan",
          "Education Loan"
        ]
      },
      {
        placeholder: "Name",
        name: "remaining values",
        input_type: "big_text",
        required: true
      },
      {
        name: "name",
        placeholder: "You name goes here",
        input_type: "text",
        required: true
      },
      {
        name: "bday",
        placeholder: "Date of birth",
        input_type: "date",
        required: true
      }
    ],
    error: null,
    name: ""
  };

  submitForm = (event) => {
    const { fields, ...inputFields } = this.state;
    console.log(inputFields);
    event.preventDefault();
  };

  _handleChange = (event) => {
    console.log(this.state);
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: [event.target.value]
    });
    console.log(this.state);
  };

  render() {
    const { fields } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        {fields.map((form, index) => {
          if (form.input_type === "text") {
            return (
              <>
                <label>{form.name}</label>
                <InputTextField
                  name={form.name}
                  placeholder={form.placeholder}
                  required={form.required}
                  type={form.input_type}
                  _handleChange={this._handleChange}
                  key={index}
                  value={fields[index].name}
                />
              </>
            );
          }
          if (form.input_type === "date") {
            return (
              <>
                <label>{form.name}</label>
                <InputTextField
                  name={form.name}
                  placeholder={form.placeholder}
                  required={form.required}
                  type={form.input_type}
                  _handleChange={this._handleChange}
                  key={index}
                  value={fields[index].name}
                />
              </>
            );
          }
        })}
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default DynamicForm;
