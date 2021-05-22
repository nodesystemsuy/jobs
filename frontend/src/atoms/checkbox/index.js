import React, { Fragment } from "react";


import "./styles.css";

export default function Checkbox(props) {
  const { theme, className, size, text } = props;

  return (
    <Fragment>
<div className={` w-auto c-br-1 h-auto h-pr-fl-ma ${theme} ${className}`}>
  <label className={` checkbox checkbox-checkbox ${size} `}>
         <input type="checkbox"  className="r-h-c" />
      <div className={` checkbox_indicator ${size} ${theme}`}></div>
      <span className={` checkbox-text ${size} h-pr-fl-ma c-f-1 p-l-5px`}>{text}</span>
  </label>
  </div>
</Fragment>
);
}