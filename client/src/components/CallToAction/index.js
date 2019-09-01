import React from "react";
import "./style.css";

function CallToAction(props) {
    return (
      <div className="call-to-action">{props.children}</div>
    );
}

export default CallToAction;