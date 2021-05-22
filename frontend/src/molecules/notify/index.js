import React, { Fragment } from "react";


import "./styles.css";

export default function Notify(props) {
  const { theme, content, title} = props;

  return (
    <Fragment>
<div className={` w-100 h-auto h-pr-fl-ma h-e ${theme} c-br-1 c-bg-9 m-2px flexbox c-p-1`}>

    <div className="w-20 h-auto h-pr-fl-ma flex-auto">
      <div className="w-auto h-auto h-pr-fl-ma centered c-p-1 r-h-c">
        <div className="w-and-h-50px bg-black-node-o-30 circle">
            <i className="fas fa-exclamation c-inh centered"></i>
        </div>
      </div>
    </div>

    <div className="w-80 h-auto c-f-1 h-pr-fl-ma flex-auto c-p-1">
        <div className="w-80 h-auto c-f-1 h-auto h-pr-fl-ma t-of-e c-p-1">
        {title}
        </div>
        <div className="w-20 h-auto h-auto h-pr-fl-ma c-p-1">
            <div className="w-and-h-25px h-pr-fr-ma c-br-1 bg-black-node-o-30 c-p h-e">
                <i className="fas fa-times small  c-inh centered"></i>
            </div>
        </div>
        {content && <div  className="w-100 h-auto c-f-1 h-auto small c-br-1 h-pr-fl-ma bg-black-node-o-30 c-p-1">
          <div className="w-100 h-auto h-pr-fl-ma small max-l-3">
            {content}</div>
        </div>}
    </div>

</div>
</Fragment>
  );
}