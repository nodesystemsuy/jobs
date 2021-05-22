import React, { Fragment } from "react";

import {SidebarBtn} from '../../atoms/index.js';
import "./styles.css";

export default function PersonSidebar(props) {
  const { Btn, Img} = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma c-bg-9 c-p-1 c-br-2">
    <div className="w-100 h-80 h-pr-fl-ma">
        <div
           
            className="w-40 m-b-5px c-p-1 h-auto h-pr-fl-ma r-h-c">
            <Img className=" c-p h-e c-br-2 a-r-1-1 r-h-c c-bg-8" srcImg=""/>
        </div>

        <div
            className="max-w-90 m-b-10px r-h-c t-a-c flexbox d-i-f h-auto small h-e c-p c-p-1 c-br-1 c-bg-8 h-pr-fl-ma b-s-b-b">

            <div className="w-100 p-l-5px t-of-e c-f-1 t-a-l of-hidden h-auto c-white">
                <div className="p-r-10px   t-a-c h-auto h-pr-fl-ma ">
                    <i className="fas  fa-user-circle c-skyblue-node"></i>
                </div>
                <span className="p-r-10px ">NOMBRE APELLIDO</span>
            </div>
        </div>
        <div className="w-100 h-auto c-p-1 h-pr-fl-ma">

            <SidebarBtn
                Icon="fas fa-bell"
                Counter="4321"
                IconColor="c-red-node"
                CounterColor="bg-red-node"
                Text="Mis Alertas"
                ></SidebarBtn>
            <SidebarBtn
                Icon="fas fa-list-alt"
                Counter="123"
                IconColor="c-green-node"
                CounterColor="bg-green-node"
                Text="Mis Postulaciones"></SidebarBtn>
            <SidebarBtn
                Icon="fas fa-newspaper"
                Counter="245"
                IconColor="c-fuchsia-node"
                CounterColor="bg-fuchsia-node"
                Text="Ver publicaciones"></SidebarBtn>

            <SidebarBtn
                Icon="fas fa-user-edit"
                IconColor="c-skyblue-node"
                Text="Editar Perfil"
                ></SidebarBtn>
            <SidebarBtn
                Icon="fas fa-list-alt"
                IconColor="c-skyblue-node"
                Text="Mis Entrevistas"
                ></SidebarBtn>
            <SidebarBtn
                Icon="fas fa-chart-bar"
                Counter="654"
                IconColor="c-blue-node"
                CounterColor="bg-blue-node"
                Text="Mis Estadisticas"></SidebarBtn>
            <a href="https://nodesystems.uy/" className="c-inh" target="_blank">
                <SidebarBtn
                    Icon="fas fa-user-circle c-yellow-node "
                    CounterColor="bg-yellow-node"
                    Text="Consejos Gratis"
                    className="c-inh"></SidebarBtn>
            </a>
        </div>

    </div>
    <div className="w-100 h-20 h-pr-fl-ma">
        <div className="w-100 h-100 h-pr-fl-ma">
            <div className="w-100 c-p-1 r-v-b h-auto small h-pr-fl-ma">
                <label
                    for="SeleccionarCV"
                    className="w-100 h-auto h-pr-fl-ma small c-p h-e h-pr-fl-ma d-i c-br-1 m-b-10px c-bg-8 c-p-1">
                    <div className="w-auto h-auto h-pr-fl-ma r-h-c">
                    <div className="w-auto h-auto h-pr-fl-ma p-l-5px p-r-5px">
                        <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="w-auto h-auto h-pr-fl-ma">Seleccione su curriculum</div></div>
                    <div className="w-100 h-auto h-pr-fl-ma small t-a-c h-pr-fl-ma  c-br-1  c-bg-9 "><span className="small">Max. 5 MB (PDF | WORD | AOSD)</span></div>

                </label>

                <input
                    className="w-100 nano c-inh m-b-10px "
                    type="file"
                    id="SeleccionarCV"
                    text="Cargar CV"
                    hidden/>
                <Btn
                    className="w-100 small"
                    className="w-100 c-p-1"
                    theme="success"
                    text="SUBIR CV"
                    IconLeft="fas fa-file"></Btn>
            </div>
        </div>
    </div>
</div>
</Fragment>
  );
}