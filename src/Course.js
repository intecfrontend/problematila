import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Calendar from "./components/portfolio/calendar.png";
import Button from "./components/button";
import "./course.css";
import "././components/ribbonlibe/ribbonstyle.css";
import { Ribbonplaats } from "./components/ribbonlibe/ribbon";
import "./components/ribbonlibe/ribbon";
import { redribbon } from "./components/ribbon";

import "./components/button.css";
const Course = ({
  setModalIsOpen,
  setActiveCourse,
  course,
  ribbon,
  img,
  modalz,
  modaltitel,
  modalondertitel,
  categorie,
  titel,
  ondertitel,
  periode,
}) => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modal, setmodal] = useState(null);

  return (
    <div className="carddiv" id="divItem">
      <Card className="cardclass myshadow1 ">
        <div className={`${ribbon}`}>
          <Ribbonplaats />
        </div>
        <div className="courseimgover"></div>
        <Card.Img
          className="courseimg"
          variant="top"
          src={require(`./imgflder/${img}`)}
        />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">{titel}</Card.Title>
          {/* <Card.Title className="cardtitle">{modalondertitel}</Card.Title> */}
          <Card.Text className="cardText">{ondertitel}</Card.Text>
          <div className="calwrap">
            <img src={Calendar} alt="calendaricon" className="calendar" />
            <Card.Text className="cardbody">{periode}</Card.Text>
          </div>
        </Card.Body>

        <div
          className="cardbtnwrapper"
          onClick={() => {
            setModalIsOpen(true);
            setActiveCourse(course);
            console.log("gg" + course.modalp2);
          }}
        >
          {
            <Button
              className="cardbtn"
              
            />
          }

          {/* {console.log(Course)} 
          on line 64 place this onClick={() => {if (modal === false) {setmodal(true);}}}*/}
          {/* <Button onClick={() => this.ModalIsOpen()}>openopenopenopenopen</Button> */}
        </div>

        <span className="categoriestreep" id={`${categorie}`}></span>
      </Card>
    </div>
  );
};

export default Course;
