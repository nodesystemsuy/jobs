import React, { Fragment } from "react";

import "./styles.css";

export default function Btn(props) {
  const { type, theme, size, className, IconLeft, Icon, text, IconRight } = props;

  return (
    <Fragment>
      <button
        type={`${type} `} 
        className={` Btn w-inh h-e h-pr-fl-ma ${theme} ${size} ${className} `}
      >
        {IconLeft && <i className={` BtnIconLeft ${IconLeft}`}></i>}
        <div className="BtnText ">
          {Icon && <i className={` BtnIcon ${Icon} `}></i>}
          {text && <span className="c-inh">{text}</span>}
        </div>
        {IconRight && <i className={` BtnIconRight ${IconRight} `}></i>}
      </button>
    </Fragment>
  );
}
