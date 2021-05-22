import React, { Fragment } from "react";


import "./styles.css";

export default function BusinessFormLogin(props) {
  const { Btn, Text, Inp } = props;

  return (
    <Fragment>
{/* ?

* ██       ██████   ██████  ██ ███    ██     ██████  ██    ██ ███████ ██ ███    ██ ███████ ███████ ███████ 
* ██      ██    ██ ██       ██ ████   ██     ██   ██ ██    ██ ██      ██ ████   ██ ██      ██      ██      
* ██      ██    ██ ██   ███ ██ ██ ██  ██     ██████  ██    ██ ███████ ██ ██ ██  ██ █████   ███████ ███████ 
* ██      ██    ██ ██    ██ ██ ██  ██ ██     ██   ██ ██    ██      ██ ██ ██  ██ ██ ██           ██      ██ 
* ███████  ██████   ██████  ██ ██   ████     ██████   ██████  ███████ ██ ██   ████ ███████ ███████ ███████ 
? */}
<form className="w-80 r-h-c c-p-1 of-hidden b-s-b-b  h-auto h-pr-fl-ma">

  <div className="w-100 b-s-b-b of-hidden h-auto h-pr-fl-ma">
      <div className="w-50 b-s-b-b of-hidden c-bg-8  h-e h-auto h-pr-fl-ma">
          <Btn
              text="Personas"
              theme="line-l skyblue"
              className="w-100 c-br-1 b-s-b-b br-left t-a-c c-p"></Btn>
      </div>
      <div className="w-50 h-auto of-hidden c-bg-8  h-e b-s-b-b h-pr-fl-ma">
          <Btn
              text="Empresas"
              theme="fuchsia"
              className="w-100 c-br-1 b-s-b-b br-right t-a-c c-p"></Btn>
      </div>
  </div>
  {/* EMAIL O USERNAME (TEXTO) LOGIN */}
  <div className="w-100 h-auto h-pr-fl-ma">
      <Text text="Ingrese su email o username:" className="f-w-bo" size="nano"></Text>
  </div>
  {/* EMAIL O USERNAME (INPUT) LOGIN */}
  <div className="w-100 h-auto h-pr-fl-ma">
      <Inp
          size="small"
          className="w-100"
          IconLeft="fas fa-briefcase"
          theme="black"
          placeholder="Email ó Username"></Inp>
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
          placeholder="Password"></Inp>
  </div>
  <div className="w-100 h-pr-fl-ma c-p-1">
      <Btn
          theme="info"
          IconLeft="fas fa-user-circle"
          className="w-100 r-h-c c-p-1"
          size="normal"
          text="Ingresar"></Btn>
  </div>
</form>
</Fragment>
  );
}