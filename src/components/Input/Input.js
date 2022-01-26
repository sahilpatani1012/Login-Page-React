import React from "react";

const Input = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoComplete="off"
      />
    </React.Fragment>
  );
};

export default Input;
