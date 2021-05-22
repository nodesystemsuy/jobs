import React, { Fragment } from "react";


import "./styles.css";

export default function Alert(props) {
  const { Icon, title, description } = props;

  return (
    <Fragment>
<div className="w-100 h-auto h-pr-fl-ma m-b-5px flexbox c-bg-8 c-br-1 c-p-1">
    <div className="w-10 m-w-20 h-auto h-pr-fl-ma flex-auto ">
        <div className="w-and-h-40px h-pr-fl-ma bg-red-node r-h-c circle">
            <i className="fas centered fa-bell c-white h-pr-fl-ma"></i>
        </div>
    </div>
    <div className="w-90 m-w-80 h-auto h-pr-fl-ma flex-auto">
        <div className="w-100 h-auto flexbox c-bg-10 c-br-1 c-p-1 d-i">
            <div className="w-auto p-r-10px flex-auto ">
                <span className="w-and-h-25px h-pr-fl-ma c-bg-9 c-p-1 b-s-b-b c-br-1 c-p h-e">
                    <i className={` fas fa-user-circle ${Icon} centered c-inh `} ></i>
                </span>
            </div>
            <div className="w-100 h-25px flex-auto p-t-3px b-s-b-b c-f-1 normal">
                {title}
            </div>
            <div className="w-20 flex-auto">
                <span className="w-and-h-25px h-pr-fr-ma c-bg-9 c-p-1 b-s-b-b c-br-1 c-p h-e">
                    <i className="fas fa-times small  centered c-inh"></i>
                </span>
                <span
                    className="w-and-h-25px h-pr-fr-ma c-bg-9 m-r-5px c-p-1 b-s-b-b c-br-1 c-p h-e">
                    <i className="fas fa-eye  small centered c-inh"></i>
                </span>
            </div>
        </div>
        {description && <div  className="w-100 c-bg-9  c-br-1 small c-f-1  c-p-1">
            <span className="max-l-3 c-inh small">{description}
            </span>
        </div> }
    </div>
</div>
</Fragment>
  );
}