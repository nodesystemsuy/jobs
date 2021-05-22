import React, { Fragment } from "react";


import "./styles.css";

export default function BusinessCreateInterview(props) {
  const { Btn } = props;

  return (
    <Fragment>
<div
    className="w-100 h-100 h-pr-fl-ma c-f-1 small c-bg-9 c-f-1 c-br-2 c-p-2 of-x-hidden of-y-auto">
    <div
        className="w-100 h-auto medium h-pr-fl-ma c-br-1 t-a-c c-p-1 c-f-1 info f-w-bo c-bg-10 m-b-10px">
        <i className="fas fa-plus p-r-10px "></i>CREAR ENTREVISTA</div>

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
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                 {/* ? COLOR DEL INDICADOR   */}
                <i className="fas fa-times c-white centered"></i>
                 {/* ? ICONO DEL INDICADOR  */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">DATOS DE ENTREVISTADOR/A</div>

             {/* TODO |                                  | DATOS DE ENTREVISTADOR/A |  */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NOMBRE:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-user-edit"></i>
                            </div>

                            <div className="Input flex-auto h-pr-fl-ma">
                                <input
                                    placeholder="Nombre"
                                    type="text"
                                    className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">APELLIDO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-signature"></i>
                            </div>

                            <div className="Input flex-auto h-pr-fl-ma">
                                <input
                                    placeholder="Apellido"
                                    type="text"
                                    className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CARGO DE ENTREVISTADOR/A:</div>

                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <div className="Input w-100 flex-auto h-pr-fl-ma">
                            <div className="select">
                                <select
                                    className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                    <option selected hidden>Cargo de entrevistador/a</option>
                                    <option value="1">Personal Recursos Humanos</option>
                                    <option value="2">Encargado/a Recursos Humanos</option>
                                    <option value="3">Personal terciarizado</option>
                                    <option value="4">Empresa terciarizada</option>
                                    <option value="5">Gerente general</option>
                                    <option value="6">Empleado/a</option>
                                    <option value="7">Director/a de Marketing</option>
                                    <option value="8">Director/a de Juridica</option>
                                    <option value="9">Director/a de Administración</option>
                                    <option value="10">Director/a de Tesorería</option>
                                    <option value="11">Director/a de Capacitación</option>
                                </select>
                                <div className="select_arrow"></div>
                            </div>
                        </div>
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
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">UBICACIÓN DE LA ENTREVISTA</div>

             {/* TODO |                                  | DIRECCIÓN DE ENTREVISTA |  */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
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
                                <input
                                    placeholder="Calle"
                                    type="text"
                                    className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
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
                                <input
                                    placeholder="Esquina"
                                    type="text"
                                    className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NUMERO PUERTA:</div>
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
                                <input type="number" className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
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
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b success">
                 {/* ? COLOR DEL INDICADOR   */}
                <i className="fas fa-check c-white centered"></i>
                 {/* ? ICONO DEL INDICADOR  */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">HORARIO DE LA ENTREVISTA</div>

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
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
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
TODO  ██████  ██████  ███    ██ ████████  █████   ██████ ████████  ██████ 
TODO ██      ██    ██ ████   ██    ██    ██   ██ ██         ██    ██    ██ 
TODO ██      ██    ██ ██ ██  ██    ██    ███████ ██         ██    ██    ██ 
TODO ██      ██    ██ ██  ██ ██    ██    ██   ██ ██         ██    ██    ██ 
TODO  ██████  ██████  ██   ████    ██    ██   ██  ██████    ██     ██████ 
            */}

     {/* TODO |                                  | EMAIL CONTACTO + WEB / ENLACE ENTREVISTA |  */}
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
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">CONTACTO</div>
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">EMAIL CONTACTO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-envelope"></i>
                            </div>
                            <div className="Input flex-auto h-pr-fl-ma">
                                <input
                                    placeholder="rrhh@empresa.com"
                                    type="email"
                                    className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">WEB / ENLACE ENTREVISTA:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-link"></i>
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
             {/* TODO |                                  | TELÉFONO CONTACTO (1) Y (2) |  */}

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
                 {/* ? COLOR DEL INDICADOR   */}
                <i className="fas fa-exclamation c-white centered"></i>
                 {/* ? ICONO DEL INDICADOR  */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">CONTACTO</div>
             {/* TODO |                                  | SUGERENCIAS PARA DESCRIPCIÓN |  */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-100  h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 d-i-f c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-exclamation-circle c-p-1  c-green-node p-l-5px p-r-5px"></i>
                        <div className="w-auto h-auto c-green-node h-pr-fl-ma">Ayudale a tus candidatos a prepararse para una entrevista</div>
                    </div>
                    <div
                        className="w-100 h-auto h-pr-fl-ma d-i-f c-f-1 c-bg-8 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-arrow-alt-circle-down c-p-1 c-inh p-l-5px p-r-5px"></i>
                        <div className="w-auto h-auto h-pr-fl-ma">Responde a alguna de las siguientes preguntas en tu descripción.</div>
                    </div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-user-tie c-fuchsia p-l-5px p-r-5px"></i>

                        ¿La entrevista será formal o casual?</div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-users c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Será una entrevista grupal o individual?</div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-brain c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Habrá pruebas lógicas o psicológicas?</div>

                </div>
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-hand-peace c-fuchsia p-l-5px p-r-5px"></i>

                        ¿De poder asistir, habrá otra oportunidad?</div>

                </div>

            </div>

             {/* TODO |                                  | DESCRIPCIÓN ENTREVISTA |  */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-100 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">DESCRIPCIÓN ENTREVISTA</div>
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

    <div className="w-100 h-auto flex-auto h-pr-fl-ma c-p-2 ">
      <div className="w-40 m-w-100  h-auto flex-auto h-pr-fl-ma r-h-c">
        <Btn
            className="w-100 normal c-p-1"
            theme="info"
            text="CREAR ENTREVISTA"
            IconLeft="fas fa-plus"
    ></Btn>
    </div>
    </div>


</div>
</Fragment>
  );
}
