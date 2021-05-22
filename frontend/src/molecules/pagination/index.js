import React, { Fragment } from "react";


import "./styles.css";

export default function Pagination(props) {
  const {  } = props;

  return (
    <Fragment>
<div className="w-100 h-auto flexbox h-pr-fl-ma c-bg-9 c-br-2 c-p-1">
    <div className="w-15 m-w-20 flex-auto  h-auto h-pr-fl-ma">
        <div
            className="w-auto  h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">Anterior</span>
        </div>
    </div>
    <div className="w-70 m-w-60 flex-auto  h-auto h-pr-fl-ma b-s-b-b">
<div className="r-h-c">
        <div
            className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">1</span>
        </div>
        <div
        className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
        <span className="c-p-1">&hellip;</span>
    </div>
        <div
            className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">2</span>
        </div>
        <div
            className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">3</span>
        </div>
        <div
            className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">4</span>
        </div>
        <div
            className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">5</span>
        </div>
        <div
        className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
        <span className="c-p-1">&hellip;</span>
    </div>
        <div
            className="w-auto h-auto h-pr-fl-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">6</span>
        </div>
      </div>
    </div>
    <div className="w-15 m-w-20 flex-auto  h-auto h-pr-fl-ma">
        <div
            className="w-auto h-auto h-pr-fr-ma c-white m-2px c-bg-8 c-p h-e c-f-1 p-l-10px p-r-10px b-s-b-b c-br-1 c-p-1">
            <span className="c-p-1">Siguiente</span>
        </div>
    </div>

</div>
</Fragment>
  );
}