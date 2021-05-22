import React, { Fragment } from "react";

import "./styles.css";

export default function HomeInfoDate(props) {
  const { text, theme, TimeSize, Time, className, Icon } = props;

  return (
    <Fragment>

<div className={` w-100 max-h-20 ${theme} h-e c-p c-br-1 m-b-5px c-p-1 h-pr-fl-ma `}>
  <div className={` w-100 h-auto ${className} h-pr-fl-ma t-a-c `}>
    <i className={` ${ Icon } `}></i>
    {Time && <span  className={` c-inh  ${TimeSize} `}>{Time}</span>}
  </div>
  <div className={` w-100 h-auto c-inh h-pr-fl-ma ${className} t-a-c `}>
    {text}
  </div>
</div>
</Fragment>
  );
}
