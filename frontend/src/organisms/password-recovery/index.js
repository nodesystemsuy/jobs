import React, { Fragment } from "react";

import {Btn} from '../../atoms/index.js';
import "./styles.css";

export default function PasswordRecovery(props) {
  const { Text } = props;

  return (
    <Fragment>
{/* 

! ██████   █████  ███████ ███████     ██████  ███████  ██████  ██████  ██    ██ ███████ ██████  ██    ██ 
! ██   ██ ██   ██ ██      ██          ██   ██ ██      ██      ██    ██ ██    ██ ██      ██   ██  ██  ██  
! ██████  ███████ ███████ ███████     ██████  █████   ██      ██    ██ ██    ██ █████   ██████    ████  
! ██      ██   ██      ██      ██     ██   ██ ██      ██      ██    ██  ██  ██  ██      ██   ██    ██  
! ██      ██   ██ ███████ ███████     ██   ██ ███████  ██████  ██████    ████   ███████ ██   ██    ██ 
                                                                                                    

*/}

<form


  className="w-80 r-h-c c-p-1 of-hidden b-s-b-b h-auto h-pr-fl-ma"
>
  {/* EMAIL O USERNAME (TEXTO) LOGIN */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Text text="Ingrese su email o username:" className="f-w-bo" size="nano"></Text>
  </div>
  {/* EMAIL O USERNAME (INPUT) LOGIN */}
  <div className="w-100 h-auto m-b-10px h-pr-fl-ma">
    <label
    className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100"
  >
    <div
      className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black"
    >
      <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-envelope"></i>
    </div>

    <div className="Input flex-auto h-pr-fl-ma">
      <input
     
        name="email"
        placeholder="Email ó Username"
        type="email"
        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
      />
    </div>
  </label>
  </div>

  <div className="w-100 h-pr-fl-ma c-p-1">
    <Btn
      theme="alert"
      IconLeft="fas fa-sync"
      className="w-100 r-h-c c-p-1"
      size="normal"
      text="Recuperar"
    ></Btn>
  </div>
</form>
</Fragment>
);
}