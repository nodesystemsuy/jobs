import React, { Fragment } from "react";

import {Text} from '../../atoms/index.js';
import "./styles.css";

export default function PasswordChange(props) {
  const { Btn, Inp } = props;

  return (
    <Fragment>
{/* ?

! ██████   █████  ███████ ███████      ██████ ██   ██  █████  ███    ██  ██████  ███████ 
! ██   ██ ██   ██ ██      ██          ██      ██   ██ ██   ██ ████   ██ ██       ██      
! ██████  ███████ ███████ ███████     ██      ███████ ███████ ██ ██  ██ ██   ███ █████ 
! ██      ██   ██      ██      ██     ██      ██   ██ ██   ██ ██  ██ ██ ██    ██ ██    
! ██      ██   ██ ███████ ███████      ██████ ██   ██ ██   ██ ██   ████  ██████  ███████                                                                                                     

? */}
<form className="w-80 r-h-c c-p-1 of-hidden b-s-b-b  h-auto h-pr-fl-ma">


  {/* PASSWORD NUEVO (TEXTO) */}
  <div className="w-100 h-auto h-pr-fl-ma">
      <Text text="Ingrese su nueva contraseña" className="f-w-bo" size="nano"></Text>
  </div>
  {/* PASSWORD NUEVO (INPUT) */}
  <div className="w-100 h-auto  h-pr-fl-ma">
      <Inp
          size="small"
          className="w-100"
          IconLeft="fas fa-asterisk"
          theme="black"
          placeholder="Nueva contraseña"></Inp>
  </div>
  {/* REPITA SU NUEVA CONTRASEÑA (TEXTO) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Text text="Repita su nueva contraseña" className="f-w-bo" size="nano"></Text>
</div>
{/* REPITA SU NUEVA CONTRASEÑA (INPUT) */}
<div className="w-100 h-auto m-b-10px h-pr-fl-ma">
    <Inp
        size="small"
        className="w-100"
        IconLeft="fas fa-asterisk"
        theme="black"
        placeholder="Repita su nueva contraseña Password"></Inp>
</div>

  <div className="w-100 h-pr-fl-ma c-p-1">
      <Btn
          theme="alert"
          IconLeft="fas fa-check"
          className="w-100 r-h-c c-p-1"
          size="normal"
          text="Recuperar"></Btn>
  </div>
</form>

</Fragment>
  );
}