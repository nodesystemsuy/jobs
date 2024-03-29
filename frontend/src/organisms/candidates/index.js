
import React, { Fragment } from "react";

import {Candidate, PublicationCandidates} from '../../molecules/index.js';
import "./styles.css";

export default function Candidates(props) {
  const {  } = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma c-br-2 c-p-2 of-x-hidden of-y-auto">
    <PublicationCandidates  Urg="true" Cargo="PROGRAMADOR" Monto="200" Moneda="USD"></PublicationCandidates>
        <Candidate
            Nombre="NombreASAD"
            Apellido="ApellidoS"
            Edad="18"
            Profesion="PROGRAMADOR BACKEND ASDAS "></Candidate>
        <Candidate
            Nombre="Nombre"
            Apellido="Apellido"
            Edad="18"
            Profesion="PROGRAMADOR ANGULAR"></Candidate>
        <Candidate
            Nombre="Nombre"
            Apellido="Apellido"
            Edad="18"
            Profesion="PROGRAMADOR JS"></Candidate>
        <Candidate
            Nombre="Nombre"
            Apellido="Apellido"
            Edad="18"
            Profesion="PROGRAMADOR FRONTEND"></Candidate>

    <PublicationCandidates Cargo="CARPINTERO" Monto="200" Moneda="USD"></PublicationCandidates>
    <PublicationCandidates Urg="true" Cargo="PROGRAMADOR" Monto="200" Moneda="USD"></PublicationCandidates>
    <PublicationCandidates Cargo="DISEÑADOR" Monto="200" Moneda="USD"></PublicationCandidates>
    <PublicationCandidates Urg="true" Cargo="PROGRAMADOR" Monto="200" Moneda="USD"></PublicationCandidates>

</div>
</Fragment>
);
}
