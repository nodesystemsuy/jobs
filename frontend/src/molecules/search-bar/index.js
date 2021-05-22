import React, { Fragment } from "react";


import "./styles.css";

export default function SearchBar(props) {
  const { Btn } = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma">
    <label
        for="SearchBar"
        className="w-95 h-35px centered flexbox d-i-f b-s-b-b h-pr-fl-ma c-br-2">
        <input
            className="w-80 br-none c-bg-8 b-s-b-b  p-l-10px c-white h-100 h-pr-fl-ma"
            placeholder="Buscar publicaciones aquí..."
            id="SearchBar"/>
        <div className="w-20 h-auto h-pr-fl-ma">
            <div className="w-40 h-100 d-i-f b-s-b-b">
                <Btn
                    className="w-100 h-100 c-bg-8 br-0px h-e c-br-1 c-p-1"
                    className=" w-100 c-p-1 e-f-rotate-180"
                    Icon="fas fa-sort-amount-up-alt "></Btn>
            </div>
            <div className="w-60 h-100 d-i-f b-s-b-b">
                <Btn
                    className="w-100 h-100 c-bg-8 br-right h-e c-br-1 c-p-1"
                    className="w-100 c-p-1 "
                    Icon="fas fa-search"></Btn>
            </div>
        </div>

    </label>


</div>
 </Fragment>
 );
}