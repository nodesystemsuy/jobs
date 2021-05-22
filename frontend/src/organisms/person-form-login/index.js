import React, { Fragment } from "react";


import "./styles.css";

export default function PersonFormLogin(props) {
  const { Btn, Text, Inp} = props;

  return (
    <Fragment>
  
{/* 

? ██       ██████   ██████  ██ ███    ██     ██    ██ ███████ ███████ ██████ 
? ██      ██    ██ ██       ██ ████   ██     ██    ██ ██      ██      ██   ██ 
? ██      ██    ██ ██   ███ ██ ██ ██  ██     ██    ██ ███████ █████   ██████  
? ██      ██    ██ ██    ██ ██ ██  ██ ██     ██    ██      ██ ██      ██   ██ 
? ███████  ██████   ██████  ██ ██   ████      ██████  ███████ ███████ ██   ██

 */}

<form  className="w-80 r-h-c c-p-1 of-hidden b-s-b-b h-auto h-pr-fl-ma">
  {/* EMAIL O USERNAME (TEXTO) LOGIN */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Text text="Ingrese su email o username:" className="f-w-bo" size="nano"></Text>
  </div>
  {/* EMAIL O USERNAME (INPUT) LOGIN */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Inp
      size="small"
      className="w-100"
      IconLeft="fas fa-user-circle"
      theme="black"
      placeholder="Email ó Username"
    ></Inp>
  </div>
  {/* PASSWORD (TEXTO) LOGIN */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Text className="f-w-bo" text="Ingrese su password:" size="nano"></Text>
  </div>
  {/* PASSWORD (INPUT) LOGIN */}
  <div className="w-100 h-auto m-b-10px h-pr-fl-ma">
    <Inp
      type="password"
      size="small"
      className="w-100"
      IconLeft="fas fa-asterisk"
      theme="black"
      placeholder="Password"
    ></Inp>
  </div>
  <div className="w-100 h-pr-fl-ma c-p-1">
    <Btn
      theme="info"
      IconLeft="fas fa-user-circle"
      className="w-100 r-h-c c-p-1"
      size="normal"
      text="Ingresar"
    ></Btn>
</div>

<div className="w-100 h-10vh c-bg-9 h-pr-fl-ma">
  <Btn
  
    size="small"
    theme="black"
    text="Recuperar Contraseña"
    className="centered"
    IconLeft="fas fa-asterisk"
  ></Btn>
</div>
</form>
 </Fragment>
 );
}