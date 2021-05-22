import React, { Fragment } from "react";


import "./styles.css";

export default function Pag(props) {
  const { theme, className, children } = props;

  return (
    <Fragment>
<div
className={`Pag w-auto h-auto ${theme} c-br-1 t-a-c h-pr-fl-ma c-br-1 c-p-1 h-e c-p ${className}`}>
{children}
</div>
</Fragment>
);
}