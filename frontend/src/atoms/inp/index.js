import React, { Fragment } from "react";
import "./styles.css";

import {Btn} from '../index.js';


export default function Inp(props) {
  const { orientation, theme, type, size, Name, className, IconLeft, IconRight, placeholder, aligntext, width, children, SearchBtn,} = props;

  return (
    <Fragment>
<label

    className={` InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden ${orientation} ${theme} ${type} ${size} ${className} ${width} `} >

   {IconLeft && <div
    
        className={`InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh ${size} ${theme} `}>
        <i className={`w-100 h-100 h-pr-fl-ma t-a-c r-h-c ${IconLeft}`}></i>
    </div>}

    <div className="Input flex-auto h-pr-fl-ma">
        <input name={` ${Name} `} placeholder={` ${placeholder} `} type={` ${type} `}
            className={` h-100 h-pr-fl-ma f-s-inh h-e ${aligntext} ${theme} ${className} ${width} `}/>{children}
    </div>
    {IconRight &&
    <div
     
        className={` InputIconRight flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh ${size} ${theme} `}>
        <i className={` w-100 h-100 h-pr-fl-ma t-a-c r-h-c ${IconRight} `}></i>
    </div>}
    {SearchBtn &&
    <Btn
        
        className={` InputIconRight ${size} ${theme} flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh `}>
        <i className={` w-100 h-100 h-pr-fl-ma t-a-c r-h-c ${IconRight} `}></i>
    </Btn>}

</label>
</Fragment>
  );
}