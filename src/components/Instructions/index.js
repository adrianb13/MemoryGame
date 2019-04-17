import React from "react";
import "./Instructions.css";

function Instructions(props) {
  return(
    <div className="instructions">{props.children}</div>
  )
}

export default Instructions;