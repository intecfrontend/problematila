import React, { useEffect, useState } from "react";
import "./ModalContent.css";
import "../button.css";
import "../../App.css";
import Buttoni from "../buttoni";

import { OpleidingContext } from "../../OpleidingContext";

import FEclass from "../portfolio/01-full.jpg"; /*eslint no-undef: 2*/

const ModalContent = ({ course }) => {
  const [selected, setSelected] = useState("test");
  useEffect(() => {
    var p = document.querySelector("span.oneliner");
    var res = p.outerHTML.replace(/\./g, ".<br/>");
    p.innerHTML = res;
  });
  console.log("mov" + course);

  return (
    <div className="modal-body">
      <div className="XL middle subtitle">{course.modalondertitel}</div>
      <img className="modal-img" src={FEclass} alt="FEclass" />
      <div className="hoverblocker S">
        <br />
        <br />
        {course.modalp1} <br />
        <br />
        <h6 className="F">{course.modalh1} </h6>
        {course.modalp2} <br />
        <br />
        <h6 className="F">{course.modalh2}</h6>
        {course.modalp3}
        <h6 className="S F">{course.modaltussenh3}</h6>
        {course.modalp4}
        <br /> <br />
        <h6 className="F">{course.modalh4} </h6>
        {course.modalp5}
        <br />
        {course.modalp6}
      </div>

      <p className="myshadow1 mimodalinfo">
        <h6 className="F S"> {course.periode}</h6>
        <span className="oneliner">{course.modalvoorwaarden}</span>
      </p>
      <div className="fixedheight55 buttonmodal">
        <div className="F Lower">
          {course.titel}

          <Buttoni />
        </div>
      </div>
    </div>
  );
};
export default ModalContent;
