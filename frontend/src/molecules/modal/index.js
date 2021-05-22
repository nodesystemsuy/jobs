import React, { Fragment } from "react";

import {Btn} from '../../atoms/index.js';
import "./styles.css";

export default function Modal(props) {
  const { title, content, buttons, caution, cancel, accept, eliminate, confirm } = props;

  return (
    <Fragment>
<div className="w-100 h-100 p-a z-i-99 bg-black-node-o-90 c-f-1">
    <div
        className="w-auto max-w-60 max-h-80 h-auto c-p-2 centered c-bg-9 c-br-2 c-bg-1">
        <div className="w-auto r-h-c h-auto h-pr-fl-ma c-p-1 flexbox f-w-w ">
           {title && <div className="w-100 flex-auto h-auto h-pr-fl-ma medium f-w-bo c-p-1 t-a-c">{title}
            </div>}
            {content && <div  className="w-100 flex-auto h-auto h-pr-fl-ma normal c-p-1 t-a-c">{content}
            </div>}

        </div>
        {buttons && <div  className={`w-100 h-10vh h-pr-fl-ma c-bg-10 c-br-1 ${buttons} `}>
            <div className="w-auto h-auto centered flexbox">
            {eliminate && <div  className={` w-auto h-auto m-3px flex-auto ${eliminate} `}>
                <Btn text="ELIMINAR" theme="alert"></Btn>
            </div>}
    </div>
    {caution && <div  className={`w-auto h-auto m-3px flex-auto ${caution} `}>
              <Btn text="CUIDADO" theme="caution"></Btn>
          </div>}
          {cancel && <div  className={`w-auto h-auto m-3px flex-auto ${cancel} `}>
                    <Btn text="CANCELAR" theme="alert"></Btn>
                </div>}
                {accept && <div  className={`w-auto h-auto m-3px flex-auto ${accept} `}>
                    <Btn text="ACEPTAR" theme="success"></Btn>
                </div>}
                {confirm && <div  className={`w-auto h-auto m-3px flex-auto ${confirm} `}>
                  <Btn text="CONFIRMAR" theme="info"></Btn>
              </div>}

            </div>}
        </div>
    </div>
    </Fragment>
  );
}