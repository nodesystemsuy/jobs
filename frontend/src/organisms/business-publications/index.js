import React, { Fragment } from "react";

import {PublicationBusiness, PublicationFilter, Pagination} from '../../molecules/index.js';
import "./styles.css";

export default function BusinessPublications(props) {
  const { PublicationControlers } = props;

  return (
    <Fragment>
<div className="w-100 h-100 h-pr-fl-ma">
  <div className="w-100 h-10 h-pr-fl-ma">
    <PublicationFilter></PublicationFilter>
</div>

    <div className="w-100 h-70 h-pr-fl-ma of-y-auto of-x-none">

        <PublicationBusiness></PublicationBusiness>
        <PublicationBusiness></PublicationBusiness>
        <PublicationBusiness></PublicationBusiness>
        <PublicationBusiness></PublicationBusiness>
    </div>
    <div className="w-100 h-10 h-pr-fl-ma c-p-1">
      <PublicationControlers></PublicationControlers>
  </div>
    <div className="w-100 h-10 h-pr-fl-ma">

        <Pagination></Pagination>

    </div>

</div>
</Fragment>
  );
}