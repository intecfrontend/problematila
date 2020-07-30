import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Calendar from "./components/portfolio/calendar.png";
import Button from "./components/button";
import "./movie.css";
import "./components/button.css";
const Course = ({ setModalIsOpen, _id,img, modalz, modaltitel, categorie, titel, 
  ondertitel, periode }) => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modal, setmodal] =useState(null)
  
  return (
    <div className="carddiv" id="divItem">
      <Card className="cardclass myshadow1 ">
        <div className="courseimgover"></div>
        <Card.Img
          className="courseimg"
          variant="top"
          src={require(`./imgflder/${img}`)}
        />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">{titel}</Card.Title>
          <Card.Text className="cardText">{ondertitel}</Card.Text>
          <div className="calwrap">
            
            <img src={Calendar} alt="calendaricon" className="calendar" />
            <Card.Text className="cardbody">{periode}</Card.Text>
          </div>
        </Card.Body>

        <div className="cardbtnwrapper" onClick={() => setModalIsOpen(true)}>
        { <Button  className="cardbtn" onClick={()=>{
          if(modal === false){
            setmodal(true)
          }
          }}/> }
          

        {/* <Button onClick={() => this.ModalIsOpen()}>openopenopenopenopen</Button> */}

        </div>

        <span className="categoriestreep" id={`${categorie}`}></span>
      </Card>
          {console.log(modal)}
    </div>
  );
};

export default Course;
