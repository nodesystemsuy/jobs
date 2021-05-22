import React, { Fragment } from "react";


import "./styles.css";

export default function Loader(props) {
  const {  } = props;

  return (
    <Fragment>
<div className="w-100 h-100 p-a z-i-99 bg-black-node-o-90">
  <div className="w-and-h-125px centered ">
      <div className="w-100 h-100 h-pr-fl-ma a-c-s-jobs">
          <div className="w-100 h-100 h-pr-fl-ma circle c-bg-9 of-visible  a-all-r-s-jobs ">

              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-60 of-visible c-p-2 h-pr-fl-ma centered"
                  viewBox="0 0 568.3 815.6">
                  <path
                      className="c-fill-white a-j-r-jobs"
                      d="M568.3,0V540.4q0,134.7-70.7,205.2t-198.8,70c-92.1,0-165.1-25.5-218.3-76.4S0,614.2,0,516.8H217.9q0,100.1,70.7,100,59.5,0,59.6-76.4V0Z"/>
                  <polygon
                      className="c-fill-skyblue a-t-r-jobs"
                      points="220.9 0 0 220.9 0 0 220.9 0"/>

              </svg>
          </div>
      </div>
      <div className="w-100 h-auto h-pr-fl-ma m-t-20px">
        <div className="w-auto h-auto h-pr-fl-ma c-p-1 c-br-1 t-a-c c-bg-9 c-f-1 small r-h-c">
          <span className="w-100 h-auto h-pr-fl-ma small">CARGANDO</span>
          <span className="w-100 h-auto h-pr-fl-ma nano">Porfavor, espere...</span>

        </div>

      </div>
  </div>


</div>
 </Fragment>
 );
}