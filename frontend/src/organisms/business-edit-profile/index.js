import React, { Fragment } from "react";


import "./styles.css";

export default function BusinessEditProfile(props) {
  const { Btn } = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma c-bg-9 c-br-2 c-p-2 of-x-hidden of-y-auto">
    <div className="w-100 h-auto flexbox h-pr-fl-ma d-i-f">
        <div className="w-20 h-auto flex-auto h-pr-fl-ma c-p-1 b-s-b-b ">
            <div className="w-80 m-w-100 h-auto h-pr-fl-ma r-h-c">
                <label for="BusinessImg" className="a-r-1-1 w-50 c-p h-e c-br-2 c-bg-8"></label>
                <input type="file" id="BusinessImg" hidden/>

            </div>
        </div>
        <div className="w-50 h-auto flex-auto d-i-f h-pr-fl-ma c-p-2 c-br-2">
            <div className="w-100 h-auto  h-pr-fl-ma">
                <div className="w-100 h-auto c-f-1 d-i-f c-p-1 f-w-bo"><input
                    className="c-br-1 c-inh c-bg-8 medium c-p-1 c-f-1 br-none"
                    placeholder="EDITAR NOMBRE"/></div>
                <div className="w-100 h-auto c-f-1 c-p-1 normal"><input
                    className="c-br-1 c-bg-8 c-inh normal c-p-1 c-f-1 br-none"
                    placeholder="EDITAR SLOGAN "/></div>
            </div>

        </div>
        <div className="w-30 h-auto flex-auto h-pr-fl-ma c-p-1 b-s-b-b ">
          <div className="w-auto h-auto flexbox h-pr-fl-ma c-p-1 c-bg-8 c-br-1">
          <span className="w-auto flex-auto h-auto h-pr-fl-ma c-p-1  medium"><i className="fas fa-check-circle c-green-node p-r-5px"></i></span>
          <span className="w-auto flex-auto h-auto h-pr-fl-ma c-p-1 nano f-w-bo">Tus cambios se han guardado correctamente</span></div>
          </div>
    </div>

    <div className="w-100 h-auto small h-pr-fl-ma c-p-1">

        <div
            className="w-100 h-auto medium h-pr-fl-ma c-br-1 t-a-c c-p-1 c-f-1 f-w-bo c-bg-10 m-b-10px">
            <i className="fas fa-briefcase p-r-10px c-fuchsia"></i>DATOS BÁSICOS</div>

         {/*
TODO ██ ██████  ███████ ███    ██ ████████ ██ ██████   █████  ██████ 
TODO ██ ██   ██ ██      ████   ██    ██    ██ ██   ██ ██   ██ ██   ██ 
TODO ██ ██   ██ █████   ██ ██  ██    ██    ██ ██   ██ ███████ ██   ██ 
TODO ██ ██   ██ ██      ██  ██ ██    ██    ██ ██   ██ ██   ██ ██   ██ 
TODO ██ ██████  ███████ ██   ████    ██    ██ ██████  ██   ██ ██████ 
        */}
        <div
            className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
            <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
                <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b caution">
                     {/* ? COLOR DEL INDICADOR   */}
                    <i className="fas fa-exclamation c-white centered"></i>
                     {/* ? ICONO DEL INDICADOR  */}
                </div>
            </div>
            <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
                <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c normal">IDENTIDAD</div>

                 {/* TODO |                                  | NOMBRE EMPRESA + RAZÓN SOCIAL |  */}
                <div className=" w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NOMBRE FANTASÍA:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-signature"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Nombre de su empresa"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">RAZÓN SOCIAL:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c far fa-registered"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Razón social"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>

                    </div>
                </div>

                 {/* TODO |                                  | RUT DE EMPRESA + FECHA DE FUNDACIÓN |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">RUT DE SU EMPRESA:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-file-contract"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Ingrese su N° Identificador RUT"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">FECHA DE FUNDACIÓN:</div>

                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-calendar-day"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="date" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/*

TODO ██   ██  ██████  ██████   █████  ██████  ██  ██████  ███████ 
TODO ██   ██ ██    ██ ██   ██ ██   ██ ██   ██ ██ ██    ██ ██      
TODO ███████ ██    ██ ██████  ███████ ██████  ██ ██    ██ ███████ 
TODO ██   ██ ██    ██ ██   ██ ██   ██ ██   ██ ██ ██    ██      ██ 
TODO ██   ██  ██████  ██   ██ ██   ██ ██   ██ ██  ██████  ███████

            */}
        <div
            className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
            <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
                <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b caution">
                     {/* ? COLOR DEL INDICADOR   */}
                    <i className="fas fa-exclamation c-white centered"></i>
                     {/* ? ICONO DEL INDICADOR   */}
                </div>
            </div>
            <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
                <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">HORARIOS</div>
                 {/* TODO |                                  | HORA DE APERTURA + DÍA DE APERTURA |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">HORA APERTURA:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-door-open"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="time" className="h-100 c-inh h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">HORA CIERRE:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-door-closed"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="time" className="h-100 c-inh h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">DE:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-calendar-alt"></i>
                                </div>
                                <div className="Input w-100 flex-auto h-pr-fl-ma">
                                    <div className="select">
                                        <select
                                            className="
              is-default w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                            <option selected hidden>DESDE</option>
                                            <option value="1">SOLO LOS</option>
                                            <option value="2">LUNES</option>
                                            <option value="3">MARTES</option>
                                            <option value="4">MIERCOLES</option>
                                            <option value="5">JUEVES</option>
                                            <option value="6">VIERNES</option>
                                            <option value="7">SABADO</option>
                                            <option value="8">DOMINGO</option>

                                        </select>
                                        <div className="select_arrow"></div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">HASTA:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-calendar-alt"></i>
                                </div>
                                <div className="Input w-100 flex-auto h-pr-fl-ma">
                                    <div className="select">
                                        <select
                                            className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                            <option selected hidden>HASTA</option>
                                            <option value="1">LUNES</option>
                                            <option value="2">MARTES</option>
                                            <option value="3">MIERCOLES</option>
                                            <option value="4">JUEVES</option>
                                            <option value="5">VIERNES</option>
                                            <option value="6">SABADOS</option>
                                            <option value="7">DOMINGOS</option>

                                        </select>
                                        <div className="select_arrow"></div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
         {/*

TODO  ██    ██ ██████  ██  ██████  █████   ██████ ██  ██████  ███    ██ 
TODO  ██    ██ ██   ██ ██ ██      ██   ██ ██      ██ ██    ██ ████   ██ 
TODO  ██    ██ ██████  ██ ██      ███████ ██      ██ ██    ██ ██ ██  ██ 
TODO  ██    ██ ██   ██ ██ ██      ██   ██ ██      ██ ██    ██ ██  ██ ██ 
TODO   ██████  ██████  ██  ██████ ██   ██  ██████ ██  ██████  ██   ████ 

            */}
         {/* TODO |                                  | PAÍS DE ORIGEN + CIUDAD DE ORIGEN |  */}
        <div
            className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
            <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
                <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b caution">
                    <i className="fas fa-exclamation c-white centered"></i>
                </div>
            </div>
            <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
                <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">UBICACIÓN</div>
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">PAÍS DE ORIGEN:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-flag"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="País de origen"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CIUDAD DE ORIGEN:</div>

                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-map-marked-alt"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Ciudad de origen"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                 {/* TODO |                                  | DIRECCIÓN DE EMPRESA |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">BARRIO:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-map"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="text" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CALLE:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-road"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="text" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">INTERSECCIÓN:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-directions"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="text" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NUMERO DE PUERTA:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-door-closed"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="number" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                 {/* TODO |                                  | DIRECCIÓN DE EMPRESA |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">PISO:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-building"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="text" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SUCURSAL:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-store-alt"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="text" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CÓDIGO POSTAL:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-mail-bulk"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="number" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">APARTAMENTO:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-home"></i>
                                </div>

                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input type="text" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/*

TODO  ██████  ██████  ███    ██ ████████  █████   ██████ ████████  ██████ 
TODO ██      ██    ██ ████   ██    ██    ██   ██ ██         ██    ██    ██ 
TODO ██      ██    ██ ██ ██  ██    ██    ███████ ██         ██    ██    ██ 
TODO ██      ██    ██ ██  ██ ██    ██    ██   ██ ██         ██    ██    ██ 
TODO  ██████  ██████  ██   ████    ██    ██   ██  ██████    ██     ██████ 


            */}
        <div
            className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
            <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
                <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b caution">
                    <i className="fas fa-exclamation c-white centered"></i>
                </div>
            </div>
            <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
                <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">CONTACTO</div>
                 {/* TODO |                                  | REDES SOCIALES |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">LINKEDIN:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fab fa-linkedin"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">TWITTER:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fab fa-twitter"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">INSTAGRAM:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fab fa-instagram"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">FACEBOOK:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fab fa-facebook"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-70 m-w-50 h-auto h-pr-fl-ma">
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">TELÉFONO:</div>
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                                <label
                                    className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                    <div
                                        className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                        <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-phone"></i>
                                    </div>
                                    <div className="Input flex-auto h-pr-fl-ma">
                                        <input
                                            placeholder="00-000-000"
                                            type="phone"
                                            className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="w-30 m-w-50 h-auto h-pr-fl-ma ">
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">INTERNO:</div>
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                                <label
                                    className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                    <div className="Input flex-auto h-pr-fl-ma">
                                        <input
                                            placeholder="----"
                                            type="number"
                                            className="h-100 h-pr-fl-ma f-s-inh h-e t-a-c black w-100"/>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="w-50 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-70 m-w-50 h-auto h-pr-fl-ma">
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">TELÉFONO 2:</div>
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                                <label
                                    className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                    <div
                                        className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                        <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-phone"></i>
                                    </div>
                                    <div className="Input flex-auto h-pr-fl-ma">
                                        <input
                                            placeholder="000-000-000"
                                            type="phone"
                                            className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="w-30 m-w-50 h-auto h-pr-fl-ma ">
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">INTERNO:</div>
                            <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                                <label
                                    className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                    <div className="Input flex-auto h-pr-fl-ma">
                                        <input
                                            placeholder="----"
                                            type="number"
                                            className="h-100 h-pr-fl-ma f-s-inh h-e t-a-c  black w-100"/>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">INGRESE SU SITIO WEB:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <label
                                className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                                <div
                                    className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                    <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-globe"></i>
                                </div>
                                <div className="Input flex-auto h-pr-fl-ma">
                                    <input
                                        placeholder="https://nodesystems.uy"
                                        type="url"
                                        className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/*
TODO ██████  ███████ ███████  ██████ ██████  ██ ██████   ██████ ██  ██████  ███    ██ 
TODO ██   ██ ██      ██      ██      ██   ██ ██ ██   ██ ██      ██ ██    ██ ████   ██ 
TODO ██   ██ █████   ███████ ██      ██████  ██ ██████  ██      ██ ██    ██ ██ ██  ██ 
TODO ██   ██ ██           ██ ██      ██   ██ ██ ██      ██      ██ ██    ██ ██  ██ ██ 
TODO ██████  ███████ ███████  ██████ ██   ██ ██ ██       ██████ ██  ██████  ██   ████ 
 */}

        <div
            className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
            <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
                <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b caution">
                    <i className="fas fa-exclamation c-white centered"></i>
                </div>
            </div>
            <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
                <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">DESCRIPCIÓN BREVE</div>

                 {/* TODO |                                  | + TOPOLOGIA DE EMPRESA |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SECTOR DE MERCADO:</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">

                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>Elija su sector</option>
                                        <option value="1">Telecomunicaciones</option>
                                        <option value="2">Informática</option>
                                        <option value="3">Bellas Artes</option>
                                        <option value="4">Pequeños Almacenes</option>
                                        <option value="5">Medianos Almacenes</option>
                                        <option value="6">Grandes Almacenes</option>
                                        <option value="7">Supermercados</option>
                                        <option value="8">Puestos callejeros</option>
                                        <option value="9">Bibliotecas</option>
                                        <option value="10">Restaurantes</option>
                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CANTIDAD DE PERSONAL:</div>

                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">

                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>Mi empresa tiene</option>
                                        <option value="1">1 persona</option>
                                        <option value="2">De 1 a 10 personas</option>
                                        <option value="3">De 11 a 20 personas</option>
                                        <option value="4">De 21 a 30 personas</option>
                                        <option value="5">De 31 a 40 personas</option>
                                        <option value="6">De 41 a 50 personas</option>
                                        <option value="7">De 51 a 100 personas</option>
                                        <option value="8">De 100 a 200 personas</option>
                                        <option value="9">De 200 a 500 personas</option>
                                        <option value="10">Más de 500 personas</option>
                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* TODO |                                  | + DESCRIPCIÓN EMPRESA |  */}
                <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 m-w-100 h-auto h-pr-fl-ma c-p-1">
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">DESCRIPCIÓN</div>
                        <div className="w-100 h-auto h-pr-fl-ma c-f-1  c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                            <textarea
                                maxlength="350"
                                className="w-100 h-10vh c-br-1  h-pr-fl-ma br-none c-bg-9 c-p-1 c-inh"
                                placeholder="Ingrese una descripción de su empresa. (Max 350 caracteres.)"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="w-100 h-auto flex-auto h-pr-fl-ma c-p-2 ">
      <div className="w-40 m-w-100  h-auto flex-auto h-pr-fl-ma r-h-c">
        <Btn
            className="w-100 normal "
            className="w-100 c-p-1"
            theme="success"
            text="GUARDAR CAMBIOS"
            IconLeft="fas fa-save"
    ></Btn>
    </div>
    </div>
</div>
</Fragment>
  );
}
