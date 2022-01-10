import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <lable htmlFor={props.input.id}>{props.lable}</lable>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
