import React, { Fragment } from "react";


import "./styles.css";

export default function PersonEditProfile(props) {
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
              <div className="w-100 h-auto c-f-1 d-i-f c-p-1 f-w-bo"><div
                  className="c-br-1 c-inh c-bg-8 medium c-p-1 c-f-1 br-none"
                  >NOMBRE Y APELLIDO</div></div>
              <div className="w-100 h-auto c-f-1 c-p-1 normal"><input
                  className="c-br-1 c-bg-8 c-inh normal c-p-1 c-f-1 br-none"
                  placeholder="FRASE PERSONAL"/></div>
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
              <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                 {/* ? COLOR DEL INDICADOR  */}
                  <i className="fas fa-times c-white centered"></i>
                 {/* ? ICONO DEL INDICADOR */}
              </div>
          </div>
          <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
              <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c normal">IDENTIDAD</div>

             {/* TODO |                                  | NOMBRE + APELLIDO | */}
              <div className=" w-100 h-auto h-pr-fl-ma c-p-1">
                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">NOMBRE:</div>
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                          <label
                              className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                              <div
                                  className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                  <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-signature"></i>
                              </div>
                              <div className="Input flex-auto h-pr-fl-ma">
                                  <input
                                      placeholder="Ingrese su nombre"
                                      type="text"
                                      className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                              </div>
                          </label>
                      </div>
                  </div>

                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">APELLIDO:</div>
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                          <label
                              className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                              <div
                                  className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                  <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c far fa-registered"></i>
                              </div>
                              <div className="Input flex-auto h-pr-fl-ma">
                                  <input
                                      placeholder="Ingrese su apellido"
                                      type="text"
                                      className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                              </div>
                          </label>
                      </div>

                  </div>
              </div>

             {/* TODO |                                  | CÉDULA DE IDENTIDAD + FECHA DE NACIMIENTO | */}
              <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CÉDULA IDENTIDAD:</div>
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                          <label
                              className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                              <div
                                  className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                  <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-file-contract"></i>
                              </div>

                              <div className="Input flex-auto h-pr-fl-ma">
                                  <input
                                      placeholder="Ingrese su N° Identificador"
                                      type="text"
                                      className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                              </div>
                          </label>
                      </div>
                  </div>
                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">FECHA DE NACIMIENTO:</div>

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
  <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">ESTUDIOS</div>

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
  <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">HABILITACIONES</div>

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
                                 <option value="0">NO TENGO</option>
                                 <option value="1">VIGENTE</option>

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
                                 <option value="0">NO TENGO</option>
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
                                 <option value="0">NO TENGO</option>
                                 <option value="1">VIGENTE</option>

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
                                 <option value="0">NO TENGO</option>
                                 <option value="1">VIGENTE</option>

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
     {/* TODO |                                  | PAÍS DE NACIMIENTO + CIUDAD DE NACIMIENTO | */}
      <div
          className="w-100 h-auto h-pr-fl-ma flexbox f-w-w c-bg-8 c-br-1 m-b-5px c-p-1 b-s-b-b h-e">
          <div className="w-10 m-w-100 m-d-b h-100 flex-auto h-pr-fl-ma c-p-1">
              <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                  <i className="fas fa-times c-white centered"></i>
              </div>
          </div>
          <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
              <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">UBICACIÓN</div>
              <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">PAÍS NATAL:</div>
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                          <label
                              className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                              <div
                                  className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                  <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-flag"></i>
                              </div>

                              <div className="Input flex-auto h-pr-fl-ma">
                                  <input
                                      placeholder="País natal"
                                      type="text"
                                      className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                              </div>
                          </label>
                      </div>
                  </div>
                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CIUDAD NATAL:</div>

                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                          <label
                              className="InputContainer c-bg-3 h-pr-fl-ma c-br-2 of-hidden black text small w-100">
                              <div
                                  className="InputIconLeft flex-auto b-s-b-b f-s-inh h-100 h-pr-fl-ma c-inh small black">
                                  <i className="w-100 h-100 h-pr-fl-ma t-a-c r-h-c fas fa-map-marked-alt"></i>
                              </div>

                              <div className="Input flex-auto h-pr-fl-ma">
                                  <input
                                      placeholder="Ciudad natal"
                                      type="text"
                                      className="h-100 h-pr-fl-ma f-s-inh h-e black w-100"/>
                              </div>
                          </label>
                      </div>
                  </div>
              </div>
             {/* TODO |                                  | DIRECCIÓN DE EMPRESA | */}
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
             {/* TODO |                                  | DIRECCIÓN DE EMPRESA | */}
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
              <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                  <i className="fas fa-times c-white centered"></i>
              </div>
          </div>
          <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
              <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">CONTACTO</div>
             {/* TODO |                                  | REDES SOCIALES | */}
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
                      <div className="w-100 h-auto h-pr-fl-ma">
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

                  </div>

                  <div className="w-50 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma">
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
              <div className="w-40px h-40px h-pr-fl-ma r-h-c circle c-p-1 b-s-b-b alert">
                  <i className="fas fa-times c-white centered"></i>
              </div>
          </div>
          <div className="w-90 m-w-100 m-d-b h-auto flex-auto h-pr-fl-ma  b-s-b-b">
              <div className="c-bg-10 c-fuchsia f-w-bo c-p-1 c-f-1 c-br-1 t-a-c">DESCRIPCIÓN BREVE</div>

             {/* TODO |                                  | + TOPOLOGIA DE EMPRESA | */}
              <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SECTOR OBJETIVO:</div>
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">

                          <div className="Input w-100 flex-auto h-pr-fl-ma">
                              <div className="select">
                                  <select
                                      className="w-100 h-auto black small h-pr-fl-ma c-br-2 br-none c-inh c-p-1 c-p h-e c-f-1 styled-select">
                                      <option selected hidden>Seleccionar</option>
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
 {/* TODO |                                  | + AYUDA DESCRIPCIÓN | */}
             <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <div className="w-100  h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 d-i-f c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-exclamation-circle c-p-1  c-green-node p-l-5px p-r-5px"></i>
                        <div className="w-auto h-auto c-green-node h-pr-fl-ma">Ayudale a las empresas a elegirte.</div>
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

                        ¿Cuáles son tus mejores cualidades?</div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="far fa-clock c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Tienes disponibilidad horaria?</div>

                </div>

                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-chart-bar c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Por qué deberían contratarte?</div>

                </div>
                <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
                    <div
                        className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small c-p-1 c-br-1">
                        <i className="fas fa-diagnoses c-fuchsia p-l-5px p-r-5px"></i>

                        ¿Qué te hace diferente al resto?</div>

                </div>

            </div>
             {/* TODO |                                  | + DESCRIPCIÓN EMPRESA | */}
              <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                  <div className="w-100 m-w-100 h-auto h-pr-fl-ma c-p-1">
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">DESCRIPCIÓN</div>
                      <div className="w-100 h-auto h-pr-fl-ma c-f-1  c-bg-8 c-br-1 f-w-bo c-p-1 normal">
                          <textarea
                              maxlength="350"
                              className="w-100 h-10vh c-br-1  h-pr-fl-ma br-none c-bg-9 c-p-1 c-inh"
                              placeholder="Ingresa una descripción de ti. (Max 350 caracteres.)"></textarea>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
  <div className="w-100 h-auto flex-auto h-pr-fl-ma c-p-2 ">
    <div className="w-40 m-w-100 h-auto flex-auto h-pr-fl-ma r-h-c">
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