import React, { Fragment } from "react";


import "./styles.css";

export default function PublicationBusiness(props) {
  const { } = props;

  return (
    <Fragment>
<div className="w-100 c-bg-9 flexbox c-br-2 m-b-5px h-auto h-pr-fl-ma h-e c-p">
    <div className="w-5 h-15vh h-pr-fl-ma">
        <div className="w-90 r-v-c h-80 br-t-r-10px br-b-r-10px bg-red-node v-a-m">
            <i className="fas fa-exclamation centered c-white"></i>
        </div>
    </div>
    <div className="w-95 h-100 h-pr-fl-ma">
        <div className="w-100 d-i-f c-p-1 h-auto h-pr-fl-ma">
            <div className="w-20 h-auto c-f-1 small h-pr-fl-ma f-w-bo t-of-e">PUBLICATION BUSINESS</div>
            <div className="w-20 h-auto c-f-1 small h-pr-fl-ma t-of-e t-a-c  c-green-node">0000000</div>
            <div className="w-20 h-auto c-f-1 small h-pr-fl-ma t-of-e t-a-c ">UY</div>
            <div className="w-20 h-auto c-f-1 small h-pr-fl-ma t-of-e t-a-c ">NODESYSTEMS</div>
            <div className="w-20 h-auto c-f-1 small h-pr-fl-ma t-of-e t-a-c ">
              <div className="w-auto h-auto h-pr-fr-ma">
                <label className="checkbox c-br-1 b-s-b-b h-e flexbox c-p-1 d-i-f checkbox-checkbox">
                    <input
                        formControlName="termsConditions"
                        name="termsConditions"
                        type="checkbox"
                        className="h-pr-fl-ma"/>
                    <div className="checkbox_indicator nano black"></div>
                    <span className="checkbox-text nano h-pr-fl-ma c-f-1 p-l-5px">Seleccionar</span >
                </label>
            </div>
          </div>
        </div>
        <div className="w-100 d-i-f h-10vh c-p-1">

            <div className="w-80 m-w-60 h-100 max-lines-4 of-hidden small c-f-1 ">Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Obcaecati, veritatis vitae in quo
                accusantium molensectetur adipisicing elit. Obcaecati, veritatis vitae in quo
                accusantium molestiae quasi corrupti aperiam quibusdam beatae? Deleniti dolorum
                placeat tempora quisquam, eius natus stiae quasi corrupti aperiam quibusdam
                beatae? Deleniti dolorum placeat tempora quisquam, eius natus provident at.
                Obcaecati.</div>
            <div className="w-10 m-w-20 h-100 h-pr-fl-ma c-p-1">
                <div className="w-100 h-100 h-pr-fl-ma small a-i-c c-br-1 c-bg-8 h-e c-p">
                    <div className="w-100 h-auto h-pr-fl-ma flexbox f-w-w r-v-c c-p-1 b-s-b-b small">
                        <i className="w-100 h-auto h-pr-fl-ma fas fa-trash t-a-c c-inh p-t-5px"></i>
                        <span className="w-100 h-auto h-pr-fl-ma t-a-c small c-f-1">Eliminar</span>
                    </div>
                </div>
            </div>
            <div className="w-10 m-w-20 h-100 h-pr-fl-ma c-p-1">
                <div className="w-100 h-100 h-pr-fl-ma small a-i-c c-br-1 c-bg-8 h-e c-p">
                    <div className="w-100 h-auto h-pr-fl-ma flexbox f-w-w r-v-c c-p-1 b-s-b-b small">
                        <i className="w-100 h-auto h-pr-fl-ma fas fa-edit t-a-c c-inh p-t-5px"></i>
                        <span className="w-100 h-auto h-pr-fl-ma t-a-c small c-f-1">Modificar</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-100 d-i-f h-auto f-w-bo h-pr-fl-ma">
            <div className="w-25 h-auto c-f-1 nano h-pr-fl-ma t-of-e c-p-1 c-p">
                <i className="h-pr-fl-ma fas c-p-1 fa-clock"></i>
                <span className="h-pr-fl-ma c-p-1 c-inh">Hace 2 min</span>
            </div>
            <div
                className="w-25 h-auto c-f-1 nano h-pr-fl-ma t-of-e c-p-1 t-a-c f-w-bo c-p c-blue-node ">
                <i
                    className="h-pr-fl-ma fas fa-wheelchair  p-l-10px c-white bg-blue-node c-br-1 c-p-1"></i>
                <span className="h-pr-fl-ma c-p-1 c-inh">Prioridad</span>
            </div>
            <div className="w-25 h-auto c-f-1 nano h-pr-fl-ma t-of-e c-p-1 t-a-c ">
                <span className="h-pr-fl-ma c-p-1 c-inh">Prioridad</span>
            </div>
            <div className="w-25 h-auto c-f-1 nano h-pr-fl-ma t-of-e c-p-1 t-a-c ">
                <span className="h-pr-fl-ma c-p-1 c-inh">Montevideo | Uruguay</span>
            </div>

        </div>
    </div>

</div>
 </Fragment>
 );
}