import React, { Fragment } from "react";


import "./styles.css";

export default function PersonFormRegister(props) {
  const { Btn, Text, children,  } = props;

  return (
    <Fragment>
{/* ?

? ██████  ███████  ██████  ██ ███████ ████████ ███████ ██████      ██    ██ ███████ ███████ ██████ 
? ██   ██ ██      ██       ██ ██         ██    ██      ██   ██     ██    ██ ██      ██      ██   ██ 
? ██████  █████   ██   ███ ██ ███████    ██    █████   ██████      ██    ██ ███████ █████   ██████  
? ██   ██ ██      ██    ██ ██      ██    ██    ██      ██   ██     ██    ██      ██ ██      ██   ██ 
? ██   ██ ███████  ██████  ██ ███████    ██    ███████ ██   ██      ██████  ███████ ███████ ██   ██

? */}
<form

  className="w-80 r-h-c c-p-1 of-hidden b-s-b-b h-auto h-pr-fl-ma"
  
>
  <div className="w-100 b-s-b-b of-hidden h-auto h-pr-fl-ma c-bg-10 c-br-1 c-p-1">
    <div className="w-50 b-s-b-b of-hidden d-i-f h-auto h-pr-fl-ma ">
      <Btn
        theme="skyblue"
        text="Personas"
        className="w-100 h-pr-fl-ma"
        className="w-100 h-auto h-pr-fl-ma c-br-1 b-s-b-b c-br-1 t-a-c c-p"
        Type="button"
      ></Btn>
    </div>
    <div className="w-50 h-auto of-hidden h-e b-s-b-b h-pr-fl-ma">
      <Btn
        text="Empresas"
        className="w-100 h-pr-fl-ma bg-none"
       
        className="w-100 h-auto h-pr-fl-ma c-br-1 bg-none b-s-b-b c-br-1 t-a-c c-p"
        Type="button"
      ></Btn>
    </div>
  </div>

  {/* NOMBRE Y APELLIDO (TEXTO) */}
  <div className="w-100 b-s-b-b h-auto h-pr-fl-ma">
    <div className="w-50 b-s-b-b h-auto h-pr-fl-ma">
      <Text text="Ingrese su Nombre:" className="f-w-bo" size="nano"></Text>
    </div>
    <div className="w-50 b-s-b-b h-auto h-pr-fl-ma">
      <Text text="Ingrese su Apellido:" className="f-w-bo" size="nano"></Text>
    </div>
  </div>
  {/* NOMBRE Y APELLIDO (INPUTS) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <div className="w-50 h-auto h-pr-fl-ma">
      <label
        className="InputContainer left c-br-2 black h-pr-fl-ma of-hidden text small w-100"
      >
        <div
          className="InputIconLeft flex-auto br-left b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black"
        >
          <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-user-circle"></i>
        </div>

        <div className="Input flex-auto h-pr-fl-ma">
          <input
            formControlName="name"
            name="name"
            placeholder="Nombre"
            type="text"
      
            className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
          />{{ children }}
        </div>
      </label>
    </div>
    <div className="w-50 h-auto h-pr-fl-ma">
      <label
        className="InputContainer right c-br-2 black h-pr-fl-ma of-hidden text small w-100"
      >
        <div className="Input flex-auto h-pr-fl-ma">
          <input
            formControlName="lastname"
            name="lastname"
            placeholder="Apellido"
            type="text"
          
            className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
          />{{ children }}
        </div>
      </label>
    </div>
  </div>
  {/* NICKNAME Y DATE (TEXTO) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <div className="w-50 h-auto h-pr-fl-ma">
      <Text text="Nombre de usuario" className="f-w-bo" size="nano"></Text>
    </div>
    <div className="w-50 h-auto h-pr-fl-ma">
      <Text text="Fecha de nacimiento:" className="f-w-bo" size="nano"></Text>
    </div>
  </div>
  {/* NICKNAME Y DATE (INPUTS) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <div className="w-50 h-auto h-pr-fl-ma">
      <label
        className="InputContainer left c-br-2 black h-pr-fl-ma of-hidden text small w-100"
      >
        <div
          className="InputIconLeft flex-auto br-left b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black"
        >
          <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-at"></i>
        </div>

        <div className="Input flex-auto h-pr-fl-ma">
          <input
            formControlName="nickName"
            name="nickName"
            placeholder="Nombre"
            type="text"
            className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
          />{{ children }}
        </div>
      </label>
    </div>
    <div className="w-50 h-auto h-pr-fl-ma">
      <label
        className="InputContainer right c-br-2 black h-pr-fl-ma of-hidden text small w-100"
      >
        <div className="Input flex-auto h-pr-fl-ma">
          <input
            formControlName="birth_date"
            name="birth_date"
            placeholder=""
            type="date"
            className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
          />{{ children }}
        </div>
      </label>
    </div>
  </div>
  {/* EMAIL (TEXTO) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Text text="Ingrese su email:" className="f-w-bo" size="nano"></Text>
  </div>
  {/* EMAIL (INPUT) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    {/* Codigo echo en reunión */}
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
          formControlName="email"
          name="email"
          placeholder="Email"
          type="email"
          className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
        />{{ children }}
      </div>
    </label>
    {/* Codigo echo en reunión */}
  </div>
  {/* PASSWORD (TEXTO) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <Text className="f-w-bo" text="Ingrese su password:" size="nano"></Text>
  </div>
  {/* PASSWORD (INPUT) */}
  <div className="w-100 h-auto h-pr-fl-ma">
    <label
      className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100"
    >
      <div
        className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black"
      >
        <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-asterisk"></i>
      </div>

      <div className="Input flex-auto h-pr-fl-ma">
        <input
          formControlName="password"
          name="password"
          placeholder="Password"
          type="password"
          className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"
        />{{ children }}
      </div>
    </label>
  </div>
  {/* DESLIGUE DE RESPONSABILIDAD (TEXTO) */}
  <div className="w-100 h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto flexbox h-pr-fl-ma">
      <div className="w-30 flex-auto h-5vh h-pr-fl-ma">
        <div className="w-auto c-br-1 h-auto h-pr-fl-ma info">
          <label className="checkbox flexbox c-p-1 d-i-f checkbox-checkbox">
            <input
              formControlName="termsConditions"
              name="termsConditions"
              type="checkbox"
              className="h-pr-fl-ma"
            />
            <div className="checkbox_indicator nano info"></div>
            <span className="checkbox-text nano h-pr-fl-ma c-f-1 p-l-5px"
            >Acepto</span
            >
          </label>
        </div>
      </div>
      <div className="w-70 flex-auto h-pr-fl-ma">
        <Text
          className="f-w-bo"
          size="nano"
          text="Entiendo y acepto todas las políticas, términos y condiciones de uso."
        ></Text>
      </div>
    </div>
    <Btn
      theme="success"
      IconLeft="fas fa-user-circle"
      className="w-100 r-h-c c-p-1"
      size="normal"
      text="Registrarse"
    ></Btn>
  </div>
</form>
</Fragment>
  );
}