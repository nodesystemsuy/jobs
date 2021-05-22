import React, { Fragment } from "react";


import "./styles.css";

export default function BusinessProfile(props) {
  const { Img  } = props;

  return (
    <Fragment>

<div className="w-100 h-100 h-pr-fl-ma c-bg-9 c-br-2 c-p-2 of-x-hidden of-y-auto">
    <div className="w-100 h-auto flexbox h-pr-fl-ma d-i-f">
        <div className="w-20 h-auto flex-auto h-pr-fl-ma c-p-1 b-s-b-b ">
            <div className="w-80 m-w-100 h-auto h-pr-fl-ma r-h-c">
            <Img className="a-r-1-1 w-50  c-br-2 c-bg-8" className="w-50" src=""/>
          </div>
        </div>
        <div className="w-60 h-auto flex-auto d-i-f  h-pr-fl-ma c-p-2 c-br-2">
          <div className="w-80 h-auto  h-pr-fl-ma">
            <div className="w-100 h-auto c-f-1 d-i-f c-p-1 medium f-w-bo">NOMBRE EMPRESA</div>
            <div className="w-100 h-auto c-f-1 c-p-1 normal">SLOGAN DE EMPRESA</div>
          </div>
          <div className="w-20  h-auto flex-auto h-pr-fl-ma">
            <div className="w-auto r-h-c h-auto h-auto h-pr-fl-ma">
              <div className="w-100 h-auto c-f-1 nano h-auto">desde:</div>
              <div className="w-100 h-auto c-f-1 f-w-bo h-auto normal h-pr-fl-ma">1830</div>
            </div>
          </div>
        </div>
        <div className="w-20 h-auto flex-auto h-pr-fl-ma  c-p-2 c-br-2">
          <div className="w-100 h-auto h-pr-fl-ma m-b-2px h-e c-p small c-br-1 c-bg-8 d-i-f t-of-e p-2px m-b-2px"><i className="t-a-c w-20 m-w-100 fas fa-globe"></i><span className="w-80 c-f-1 small m-d-n">Sito Web</span></div>
          <div className="w-100 h-auto h-pr-fl-ma m-b-2px h-e c-p small c-br-1 c-bg-8 d-i-f t-of-e p-2px m-b-2px"><i className="t-a-c w-20 m-w-100 fab fa-linkedin"></i><span className="w-80 c-f-1 small m-d-n">Linkedin</span></div>
          <div className="w-100 h-auto h-pr-fl-ma m-b-2px h-e c-p small c-br-1 c-bg-8 d-i-f t-of-e p-2px m-b-2px"><i className="t-a-c w-20 m-w-100 fab fa-twitter"></i><span className="w-80 c-f-1 small m-d-n">Twitter</span></div>
          <div className="w-100 h-auto h-pr-fl-ma m-b-2px h-e c-p small c-br-1 c-bg-8 d-i-f t-of-e p-2px m-b-2px"><i className="t-a-c w-20 m-w-100 fab fa-instagram"></i><span className="w-80 c-f-1 small m-d-n">Instagram</span></div>
          <div className="w-100 h-auto h-pr-fl-ma m-b-2px h-e c-p small c-br-1 c-bg-8 d-i-f t-of-e p-2px m-b-2px"><i className="t-a-c w-20 m-w-100 fab fa-facebook"></i><span className="w-80 c-f-1 small m-d-n">Facebook</span></div>

        </div>
    </div>

<div className="w-100 h-auto small h-pr-fl-ma">

   {/* TODO |                                  | DÍA DE APERTURA + HORA DE APERTURA | */}
   <div className="w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">Apertura del local:</div>
      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">De Lunes a Viernes</div>
    </div>
    <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">Hora de apertura:</div>
      <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">DESDE 00:00 AM | HASTA 00:00 PM</div>
    </div>
  </div>
  {/* TODO |                                  | SECTOR EMPRESARIAL + CANTIDAD DE EMPLEADOS | */}
<div className="w-100 h-auto h-pr-fl-ma c-p-1">
  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SECTOR/RUBRO EMPRESARIAL</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">TECNOLOGÍAS DE LA INFORMACIÓN</div>
  </div>
  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">CANTIDAD DE EMPLEADOS:</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">DE 500 A 1000</div>
  </div>
</div>
{/* TODO |                                  | PAÍS DE ORIGEN + CIUDAD DE ORIGEN | */}
<div className="w-100 h-auto h-pr-fl-ma c-p-1">
  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">País de origen</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">País de origen</div>
  </div>
  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">Ciudad de origen</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">Ciudad de origen</div>
  </div>
</div>
{/* TODO |                                  | UBICACIÓN ACTUAL + SUCURSAL DE ESTA CUENTA | */}
<div className="w-100 h-auto h-pr-fl-ma c-p-1">
  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">UBICACIÓN ACTUAL</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">Ubicación Actual</div>
  </div>
  <div className="w-50 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">SUCURSAL ACTUAL</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-8 c-br-1 f-w-bo c-p-1 normal">Numero de Sucursal</div>
  </div>
</div>
{/* TODO |                                  | DESCRIPCIÓN EMPRESA | */}
<div className="w-100 h-auto h-pr-fl-ma c-p-1">
  <div className="w-100 m-w-100 h-auto h-pr-fl-ma c-p-1">
    <div className="w-100 h-auto h-pr-fl-ma c-f-1 c-bg-10 p-l-5px b-s-b-b small">DESCRIPCIÓN</div>
    <div className="w-100 h-auto h-pr-fl-ma c-f-1  c-bg-8 c-br-1 f-w-bo c-p-1 normal">LoremUt ex id eu culpa anim ad elit irure nisi nostrud elit laboris. Ad sunt labore cillum qui duis. Irure nulla id non cillum deserunt ad exercitation officia esse excepteur.

Amet consequat labore aliqua id. Ex velit id esse qui minim proident excepteur reprehenderit. Ut laborum consequat tempor nostrud. Reprehenderit sunt qui magna eiusmod deserunt magna. Dolore eiusmod excepteur commodo sunt reprehenderit sunt consequat veniam ea pariatur ut nisi ad. In Lorem quis laboris quis duis velit et excepteur adipisicing amet. Voluptate in ut irure irure ut consequat eiusmod.</div>
  </div>

</div>
{/* TODO |                                  | PUBLICACIONES ACTIVAS | */}
<div className="w-100 h-auto h-auto h-pr-fl-ma c-bg-10 c-br-1 c-p-1">

  <div className="w-100 c-f-1 small h-auto t-a-c">NOMBRE EMPRESA NO TIENE OFERTAS LABORALES</div>

</div>
</div>

</div>
</Fragment>
  );
}
