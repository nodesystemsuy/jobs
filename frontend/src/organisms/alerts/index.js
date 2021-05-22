import React, { Fragment } from "react";

import {Alert} from '../../molecules/index.js';
import "./styles.css";

export default function Alerts(props) {
  const {  } = props;

  return (
    <Fragment>

<div className="w-100 h-100 h-pr-fl-ma c-bg-9 c-br-2 c-p-2 of-x-hidden of-y-auto">
  <div
  className="w-100 h-auto medium h-pr-fl-ma c-br-1 t-a-c c-p-1 c-f-1 f-w-bo alert m-b-10px">
  <i className="fas fa-bell p-r-10px c-inh"></i>ALERTAS</div>

    <Alert title="NOMBRE APELLIDO" description="HA ACEPTADO TU ENTREVISTA"></Alert>
    <Alert title="NOMBRE APELLIDO" description="HA ACEPTADO TU ENTREVISTA"></Alert>
    <Alert
        title="NOMBRE APELLIDO"
        description="Sunt ex cupidatat Lorem fugiat pariatur minim ad non. Aliqua et nulla duis occaecat Lorem nisi. Magna adipisicing incididunt laboris Lorem do occaecat occaecat nostrud anim culpa excepteur adipisicing proident. Velit magna cupidatat laboris officia excepteur Lorem. Ex ut consequat labore incididunt sunt.

Id aliquip anim laboris velit dolore duis do laboris tempor qui officia id cupidatat. Lorem nisi laborum est tempor laborum consectetur consectetur. Aliquip minim in pariatur laborum tempor non est officia culpa quis enim ut et labore."></Alert>
    <Alert title="NOMBRE APELLIDO" description="HA ACEPTADO TU ENTREVISTA"></Alert>
    <Alert
        title="NOMBRE APELLIDO"
        description="Sunt ex cupidatat Lorem fugiat pariatur minim ad non. Aliqua et nulla duis occaecat Lorem nisi. Magna adipisicing incididunt laboris Lorem do occaecat occaecat nostrud anim culpa excepteur adipisicing proident. Velit magna cupidatat laboris officia excepteur Lorem. Ex ut consequat labore incididunt sunt.

Id aliquip anim laboris velit dolore duis do laboris tempor qui officia id cupidatat. Lorem nisi laborum est tempor laborum consectetur consectetur. Aliquip minim in pariatur laborum tempor non est officia culpa quis enim ut et labore."></Alert>
    <Alert title="NOMBRE APELLIDO" description="HA ACEPTADO TU ENTREVISTA"></Alert>
    <Alert title="NOMBRE APELLIDO" description="HA ACEPTADO TU ENTREVISTA"></Alert>
</div>
</Fragment>
  );
}
