import React from "react";
import "./button.css";
import CreateIcon from "@material-ui/icons/Create";


function Button() {
  return (
    <button className="btn-warning myshadowbut minibutton">
      <CreateIcon className="CreateIcon" />
      meer uitleg
    </button>
  );
}
export default Button;
