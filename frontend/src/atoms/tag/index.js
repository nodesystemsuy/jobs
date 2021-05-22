import React, { Fragment } from "react";


import "./styles.css";

export default function Tag(props) {
  const { Icon, text, } = props;

  return (
    <Fragment>

<div
    className="w-auto h-auto h-pr-fl-ma d-i c-br-1 small d-i c-p h-e c-bg-8 c-p-1 m-3px b-s-b-b">
    <div className="w-auto h-auto h-pr-fl-ma p-l-5px b-s-b-b  p-t-3px b-s-b-b">
        <i className={` ${Icon} c-inh `}></i>
    </div>
    <div className="w-auto h-auto h-pr-fl-ma p-r-5px b-s-b-b p-l-5px c-f-1 small p-t-1px b-s-b-b b-s-b-b">{text}</div>
      <div className="w-and-h-20px h-e c-p c-br-1 c-bg-8 h-pr-fl-ma ">
        <i className="fas fa-times c-inh  centered"></i></div>

</div>
</Fragment>
  );
}