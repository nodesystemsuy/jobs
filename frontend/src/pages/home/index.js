import React, {Fragment} from "react";

import {Btn, Img} from '../../atoms/index.js';
import {HomeInfoDate} from '../../molecules/index.js';
import {GuestPublications} from '../../organisms/index.js';


import "./styles.css";

export default function HomePage(props){
    const {
        
     
    } = props;
  
    return (
      <Fragment>
<div className="w-80vw c-bg-10 h-80vh of-h h-pr-fl-ma of-hidden centered c-br-4">
  <div className="w-100 d-n m-d-b h-10vh c-bg-9 h-pr-fr-ma m-b-0px">

    <div className="w-20 m-w-40 h-100 h-pr-fl-ma c-p-2">
      <div className="h-auto r-v-c h-pr-fl-ma">
      <div className="w-100 h-auto h-pr-fl-ma">
        <Img
          src="../../../../assets/images/nodejobslogo.svg"
          alt="node img"
          className="h-auto r-h-c c-p-1 c-bg-9 c-br-1 m-l-20px w-70"
        />
      </div></div>
    </div>
    <div className="w-80 m-w-60 h-auto h-pr-fr-ma r-v-c c-p-1">
      <div className="w-auto h-auto h-pr-fr-ma m-r-10px">
        <Btn
     
          text="Registro"
          IconLeft="fas fa-user-circle"
          theme="success"
          size="small"
          className="m-5px h-e h-pr-fr-ma"
        ></Btn>
        <Btn
        
          text="Login"
          IconLeft="fas fa-sign-in-alt"
          theme="info"
          size="small"
          className="m-5px h-e h-pr-fr-ma"
        ></Btn>
      </div>


  </div>
      </div>
  <div className="w-70 m-d-n h-100 h-pr-fl-ma">
    <div className="w-100 h-10 h-pr-fl-ma c-bg-8">
      <div className="w-20 h-auto h-pr-fl-ma c-p-2">
        <div className="w-100 h-auto h-pr-fl-ma">
          <Img
            src="../../assets/images/nodejobslogo.svg"
            alt="node img"
            className="h-auto r-h-c c-p-1 c-bg-9 c-br-1 m-l-20px w-70"
          />
        </div>
      </div>
      <div className="w-80 h-auto h-pr-fr-ma r-v-c c-p-1">
        <div className="w-auto h-auto h-pr-fr-ma m-r-10px">
          <Btn
            
            text="Registro"
            IconLeft="fas fa-user-circle"
            theme="success"
            size="small"
            className="m-5px h-e h-pr-fr-ma"
          ></Btn>
          <Btn
      
            text="Login"
            IconLeft="fas fa-sign-in-alt"
            theme="info"
            size="small"
            className="m-5px h-e h-pr-fr-ma"
          ></Btn>
        </div>
      </div>
    </div>
    {/* SECTOR IZQUIERDO */}
    <div className="w-100 h-80 h-pr-fl-ma c-bg-9">
      <div className="w-20 h-100 normal h-pr-fl-ma c-p-1 c-bg-9">
        <div className="w-100 h-70 h-pr-fl-ma">
          <HomeInfoDate
            Time="21:05"
            theme="black"
            TimeSize="big"
            className="c-f-4 small"
          ></HomeInfoDate>
          <div
            className="m-b-3px w-100 h-auto of-hidden nano f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 h-pr-fl-ma black"
          >
            <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
              <i className="c-bg-9 c-br-1 fas fa-clock c-p-1 m-r-5px"></i>
              <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                19:05 | Argentina</span
              >
            </div>
          </div>
          <div
            className="m-b-3px w-100 h-auto of-hidden nano f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 h-pr-fl-ma black"
          >
            <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
              <i className="c-bg-9 c-br-1 fas fa-clock c-p-1 m-r-5px"></i>
              <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                19:05 | Colombia
              </span>
            </div>
          </div>
          <div
            className="m-b-3px w-100 h-auto of-hidden nano f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 h-pr-fl-ma black"
          >
            <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
              <i className="c-bg-9 c-br-1 fas fa-clock c-p-1 m-r-5px"></i>
              <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                19:05 | Ecuador
              </span>
            </div>
          </div>
          <div
            className="m-b-3px w-100 h-auto of-hidden nano f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 h-pr-fl-ma black"
          >
            <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
              <i className="c-bg-9 c-br-1 fas fa-clock c-p-1 m-r-5px"></i>
              <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                19:05 | El Salvador
              </span>
            </div>
          </div>
          <div
            className="m-b-3px w-100 h-auto of-hidden nano f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 black"
          >
            <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
              <i className="c-bg-9 c-br-1 fas fa-clock c-p-1 m-r-5px"></i>
              <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                19:05 | Ecuador
              </span>
            </div>
          </div>

          <div
            className="m-b-3px w-100 h-auto of-hidden nano f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 black"
          >
            <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
              <i className="c-bg-9 c-br-1 fas fa-clock c-p-1 m-r-5px"></i>
              <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                19:05 | Perú
              </span>
            </div>
          </div>
        </div>
        <div className="w-100 h-30 h-pr-fl-ma">
          <div className="w-100 h-auto r-v-b">
            <div
              className="w-100 b-0px h-auto of-hidden nano m-t-3px f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 black"
            >
              <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
                <i className="c-bg-9 c-br-1 fas fa-cog c-p-1 m-r-5px"></i>
                <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                  SOPORTE TÉCNICO
                </span>
              </div>
            </div>
            <div
              className="w-100 b-0px h-auto of-hidden nano m-t-3px f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 black"
            >
              <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
                <i className="c-bg-9 c-br-1 fas fa-user-circle c-p-1 m-r-5px"></i>
                <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                  Conectados
                </span>
              </div>
            </div>
            <div
              className="w-100 b-0px h-auto of-hidden nano m-t-3px f-w-bo c-p-1 c-br-1 c-p h-e c-f-1 black"
            >
              <div className="c-f-1 h-auto h-pr-fl-ma d-i-f of-hidden">
                <i className="c-bg-9 c-br-1 fas fa-heart c-p-1 m-r-5px"></i>
                <span className="h-pr-fl-ma p-t-3px t-of-e w-auto">
                  NodeSystems.Uy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-100 h-pr-fl-ma c-bg-6">
        <div className="w-100 c-bg-10 m-d-n h-100 h-pr-fl-ma">
          <GuestPublications></GuestPublications>
        </div>
      </div>
    </div>
    {/* PIE DE PAGINA */}
    <div className="w-100 h-10 h-pr-fl-ma c-bg-8">
      <div className="w-100 h-10vh h-pr-fl-ma">
        <div className="w-100 h-auto centered h-pr-fl-ma">
          <div className="w-100 t-a-c h-pr-fl-ma c-f-1 nano c-c-3 f-w-bo">
            JOBS - Un proyecto de Node Systems
            <span className="m-d-n c-c-7"
              >Developed by Team Node for NODE WORK - 2020 LATAM
            </span>
          </div>
          <div className="w-100 h-auto h-pr-fl-ma nano c-f-1 c-c-7 f-w-bo">
            <div className="w-auto flexbox h-auto h-pr-fl-ma r-h-c line-h-0-8em">
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Términos y condiciones
                <span className="m-d-n">de uso</span>
              </span>
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Políticas de privacidad
              </span>
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Políticas de cookies
              </span>
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Soporte de errores
              </span>
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Contacto
              </span>
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Empleo
              </span>
              <span
                className="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e"
              >
                Glosario
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-30 m-w-100 h-100 h-pr-fl-ma">
    <router-outlet></router-outlet>
    <div className="w-100 h-10 c-bg-9 h-pr-fl-ma">
      <Btn
        
        size="small"
        theme="black"
        text="Recuperar Contraseña"
        className="centered"
        IconLeft="fas fa-asterisk"
      ></Btn>
    </div>
  </div>
</div>
</Fragment>
    );
}
