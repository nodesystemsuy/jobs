import React, { Fragment } from "react";


import "./styles.css";

export default function CardHorizontal(props) {
  const { Img, title, date, description } = props;

  return (
    <Fragment>
<div className="w-50 m-w-100 h-20vh h-pr-fl-ma c-p-1 b-s-b-b">
  <div className="w-100 h-100 h-pr-fl-ma c-bg-8 c-br-1  c-p-1 b-s-b-b">

    <div className="w-100 h-100 flexbox d-i h-pr-fl-ma of-hidden">

    {Img && <div  className="w-20 h-100 h-pr-fl-ma c-p-1">
            <img
                src={` ${Img} `}
                className="w-and-h-60px bg-green h-pr-fl-ma circle centered of-hidden"/></div>}

                <div className="w-100 h-auto h-pr-fl-ma of-hidden c-p-1">
                <div className="w-100 h-20 h-pr-fl-ma c-f-1 d-i-f normal t-of-e">
                    <span className="h-pr-fl-ma f-w-bo p-r-5px">{title}
                    </span>
                    <span className="h-pr-fl-ma c-p-1 nano">{date}
                    </span>
                </div>
                <div className="w-100 h-80 h-pr-fl-ma c-f-1 small max-l-3">{description}</div>
            </div>

            <div className="w-20 h-auto flex-auto  h-pr-fl-ma of-hidden">
                <div className="w-and-h-30px h-pr-fr-ma c-p-1 c-bg-9 c-br-1 c-p h-e m-2px">
                    <i className="fas fa-eye c-inh w-auto h-auto h-pr-fl-ma small centered"></i>
                </div>
                <div className="w-and-h-30px h-pr-fr-ma c-p-1 c-bg-9 c-br-1 c-p h-e m-2px">
                    <i className="fas fa-trash c-inh w-auto h-auto h-pr-fl-ma small centered"></i>
                </div>
            </div>

        </div>
      </div>
    </div>
    </Fragment>
    );
  }