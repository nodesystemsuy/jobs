import React, { Fragment } from "react";

import {Btn} from '../../atoms/index.js';
import { SearchBar, MenuBtn, SearchFilter,} from '../../molecules/index.js';
import {PersonPreviewPost, BusinessSidebar, PersonSidebar, BusinessMenu, PersonMenu,} from '../../organisms/index.js';

export default class Business extends React.Component {
  render() {
    return (
      <Fragment>

{/*
TODO ██████   █████  ███████ ██   ██ ██████   ██████   █████  ██████  ██████ 
TODO ██   ██ ██   ██ ██      ██   ██ ██   ██ ██    ██ ██   ██ ██   ██ ██   ██ 
TODO ██   ██ ███████ ███████ ███████ ██████  ██    ██ ███████ ██████  ██   ██ 
TODO ██   ██ ██   ██      ██ ██   ██ ██   ██ ██    ██ ██   ██ ██   ██ ██   ██ 
TODO ██████  ██   ██ ███████ ██   ██ ██████   ██████  ██   ██ ██   ██ ██████  
 */}

<div class="w-100 h-100vh h-pr-fl-ma of-hidden">
    {/* <div class="NotifyBox w-10 m-w-80 min-w-20 h-auto  z-i-99 c-p-2 bottom right">
        <Notify
            theme="alert"
            title="ERROR EN LA BASE DE LOS GATOS"
            content="ESTA ES UNA NOTIFICACION DE PRUEBA"></Notify>

        <Notify
            theme="info"
            title="Titulo"
            content="CONTENIDO 2 2 2CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1C 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONTENIDO 1 1 1CONONTENIDO 1 1 1"></Notify>
        <Notify title="Titulo"></Notify>
        <Notify theme="caution" title="" title="Titulo"></Notify>
    </div> */}
    {/* * ------------------------ | ESTE ES EL COMPONENTE MODAL (Descomentelo para usarlo) | <Modal title="¿ PREGUNTA ?" content="AASODASODIASDAOSID" buttons="true" confirm="true" delete="true" caution="true" accept="true" cancel="true"></Modal>  */}

    {/* * ------------------------ | ESTE ES EL COMPONENTE LOADER (Descomentelo para usarlo) | <Loader></Loader> */}

    {/* HEADER */}
    <div class="w-100 h-10vh h-pr-fl-ma c-bg-9">
        <div class="w-20  h-100 h-pr-fl-ma">
            <div class="w-35 m-w-80 flexbox centered">
                <div class="w-auto flex-auto h-auto c-p-1 c-br-1 c-bg-10 c-p h-e">
                    <img class="w-100 h-100" src="../../../assets/images/nodejobslogo.svg"/>
                </div>
            </div>
        </div>

        <div class="w-60 h-100 h-pr-fl-ma ">
            <SearchBar></SearchBar>

        </div>
        <div class="w-20 h-100 h-pr-fl-ma">
            <MenuBtn class="centered"></MenuBtn>
            <div class="w-95 a-h-c h-auto p-a m-auto m-t-80px z-i-99 c-br-1 c-bg-9 c-p-1">
                 {/* <BusinessMenu></BusinessMenu> */}
                {/* <PersonMenu></PersonMenu> */}
            </div>
        </div>

    </div>
    {/* BODY */}
    <div class="w-100 h-80vh h-pr-fl-ma c-bg-10">
        <div class="w-20 m-d-n h-100 h-pr-fl-ma  c-p-1">
            {/* TODO | --------------------------- |  SIDEBAR BUSINESS*/}
            <BusinessSidebar></BusinessSidebar>
            {/* TODO | --------------------------- |  SIDEBAR PERSON*/}
             {/*<PersonSidebar></PersonSidebar>*/}
        </div>
        <div class="w-60 m-w-100 h-100 h-pr-fl-ma  c-p-1">
            <div
                class="w-95 d-n m-w-95 b-s-2 a-h-c h-auto p-a m-auto z-i-99 c-br-1 c-bg-9 c-p-1">
                <SearchFilter></SearchFilter>
            </div>
            <router-outlet></router-outlet>

        </div>
        <div class="w-20 m-d-n h-100 h-pr-fl-ma c-p-1">
            <PersonPreviewPost></PersonPreviewPost>
        </div>
    </div>
    {/* FOOTER */}
    <div class="w-100 h-10vh h-pr-fl-ma c-bg-9">
        <div class="w-20 m-d-n h-100 h-pr-fl-ma">
            <div
                class="w-auto flexbox h-auto h-pr-fl-ma c-bg-10 c-p-1 c-br-1 c-f-1 l-h-1em centered">
                <div class="w-100 h-auto h-pr-fl-ma l-h-1em small p-r-5px">Estás en:</div>
                <div class="w-100 h-auto h-pr-fl-ma l-h-1em normal c-fuchsia f-w-bo">BUSINESS</div>
            </div>
            {/*  <div
            class="w-auto flexbox h-auto h-pr-fl-ma c-bg-10 c-p-1 c-br-1 c-f-1 l-h-1em centered">
            <div class="w-100 h-auto h-pr-fl-ma l-h-1em small p-r-5px">Estás en:</div>
            <div class="w-100 h-auto h-pr-fl-ma l-h-1em normal c-skyblue-node f-w-bo">PERSON</div>
        </div> */}
        </div>
        <div class="w-60 m-w-100 h-100 h-pr-fl-ma">
            <div class="w-100 h-10vh h-pr-fl-ma">
                <div class="w-100 h-auto centered h-pr-fl-ma">
                    <div class="w-100 t-a-c h-pr-fl-ma c-f-1 nano c-c-3 f-w-bo">
                        JOBS - Un proyecto de Node Systems
                        <span class="m-d-n c-c-7">Developed by Team Node for NODE WORK - 2020 LATAM
                        </span>
                    </div>
                    <div class="w-100  h-auto h-pr-fl-ma nano c-f-1 c-c-7 f-w-bo">
                        <div class="w-auto flexbox h-auto h-pr-fl-ma r-h-c line-h-0-8em">
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Términos y condiciones
                                <span class="m-d-n">de uso</span>
                            </span>
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Políticas de privacidad
                            </span>
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Políticas de cookies
                            </span>
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Soporte de errores
                            </span>
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Contacto
                            </span>
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Empleo
                            </span>
                            <span class="w-auto h-auto t-a-c flex-auto h-pr-fl-ma p-5px c-p h-e">
                                Glosario
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-20 m-d-n h-100 h-pr-fl-ma">
            <div
                class="w-auto flexbox h-auto h-pr-fl-ma c-bg-10 c-p-1 c-br-1 l-h-1em c-f-1 centered">
                <Btn theme="black" text="SOPORTE TÉCNICO" size="nano" IconLeft="fas fa-bug"></Btn>

            </div>
        </div>
    </div>

</div>
     </Fragment>
     );
   }
 }
 