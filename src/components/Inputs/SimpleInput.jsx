import React from "react";

const SimpleInput = props => {
  if (props.type === "text") {
    return <input type="text" />;
  }
};

export default SimpleInput;
