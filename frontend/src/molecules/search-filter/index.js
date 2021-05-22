import React, { Fragment } from "react";


import "./styles.css";

export default function SearchFilter(props) {
  const { Tag } = props;

  return (
    <Fragment>
<div className="w-100 h-auto h-pr-fl-ma c-f-1 small">

    <div className="w-70 m-w-60 h-auto h-pr-fl-ma c-p-1">

        <div className="w-100 h-auto h-pr-fl-ma  c-br-1 c-bg-8 c-p-1">Buscar palabras claves:</div>

        <Tag Icon="fas fa-code" text="Peluquería"></Tag>
        <Tag Icon="fas fa-cog" text="Barbería"></Tag>
        <Tag Icon="fas fa-cog" text="Estilista"></Tag>
        <Tag Icon="fas fa-cog" text="Electricista"></Tag>
    </div>
    <div className="w-30 m-w-40 h-auto h-pr-fl-ma c-p-1">
        <div className="w-100 h-auto h-pr-fl-ma c-bg-8 c-p-1">
            <select className="w-100 h-auto h-pr-fl-ma c-p-1 c-p h-e">
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p" selected hidden>OFERTAS POR UBICACIÓN</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">TELETRABAJO</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">CERCA DE TI</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">10KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">25KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">50KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">100KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">MÁS DE 100KM</option>
            </select>
        </div>
        <div className="w-100 h-auto h-pr-fl-ma c-bg-8 c-p-1">

            <select className="w-100 h-auto h-pr-fl-ma c-p-1 c-p h-e">
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p" selected hidden>OFERTAS POR TIEMPO</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">CONTRATO A TÉRMINO</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">TRABAJO ÚNICO</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">10KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">25KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">50KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">100KM</option>
                <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">MÁS DE 100KM</option>
            </select>
        </div>
        <div className="w-100 h-auto h-pr-fl-ma c-bg-8 c-p-1">
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">OFERTAS POR SALARIO</div>
            <div className="w-100 h-auto h-pr-fl-ma c-p-1">
                <span className="m-w-100 h-pr-fl-ma f-w-bo ">Salario ofrecido:</span>
                <span className="w-auto h-pr-fl-ma f-w-bo">0,00</span>
                <select className="w-auto h-pr-fl-ma f-w-bo m-l-3px c-p h-e">
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p" selected>USD</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">ARG</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">UYU</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">PYN</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">EUR</option>
                </select>
            </div>
            <input
                type="range"
                min="0"
                max="999999"
                className="w-100 h-auto h-pr-fl-ma c-p h-e"/>

                <select className="w-100 h-auto h-pr-fl-ma c-p-1 c-p h-e">
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p" selected hidden>FECHA DE PAGO</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">TELETRABAJO</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">CERCA DE TI</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">10KM</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">25KM</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">50KM</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">100KM</option>
                    <option className="w-100 h-auto h-pr-fl-ma c-p-1 h-e c-p">MÁS DE 100KM</option>
                </select>
            </div>

        </div>
        <div className="w-100 h-auto h-pr-fl-ma  c-br-1 c-bg-8 c-p-1">Necesitas consejos sobre cómo buscar? haz click aquí</div>
    </div>
    </Fragment>
  );
}