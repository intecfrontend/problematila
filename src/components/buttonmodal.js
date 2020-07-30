 import React, { useState } from "react";
import "./button.css";
import CreateIcon from "@material-ui/icons/Create";
/*eslint no-undef: 2*/

const ButtonModal = () => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  function ButtonComponent(props) {
    
    render() {
    return (
      <button
        onClick={() => props.inschrijfHandler()}
        className="btn-warning myshadowbut minibutton"
      >
        <CreateIcon className="CreateIcon" />
        Meer info
      </button>
    );};
  }
};
export default ButtonModal;
