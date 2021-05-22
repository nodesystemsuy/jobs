import React, { Fragment } from "react";


import "./styles.css";

export default function MenuBtn(props) {
  const { } = props;

  return (
    <Fragment>
<div className="w-auto h-auto flexbox f-w-n-w d-i-f l-h-1em h-pr-fl-ma small c-p-1 c-bg-8 c-br-2 c-p h-e">
    <div className="w-auto h-auto flex-auto h-pr-fl-ma p-l-5px "><div className="w-and-h-20px c-bg-9 circle"></div></div>
    <div className="w-auto h-auto flex-auto h-pr-fl-ma p-l-5px p-r-5px c-f-1 normal m-d-n ">MENU</div>
    <div className="w-auto h-auto flex-auto h-pr-fl-ma p-r-5px ">
        <i className="fas fa-bars c-p-1"></i>
    </div>
</div>
</Fragment>
);
}