import React, { Fragment } from "react";

import {SidebarBtn} from '../../atoms/index.js';
import "./styles.css";

export default function BusinessSidebar(props) {
  const {  Btn, Img } = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma c-bg-9 c-p-1 c-br-2">
  <div className="w-100 h-80 h-pr-fl-ma">
    <div  className="w-40 m-b-5px c-p-1 h-auto h-pr-fl-ma r-h-c">
      <Img className=" c-p h-e c-br-2 a-r-1-1 r-h-c c-bg-8" srcImg="" />
    </div>

    <div
      className="max-w-90 m-b-10px r-h-c t-a-c flexbox d-i-f h-auto small h-e c-p c-p-1 c-br-1 c-bg-8 h-pr-fl-ma b-s-b-b">

      <div className="w-100 p-l-5px t-of-e c-f-1 t-a-l of-hidden h-auto  c-white  ">
        <div className="p-r-10px   t-a-c h-auto h-pr-fl-ma ">
          <i className="fas  fa-briefcase c-fuchsia-node"></i>
        </div>
        <span className="p-r-10px ">NODE SYSTEMS</span></div>
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
        Icon="fas fa-newspaper"
        Counter="123"
        IconColor="c-green-node"
        CounterColor="bg-green-node"
        Text="Mis Publicaciones"
  
      ></SidebarBtn>
      <SidebarBtn
        Icon="fas fa-users"
        Counter="245"
        IconColor="c-skyblue-node"
        CounterColor="bg-skyblue-node"
        Text="Ver Candidatos"
   ></SidebarBtn>
      <SidebarBtn
        Icon="fas fa-user-edit"
        IconColor="c-fuchsia-node"
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
          className="c-inh"

        ></SidebarBtn>
      </a>
    </div>

  </div>
  <div className="w-100 h-20 h-pr-fl-ma">
    <div className="w-100 h-100 h-pr-fl-ma">
      <div className="w-100 c-p-1 r-v-b h-auto  c-white h-pr-fl-ma">
        <Btn
        className="w-100 nano  m-b-10px "
        className="w-100 c-p-1 m-b-10px"
        theme="info"
        text="CREAR ENTREVISTA"

        IconLeft="fas fa-list-alt"></Btn>
        <Btn
          className="w-100 small"
          className="w-100 c-p-1"
          theme="success"
          text="CREAR POST"
        
          IconLeft="fas fa-plus"></Btn>
      </div>
    </div>
  </div>
</div>
</Fragment>
  );
}
