import React, { Fragment } from "react";


import "./styles.css";

export default function PublicationCandidates(props) {
  const { children, Urg, Cargo, Monto, Moneda } = props;

  return (
    <Fragment>
<div className="w-100 h-35px d-i-f h-pr-fl-ma c-bg-9 c-br-1 c-p-1 m-b-5px">
    <div className="w-100 h-100 c-f-1 h-pr-fl-ma flexbox d-i-f">
        <div className="w-10 h-100 flex-auto">
            {Urg && <div
             
                className="alert small fas fa-exclamation r-v-c b-s-b-b c-br-1  p-l-10px p-r-10px p-t-3px p-b-3px"></div>}
        </div>
        <div className="w-20 flex-auto h-auto h-pr-fl-ma small t-of-e p-t-4px">
            {Cargo}
        </div>
        <div
            className="w-10 flex-auto h-auto h-pr-fl-ma small t-a-c t-of-e p-t-4px c-green-node">
            {Monto}
        </div>
        <div className="w-10 flex-auto h-auto h-pr-fl-ma small t-a-c t-of-e p-t-4px">
            {Moneda}
        </div>
        <div className="w-10 flex-auto h-auto h-pr-fl-ma small t-a-c t-of-e p-t-4px">
            ALGO MAS
        </div>
        <div className="w-10 flex-auto h-auto h-pr-fl-ma small t-a-c t-of-e p-t-4px">
            123145
        </div>
        <div className="w-10 flex-auto h-auto h-pr-fl-ma small t-a-c t-of-e p-t-4px">
            ÓAKSDÑKM
        </div>
        <div className="w-20 h-auto flex-auto h-pr-fl-ma small">
            <div className="w-auto h-auto h-pr-fr-ma">

                <div
                    className="w-and-h-25px c-bg-8  small b-s-b-b c-br-1 h-e c-p p-l-10px p-r-10px p-t-3px p-b-3px">
                    <i className="fas fa-chevron-down centered c-inh "></i>
                </div>
            </div>
            <div className="w-auto h-auto h-pr-fr-ma m-r-3px ">
                <div
                    className="w-and-h-25px c-bg-8  small b-s-b-b c-br-1 h-e c-p p-l-10px p-r-10px p-t-3px p-b-3px ">
                    <i className="fas fa-eye centered c-inh "></i>
                </div>

            </div>

        </div>

    </div>
    {children && <div  className="w-100 h-100 h-pr-fl-ma">
        {children}
    </div>}

</div>
 </Fragment>
 );
}