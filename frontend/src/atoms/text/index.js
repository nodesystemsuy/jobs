import React, { Fragment } from "react";


import "./styles.css";

export default function Text(props) {
  const { children, theme, size, className, text } = props;

  return (
    <Fragment>
<div className={` Text w-100 c-p-1 b-s-b-b ${theme} c-f-1 of-h c-br-1 h-pr-fl-ma ${className}`} >
  <span className={` ${size}  c-inh`} >{text} {children} </span>
  </div>
  </Fragment>
  );
}