import React, { Fragment } from "react";

import "./styles.css";

export default function SidebarBtn(props) {
  const { Icon, IconColor, Text, Counter, CounterColor } = props;

  return (
    <Fragment>
      <div className="sidebar-btn small m-b-5px c-bg-8 w-100 flexbox d-i-f h-auto b-s-b-b c-f-1 h-pr-fl-ma c-p h-e c-br-1">
        <div className="w-20 h-auto h-pr-fl-ma">
          {Icon && (
            <div className="w-auto r-h-c c-p-1 h-auto h-pr-fl-ma ">
              <i className={` ${Icon} ${IconColor}  h-pr-fl-ma `}></i>
            </div>
          )}
        </div>

        <div className="w-60 h-auto h-pr-fl-ma">
          <div className="w-auto h-auto h-pr-fl-ma of-hidden c-p-1">
            <div className="sidebar-text normal of-hidden l-h-1em t-of-e p-l-10px w-auto h-auto h-pr-fl-ma">
              {Text}
            </div>
          </div>
        </div>

        <div className="w-20 h-auto h-pr-fl-ma">
          {Counter && (
            <div className="w-auto h-auto r-h-c c-p-1 h-pr-fl-ma ">
              <div
                className={` ${CounterColor} bg-inh w-auto h-auto h-pr-fl-ma nano c-br-1 m-l-3px f-w-bo c-white p-2px `}
              >
                +{Counter}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
