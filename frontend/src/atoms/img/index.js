import React, { Fragment } from "react";

import "./styles.css";

export default function Img(props) {
  const { children, className, srcImg } = props;

  return (
    <Fragment>


<div className={` image h-auto h-e h-pr-fl-ma ${className} `}>
  <div className="w-100 h-100 h-pr-fl-ma">
    <img className={` ${className} w-100 h-100 h-pr-fl-ma`} src={` ${srcImg} `}  />
    {children}
  </div>
</div>
</Fragment>
  );
}
