import React, { Fragment } from "react";


import "./styles.css";

export default function Candidate(props) {
  const { Nombre, Apellido, Edad, Profesion } = props;

  return (
    <Fragment>
<div className="w-100 h-auto c-f-1 h-pr-fl-ma c-br-1 small m-b-5px h-e c-p c-p-1 c-bg-8">
    <div className="w-100 h-auto flexbox a-i-c f-w-w h-pr-fl-ma">
        <div className="w-10 flex-auto h-auto h-pr-fl-ma">
            <div className="w-and-h-40px flex-auto circle c-bg-9 w-100"></div>
        </div>
        <div
            className="w-25 p-l-5px flex-auto h-auto h-pr-fl-ma small b-s-b-b t-of-e l-h-1em max-l-2 ">
            <div className="w-100 h-auto h-pr-fl-ma">{Nombre}</div>
            <div className="w-100 h-auto h-pr-fl-ma">{Apellido}</div>
        </div>
        <div
            className="w-15 flex-auto h-auto h-pr-fl-ma small b-s-b-b t-of-e l-h-1em max-l-2 ">{Edad}
            AÑOS</div>
        <div
            className="w-30 flex-auto h-auto h-pr-fl-ma small b-s-b-b t-of-e l-h-1em max-l-2 ">{Profesion}
        </div>
        <div className="w-15 flex-auto flex-auto m-d-i-f h-auto h-pr-fl-ma small">
            <div className="w-auto h-auto h-pr-fr-ma ">
                <div
                    className="w-and-h-25px c-bg-9 small b-s-b-b c-br-1 h-e c-p p-l-10px p-r-10px p-t-3px p-b-3px">
                    <i className="fas fa-file-alt centered c-inh "></i>
                </div>
            </div>
            <div className="w-auto h-auto h-pr-fr-ma m-r-3px">
                <div
                    className="w-and-h-25px c-bg-9 small b-s-b-b c-br-1 h-e c-p p-l-10px p-r-10px p-t-3px p-b-3px ">
                    <i className="fas fa-user-circle centered c-inh "></i>
                </div>
            </div>
        </div>
    </div>

</div>
 </Fragment>
 );
}