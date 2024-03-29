import React, { Fragment } from "react";


import "./styles.css";

export default function CreatePost(props) {
  const { Btn } = props;

  return (
    <Fragment>
<div
    className="w-100 h-100 h-pr-fl-ma c-f-1 small c-bg-9 c-f-1 c-br-2 c-p-2 of-x-hidden of-y-auto">
    <div
        className="w-100 h-auto medium h-pr-fl-ma c-br-1 t-a-c c-p-1 c-f-1 success f-w-bo c-bg-10 m-b-10px">
        <i className="fas fa-plus p-r-10px "></i>CREAR POST</div>

    <div
        className="w-100 h-auto h-pr-fl-ma c-br-1 t-a-c c-p-1 c-f-1 f-w-bo m-b-10px c-bg-10 small">
        <div className="w-100 h-auto h-pr-fl-ma ">
            <div
                className="w-auto h-auto flexbox h-pr-fl-ma r-h-c c-bg-8 d-i c-p-1 c-br-1 m-t-10px m-b-10px">
                <i
                    className="w-auto h-auto fas fa-question-circle c-fuchsia h-pr-fl-ma p-l-5px p-r-5px"></i>
                <div className="w-auto h-auto h-pr-fl-ma">
                    ¿Cómo funciona?</div>
            </div>
        </div>

        {/*   !      INICIO ------------------------------------------------------------ | (!) OCULTAR ESTO PARA OCULTAR INSTRUCCIONES | */}

        <div className="w-100 h-auto h-pr-fl-ma  t-a-l c-p-1">
            <div className="w-33 m-w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="flexbox w-auto h-pr-fl-ma m-w-100 d-i">
                    <div className="w-auto d-i h-pr-fl-ma h-auto flex-auto c-p-2 ">

                        <div className="w-and-h-25px c-bg-8 circle b-s-3px b-s-solid b-c-skyblue">
                            <div className="w-auto h-auto h-pr-fl-ma centered ">
                                <span className="c-white ">1</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto h-pr-fl-ma flex-auto">
                        <span className="c-white h-pr-fl-ma w-100">
                            La empresa solicita</span>
                        <span className="c-inh h-pr-fl-ma small">Especifica cuál es la persona ideal que necesitas para el puesto.</span>
                    </div>
                </div>
            </div>
            <div className="w-33 m-w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="flexbox w-auto h-pr-fl-ma m-w-100 d-i">
                    <div className="w-auto d-i h-pr-fl-ma h-auto flex-auto c-p-2 ">

                        <div className="w-and-h-25px c-bg-8 circle b-s-3px b-s-solid b-c-green">
                            <div className="w-auto h-auto h-pr-fl-ma centered ">
                                <span className="c-white ">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto h-pr-fl-ma flex-auto">
                        <span className="c-white h-pr-fl-ma w-100">
                            La empresa ofrece</span>
                        <span className="c-inh h-pr-fl-ma small">Ofrece el cargo que ocupará tu candidato y los recursos acordes a tu solicitud.</span>
                    </div>
                </div>
            </div>
            <div className="w-33 m-w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="flexbox w-auto h-pr-fl-ma m-w-100 d-i">
                    <div className="w-auto d-i h-pr-fl-ma h-auto flex-auto c-p-2 ">

                        <div className="w-and-h-25px c-bg-8 circle b-s-3px b-s-solid b-c-red">
                            <div className="w-auto h-auto h-pr-fl-ma centered ">
                                <span className="c-white ">3</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto h-pr-fl-ma flex-auto">
                        <span className="c-white h-pr-fl-ma w-100">
                            Lo necesitas urgente?</span>
                        <span className="c-inh h-pr-fl-ma small">Selecciona la opción urgente para aparecer primero en las búsquedas!</span>
                    </div>
                </div>
            </div>

        </div>
        {/*   !      FIN ------------------------------------------------------------ | (!) OCULTAR ESTO PARA OCULTAR INSTRUCCIONES | */}

    </div>

    {/*

? ███████ ███████    ███████  ██████  ██      ██  ██████ ██ ████████  █████ 
? ██      ██      ██ ██      ██    ██ ██      ██ ██      ██    ██    ██   ██ 
? ███████ █████      ███████ ██    ██ ██      ██ ██      ██    ██    ███████ 
?      ██ ██      ██      ██ ██    ██ ██      ██ ██      ██    ██    ██   ██ 
? ███████ ███████    ███████  ██████  ███████ ██  ██████ ██    ██    ██   ██

 */}

    <div
        className=" w-100 h-auto h-pr-fl-ma c-bg-10 info f-w-bo c-p-1 c-br-1 t-a-c normal m-b-10px">LA EMPRESA SOLICITA</div>

    {/*
TODO ██████  ███████ ██████  ███████  ██████  ███    ██  █████  ██ 
TODO ██   ██ ██      ██   ██ ██      ██    ██ ████   ██ ██   ██ ██ 
TODO ██████  █████   ██████  ███████ ██    ██ ██ ██  ██ ███████ ██ 
TODO ██      ██      ██   ██      ██ ██    ██ ██  ██ ██ ██   ██ ██ 
TODO ██      ███████ ██   ██ ███████  ██████  ██   ████ ██   ██ ███████ 
 */}

    <div
        className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">

        <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                {/* ? COLOR DEL INDICADOR  */}
                <i className="fas fa-times c-white centered"></i>
                {/* ? ICONO DEL INDICADOR */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">PERSONAL REQUERIDO</div>

            {/* TODO |                                  | DATOS DE ENTREVISTADOR/A | */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SEXO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-restroom"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option value="1">INDIFERENTE</option>
                                        <option value="2">FEMENINO</option>
                                        <option value="3">MASCULINO</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">EDAD:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-calendar-day"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>Seleccionar</option>
                                        <option value="1">INDIFERENTE</option>
                                        <option value="2">PRIMERA EXPERIENCIA LABORAL</option>
                                        <option value="3">+ 18</option>
                                        <option value="4">ENTRE 20 Y 25 AÑOS</option>
                                        <option value="5">ENTRE 25 Y 30</option>
                                        <option value="6">ENTRE 30 Y 40</option>
                                        <option value="7">ENTRE 40 Y 50</option>
                                        <option value="8">ENTRE 50 Y 60</option>
                                        <option value="9">MÁS DE 60</option>
                                        <option value="10">JUBILADOS</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">PRIORIDADES PARA PERSONAS:</div>

                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">

                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-restroom"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option>PROGRAMADOR</option>
                                        <option>MAQUETADOR FRONTEND</option>
                                        <option>DISEÑADOR/A GRÁFICO</option>
                                        <option>ANALISTA EN SISTEMAS</option>
                                        <option>VENDEDOR/A</option>
                                        <option>CARPINTERO/A</option>
                                        <option>MÉDICO NUTRICIONISTA</option>
                                        <option>MÉDICO CIRUJANO</option>
                                        <option>MÉDICO NEFROLOGÍA</option>
                                        <option>MALABARISTA</option>
                                        <option>BARMAN</option>
                                        <option>MESERO/A</option>
                                        <option>CONTADOR/A</option>
                                        <option>ABOGADO/A</option>
                                        <option>FUTBOLISTA</option>
                                        <option>JARDINERO/A</option>
                                        <option>MÉDICO ANESTESISTA</option>
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
TODO ██   ██  █████  ██████  ██ ██      ██ ████████  █████   ██████ ██  ██████  ███    ██ ███████ ███████ 
TODO ██   ██ ██   ██ ██   ██ ██ ██      ██    ██    ██   ██ ██      ██ ██    ██ ████   ██ ██      ██      
TODO ███████ ███████ ██████  ██ ██      ██    ██    ███████ ██      ██ ██    ██ ██ ██  ██ █████   ███████ 
TODO ██   ██ ██   ██ ██   ██ ██ ██      ██    ██    ██   ██ ██      ██ ██    ██ ██  ██ ██ ██           ██ 
TODO ██   ██ ██   ██ ██████  ██ ███████ ██    ██    ██   ██  ██████ ██  ██████  ██   ████ ███████ ███████
 */}

    <div
        className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
        <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                {/* ? COLOR DEL INDICADOR  */}
                <i className="fas fa-times c-white centered"></i>
                {/* ? ICONO DEL INDICADOR */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">HABILITACIONES</div>

            {/* TODO |                                  | DATOS DE ENTREVISTADOR/A | */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-50 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">LIBRETA DE CONDUCIR:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-address-card"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="1">REQUERIDO</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-50 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">VEHICULO PROPIO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-car"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="1">CICLOMOTOR</option>
                                        <option value="2">MOTOCICLETA</option>
                                        <option value="3">AUTO</option>
                                        <option value="4">CAMIÓN PEQUEÑO</option>
                                        <option value="5">CAMIÓN MEDIANO</option>
                                        <option value="6">CAMIÓN GRANDE</option>
                                        <option value="7">CAMIÓN UTILITARIO</option>
                                        <option value="8">CAMIÓN INDUSTRIAL</option>
                                        <option value="9">MICRO BUS</option>
                                        <option value="10">OMNIBUS</option>
                                        <option value="11">MAQUINARIA VIAL</option>
                                        <option value="12">MAQUINARIA AGRICOLA</option>
                                        <option value="13">AERONAVE UNITARIA</option>
                                        <option value="14">AERONAVE COMERCIAL</option>
                                        <option value="15">EMBARCACIÓN PEQUEÑA</option>
                                        <option value="16">EMBARCACIÓN MEDIANA</option>
                                        <option value="17">EMBARCACIÓN GRANDE</option>
                                        <option value="18">EMBARCACIÓN UTILITARIA</option>
                                        <option value="19">EMBARCACIÓN INDUSTRIAL</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

            </div>
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-50 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CARNÉ DE SALUD:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-notes-medical"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="1">REQUERIDO</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-50 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CARNÉ DE MANIPULACIÓN ALIMENTOS:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-apple-alt"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="1">REQUERIDO</option>

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
TODO ███████ ███████ ████████ ██    ██ ██████  ██  ██████  ███████ 
TODO ██      ██         ██    ██    ██ ██   ██ ██ ██    ██ ██      
TODO █████   ███████    ██    ██    ██ ██   ██ ██ ██    ██ ███████ 
TODO ██           ██    ██    ██    ██ ██   ██ ██ ██    ██      ██ 
TODO ███████ ███████    ██     ██████  ██████  ██  ██████  ███████ 
                                                             
 */}

    <div
        className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
        <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                {/* ? COLOR DEL INDICADOR  */}
                <i className="fas fa-times c-white centered"></i>
                {/* ? ICONO DEL INDICADOR */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">ESTUDIOS</div>

            {/* TODO |                                  | DATOS DE ENTREVISTADOR/A | */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NIVEL ACADÉMICO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-graduation-cap"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="1">PRIMARIA INCOMPLETA</option>
                                        <option value="2">PRIMARIA CURSANDO</option>
                                        <option value="3">PRIMARIA COMPLETA</option>
                                        <option value="4">SECUNDARIA INCOMPLETA</option>
                                        <option value="5">SECUNDARIA CURSANDO</option>
                                        <option value="6">SECUNDARIA COMPLETA</option>
                                        <option value="7">UNIVERSIDAD INCOMPLETA</option>
                                        <option value="8">UNIVERSIDAD CURSANDO</option>
                                        <option value="9">UNIVERSIDAD COMPLETA</option>
                                        <option value="10">POST GRADO INCOMPLETO</option>
                                        <option value="11">POST GRADO CURSANDO</option>
                                        <option value="12">POST GRADO COMPLETO</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">IDIOMAS:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-language"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>Seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="0">ESPAÑOL</option>
                                        <option value="0">INGLES</option>
                                        <option value="0">PORTUGUES</option>
                                        <option value="0">ALEMAN</option>
                                        <option value="0">JAPONES</option>
                                        <option value="0">CHINO</option>
                                        <option value="0">FRANCÉS</option>
                                        <option value="0">ITALIANO</option>
                                        <option value="0">RUSO</option>
                                        <option value="0">ARABE</option>
                                        <option value="0">INDÚ</option>
                                        <option value="0">TAILANDÉS</option>

                                    </select>
                                    <div className="select_arrow"></div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NIVEL:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-arrow-circle-up"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>Seleccionar</option>
                                        <option value="0">NO REQUERIDO</option>
                                        <option value="1">BAJO</option>
                                        <option value="2">MEDIO</option>
                                        <option value="3">ALTO</option>
                                        <option value="4">NATIVO</option>

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

    <div
        className=" w-100 h-auto h-pr-fl-ma c-bg-10 success f-w-bo c-p-1 c-br-1 t-a-c normal m-b-10px">LA EMPRESA OFRECE</div>

    {/*
* ███████ ███████     ██████  ███████ ██████  ███████  ██████ ███████ 
* ██      ██      ██ ██    ██ ██      ██   ██ ██      ██      ██      
* ███████ █████      ██    ██ █████   ██████  █████   ██      █████ 
*      ██ ██      ██ ██    ██ ██      ██   ██ ██      ██      ██    
* ███████ ███████     ██████  ██      ██   ██ ███████  ██████ ███████
*/}

    <div
        className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
        <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                {/* ? COLOR DEL INDICADOR  */}
                <i className="fas fa-times c-white centered"></i>
                {/* ? ICONO DEL INDICADOR */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">PUESTO OFRECIDO</div>

            {/* TODO |                                  | CARGO OFRECIDO | */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CARGO OFRECIDO:</div>

                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto br-left b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-home"></i>
                            </div>
                            <div className="Input flex-auto h-pr-fl-ma w-30px  small"><input
                                list="cargos"
                                className="w-100 h-100 black h-pr-fl-ma f-s-inh h-e"
                                name="myBrowser"/></div>
                        </label>
                        <datalist id="cargos">

                            <option value="PROGRAMADOR"></option>
                            <option value="MAQUETADOR FRONTEND"></option>
                            <option value="DISEÑADOR/A GRÁFICO"></option>
                            <option value="ANALISTA EN SISTEMAS"></option>
                            <option value="VENDEDOR/A"></option>
                            <option value="CARPINTERO/A"></option>
                            <option value="MÉDICO NUTRICIONISTA"></option>
                            <option value="MÉDICO CIRUJANO"></option>
                            <option value="MÉDICO NEFROLOGÍA"></option>
                            <option value="MALABARISTA"></option>
                            <option value="BARMAN"></option>
                            <option value="MESERO/A"></option>
                            <option value="CONTADOR/A"></option>
                            <option value="ABOGADO/A"></option>
                            <option value="FUTBOLISTA"></option>
                            <option value="JARDINERO/A"></option>
                            <option value="MÉDICO ANESTESISTA"></option>
                        </datalist>

                    </div>
                </div>
                {/* TODO |                                  | SALARIO OFRECIDO | */}
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SUELDO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">

                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto br-left b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-money-bill-wave"></i>
                            </div>
                            <div className="Input flex-auto h-pr-fl-ma w-30px small"><input type="number" className="w-100 h-100 black h-pr-fl-ma f-s-inh h-e"/></div>
                        </label>

                    </div>
                </div>
                {/* TODO |                                  | FECHA DE COBRO OFRECIDO | */}
                <div className="w-25 m-w-50 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">FECHA DE PAGO:</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <label
                            className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                            <div
                                className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-calendar-day"></i>
                            </div>
                            <div className="Input w-100 flex-auto h-pr-fl-ma">
                                <div className="select">
                                    <select
                                        className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                        <option selected hidden>Seleccionar</option>
                                        <option value="1">PAGO ÚNICO</option>
                                        <option value="2">SEMANAL (CADA 1 SEMANA)</option>
                                        <option value="2">QUINCENAL (CADA 15 DÍAS)</option>
                                        <option value="3">BIMENSUAL (2 VECES AL MES)</option>
                                        <option value="4">TRIMESTRAL (3 VECES AL MES)</option>
                                        <option value="5">MENSUAL (CADA 1 MES)</option>
                                        <option value="3">BIMENSUAL (CADA 2 MESES)</option>
                                        <option value="3">TRIMESTRAL (CADA 3 MESES)</option>
                                        <option value="6">ANUAL (CADA AÑO)</option>

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
    <div
        className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
        <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
            <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                {/* ? COLOR DEL INDICADOR  */}
                <i className="fas fa-times c-white centered"></i>
                {/* ? ICONO DEL INDICADOR */}
            </div>
        </div>
        <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
            <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-br-1 t-a-c normal">DESCRIPCIÓN</div>
            {/* TODO |                                  | SUGERENCIAS PARA DESCRIPCIÓN | */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-100  h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 d-i-f c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-exclamation-circle c-p-1  c-green-node p-l-5px p-r-5px"></i>
                        <div className="w-auto h-auto c-green-node h-pr-fl-ma">Ayudale a tus candidatos a entender lo que buscas.</div>
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
                        <i className="fas fa-brain c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Qué cualidades busca tu empresa?</div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="far fa-clock c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Ofrecen disponibilidad horaria?</div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-chart-bar c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Porqué deberían trabajar en su empresa?</div>

                </div>
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-hand-holding-usd c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Qué incentivos ofrecen a sus empleados?</div>

                </div>

            </div>

            {/* TODO |                                  | DESCRIPCIÓN ENTREVISTA | */}
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-100 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">DESCRIPCIÓN ENTREVISTA</div>
                    <div className="w-100 h-auto h-pr-fl-ma c-f-1  c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                        <textarea
                            maxlength="350"
                            className="w-100 h-10vh c-br-1  h-pr-fl-ma br-none c-bg-9 c-p-1 c-inh"
                            placeholder="Ingrese una descripción de su entrevista. (Max 350 caracteres.)"></textarea>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div
        className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
        <div className="w-10 h-auto flex-auto h-pr-fl-ma">
            <span className="w-and-h-40px bg-red-node c-br-1 h-pr-fl-ma">
                <i className="fas fa-exclamation centered c-white"></i>
            </span>
        </div>
        <div className="w-60 h-auto flex-auto h-pr-fl-ma c-p-1 b-s-b-b">
            <span className="w-100 h-auto h-pr-fl-ma">Haz esta publicación urgente!</span>
            <span className="w-100 h-auto h-pr-fl-ma nano">Las publicaciones urgentes se ven primero en todas las búsquedas!</span>
        </div>
        <div className="w-30 h-auto flex-auto h-pr-fl-ma">
            <Btn
                className="w-100 small "
                className="w-100 c-p-1"
                theme="alert"
                text="URGENTE"
                IconLeft="fas fa-exclamation"
        ></Btn>
        </div>
    </div>
    <div className="w-100 h-auto flex-auto h-pr-fl-ma c-p-2 ">
    <div className="w-40 m-w-100  h-auto flex-auto h-pr-fl-ma r-h-c">
      <Btn
          className="w-100 normal "
          className="w-100 c-p-1"
          theme="success"
          text="CREAR POST"
          IconLeft="fas fa-plus"
  ></Btn>
  </div>
</div></div>
</Fragment>
  );
}