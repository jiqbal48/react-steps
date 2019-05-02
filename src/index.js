import React from "react";
import reactDom from "react-dom";

const SayHello = props => {
  return <h1>Hello {props.name}</h1>;
};

reactDom.render(<SayHello name="goku" />, document.getElementById("root"));
