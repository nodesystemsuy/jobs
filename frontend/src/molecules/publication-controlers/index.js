import React, { Fragment } from "react";


import "./styles.css";

export default function PublicationControlers(props) {
  const {  } = props;

  return (
    <Fragment>
<div className="w-100 h-auto h-pr-fl-ma small c-br-1 c-bg-9">

    <div className="w-25 h-auto h-pr-fr-ma c-p-1 b-s-b-b">
        <div className="w-100 h-auto h-pr-fl-ma c-bg-8 c-br-1 ">
            <label
                className="w-100 checkbox c-br-1 b-s-b-b h-e flexbox c-p-1 d-i-f checkbox-checkbox">
                <input
                    formControlName="termsConditions"
                    name="termsConditions"
                    type="checkbox"
                    className="h-pr-fl-ma "/>
                <div className="checkbox_indicator small black"></div>
                <div className="w-auto h-auto h-pr-fl-ma small">
                    <span className="checkbox-text h-pr-fl-ma  c-f-1 p-l-5px small ">SELECCIONAR TODO</span>
                </div>
            </label>
        </div>
    </div>
    <div className="w-auto h-auto h-pr-fr-ma c-p-1  b-s-b-b">
        <div
            className="w-100 h-auto flexbox h-pr-fl-ma c-p-1  c-p h-e small c-bg-8 c-br-1 ">
            <div className="w-20 h-auto h-pr-fl-ma t-a-c">
              <i className="fas fa-trash small p-l-5px p-r-5px c-inh"></i>
          </div>
            <div className="w-80 h-auto h-pr-fl-ma c-f-1 p-l-10px p-r-10px small t-a-l c-ing ">ELIMINAR</div>

        </div>
    </div>
    <div className="w-auto h-auto h-pr-fr-ma c-p-1  b-s-b-b">
      <div
          className="w-100 h-auto flexbox h-pr-fl-ma c-p-1  c-p h-e small c-bg-8 c-br-1 ">
          <div className="w-20 h-auto h-pr-fl-ma t-a-c">
            <i className="fas fa-check-circle small p-l-5px p-r-5px c-inh"></i>
        </div>
          <div className="w-80 h-auto h-pr-fl-ma c-f-1 p-l-10px p-r-10px small t-a-l c-ing ">FINALIZAR</div>

      </div>
  </div>

</div>
</Fragment>
  );
}