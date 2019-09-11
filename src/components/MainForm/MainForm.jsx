import React from "react";

const MainForm = props => {
  console.log(props);

  if (props.type === "person_details")
    return (
      <>
        <form className="form" onSubmit={props.onSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={props.state.firstName}
            onChange={props.onChange}
          />
          <input type="submit" />
        </form>
      </>
    );
};

export default MainForm;
