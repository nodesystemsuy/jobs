import React, { Fragment } from "react";

import "./styles.css";
import {Publication} from '../../molecules/index.js';
import {Btn} from '../../atoms/index.js';

export default function GuestPublications(props) {
  const {  } = props;

  return (
    <Fragment>


<div className="w-100 h-100 c-p-1 r-v-c h-pr-fl-ma">
  <div className="w-100  m-d-n r-h-c of-auto of-x-hidden h-100 h-pr-fl-ma">
    <Publication></Publication>
    <Publication></Publication>
    <Publication></Publication>
    <Publication></Publication>

      <Btn
          text="Ingresar como invitado"
          theme="black"
          IconLeft="fas fa-eye"
          size="small"
          className="r-h-c h-e m-5px"></Btn>
  </div>
</div>
</Fragment>
  );
}
