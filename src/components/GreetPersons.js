import React from "react";

function GreetPersons(props) {
  return (
    <>
      <h4>Hello {props.name}</h4>
      {props.children}
    </>
  );
}

export default GreetPersons;
