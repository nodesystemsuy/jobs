import React, { Fragment } from "react";


import "./styles.css";

export default function Form(props) {
  const { children, theme, size, className } = props;

  return (
    <Fragment>
  <form
    className={` h-pr-fl-ma c-p-1 c-br-1 default c-p-2  ${theme} ${size} ${className} `} 
  >
 {children}
  </form>
  </Fragment>
  );
}