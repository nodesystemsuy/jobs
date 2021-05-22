import React, { Fragment } from "react";
import "./styles.css";

export default function PersonPreviewPost(props) {
  const { Btn } = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma c-bg-9 c-f-1 c-p-1 c-br-2 ">
    <div className="w-100 h-25 h-pr-fl-ma c-p-1">
        <div className="w-50 h-auto r-h-c h-pr-fl-ma m-b-10px">
            <div className="a-r-16-9 w-100 h-pr-fl-ma c-br-1 c-bg-10"></div>
        </div>
        <div
            className="max-w-90 m-b-10px r-h-c t-a-c flexbox d-i-f h-auto small h-e c-p c-p-1 c-br-1 c-bg-8 h-pr-fl-ma b-s-b-b">

            <div className="w-100 p-l-5px t-of-e c-f-1 t-a-l of-hidden h-auto c-white">
                <div className="p-r-10px t-a-c h-auto h-pr-fl-ma ">
                    <i className="fas  fa-briefcase c-fuchsia-node"></i>
                </div>
                <span className="p-r-10px ">NODE SYSTEMS</span>
            </div>
        </div>
    </div>
    <div className="w-100 h-65 h-pr-fl-ma of-y-auto">
        {/* TODO                            | CARGO | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">CARGO:</span>
            <span className="w-100 h-auto h-pr-fl-ma small c-p-1 c-bg-8 c-br-1">PROGRAMADOR</span>
        </div>
        {/* TODO                            | SEXO REQUERIDO Y EDAD | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">SEXO Y EDAD REQUERIDA:</span>
            <div className="w-100 h-auto h-pr-fl-ma small d-i c-p-1 c-bg-8 c-br-1">
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">INDEFINIDO</span>
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">+</span>
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">21 AÑOS</span>
            </div>
        </div>
        {/* TODO                            | ESTUDIOS | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">ESTUDIOS REQUERIDOS:</span>
            <span className="w-100 h-auto h-pr-fl-ma small c-p-1 c-bg-8 c-br-1">SECUNDARIA INCOMPLETA</span>
        </div>
        {/* TODO                            | DISPONIBILIDAD HORARIA | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">DISPONIBILIDAD HORARIA:</span>
            <span className="w-100 h-auto h-pr-fl-ma small c-p-1 c-bg-8 c-br-1">TIEMPO PARCIAL</span>
        </div>
        {/* TODO                            | DISPONIBILIDAD PARA VIAJAR | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">DISPONIBILIDAD PARA VIAJAR:</span>
            <span className="w-100 h-auto h-pr-fl-ma small c-p-1 c-bg-8 c-br-1">COMPLETA</span>
        </div>
        {/* TODO                            | IDIOMAS | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">IDIOMAS REQUERIDOS:</span>
            <div className="w-100 h-auto h-pr-fl-ma small c-p-1 c-bg-8 c-br-1">
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">ESPAÑOL</span>
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">+</span>
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">PORTUGUES</span>
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">+</span>
                <span className="w-auto h-auto h-pr-fl-ma p-l-5px">INGLES</span>
            </div>
        </div>
        {/* TODO                            | DESCRIPCIÓN | */}
        <div className="w-100 h-auto h-pr-fl-ma m-b-5px">
            <span className="w-100 h-auto h-pr-fl-ma nano c-bg-10 c-p-1 c-br-1 ">DESCRIPCIÓN:</span>
            <div
                className="w-100 h-auto h-pr-fl-ma small c-p-1 c-bg-8 c-br-1 l-h-3em of-hidden ">
                <div className="w-auto h-auto h-pr-fl-ma p-l-5px small max-lines-3 of-hidden">
                    Enostrud aute velit quis anim eu culpa. Ut labore ullamco eiusmod mollit Lorem
                    deserunt fugiat consequat aliquip cillum. Cillum commodo officia magna nisi.
                    Tempor sunt occaecat minim excepteur. Ad deserunt aliqua sint anim anim
                </div>

            </div>
        </div>
    </div>
    <div className="w-100 h-10 h-pr-fl-ma">
        <div className="w-100 h-100 h-pr-fl-ma">
            <div className="w-100 c-p-1 r-v-b h-auto c-white h-pr-fl-ma">
                <Btn
                    className="w-100 small"
                    className="w-100 c-p-1"
                    theme="success"
                    text="POSTULARME"
                    IconLeft="fas fa-plus"></Btn>
            </div>
        </div>
    </div>
</div>
</Fragment>
  );
}