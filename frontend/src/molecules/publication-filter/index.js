import React, { Fragment } from "react";


import "./styles.css";

export default function PublicationFilter(props) {
  const {  } = props;

  return (
    <Fragment>
<div className="w-100 h-auto h-pr-fl-ma small  c-br-1 c-bg-9">
<div className="w-25 h-auto h-pr-fl-ma c-p-1  b-s-b-b">
    <div className="w-100 h-auto flexbox h-pr-fl-ma c-p-1  c-p h-e normal bg-red-node c-br-1 ">
        <div className="w-80 h-auto h-pr-fl-ma c-f-1 p-l-10px small t-a-l c-white ">URGENTE</div>
        <div className="w-20 h-auto h-pr-fl-ma t-a-c">
            <i className="fas fa-exclamation-circle small c-white"></i></div>
        </div>
    </div>
    <div className="w-25 h-auto h-pr-fl-ma c-p-1 b-s-b-b">
      <div className="w-100 h-auto flexbox h-pr-fl-ma c-p-1 c-p h-e normal c-bg-8 c-br-1 ">
          <div className="w-80 h-auto h-pr-fl-ma c-f-1 p-l-10px small t-a-l c-white ">TODAS</div>
          <div className="w-20 h-auto h-pr-fl-ma t-a-c">
              <i className="fas fa-globe-americas small c-white"></i></div>
          </div>
      </div>
      <div className="w-25 h-auto h-pr-fl-ma c-p-1  b-s-b-b">
        <div className="w-100 h-auto flexbox h-pr-fl-ma c-p-1 c-p h-e normal c-bg-8 c-br-1 ">
            <div className="w-80 h-auto h-pr-fl-ma c-f-1 p-l-10px small t-a-l c-white ">ANTÍGUAS</div>
            <div className="w-20 h-auto h-pr-fl-ma t-a-c">
                <i className="fas fa-history small c-white"></i></div>
            </div>
        </div>
        <div className="w-25 h-auto h-pr-fl-ma c-p-1  b-s-b-b">
          <div className="w-100 h-auto flexbox h-pr-fl-ma c-p-1 c-p h-e normal bg-blue-node c-br-1 ">
              <div className="w-80 h-auto h-pr-fl-ma c-f-1 p-l-10px small t-a-l c-white ">PRIORIDAD</div>
              <div className="w-20 h-auto h-pr-fl-ma t-a-c">
                  <i className="fas fa-wheelchair small c-white"></i></div>
              </div>
          </div>
  </div>
 </Fragment>
 );
}