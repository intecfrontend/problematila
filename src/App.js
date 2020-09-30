// https://www.youtube.com/watch?v=35lXWvCuM8o&t=497s

import React, { Component, useContext } from "react";
import "./App.css";
import Exit from "./components/exit";
import "./components/modals/ModalContent.css";
import Modal from "react-modal";
import CourseList from "./components/CourseList";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import ModalContent from "./components/modals/ModalContent";
import "./components/modals/ModalContent.css";
import { OpleidingProvider } from "./OpleidingContext";
import { OpleidingContext } from "./OpleidingContext";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

// const [courses, setCourses] = useContext(OpleidingContext);

// line 18 where to put this? test.js doesn't work,
//how to take info out of a context array,
//je schrijft je in vor de cursus met als titel:{courses.titel} periode: {courses.id}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, course: {} };
    courses: {}
    this.setActiveCourse = this.setActiveCourse.bind(this);
    this.setModalIsOpen = this.setModalIsOpen.bind(this);
  }

  setActiveCourse(course) {
    this.setState({ course: course });
  }
  setModalIsOpen(modalIsOp) {
    this.setState({ modalIsOpen: modalIsOp });
  }

  render() {
    return (
      <OpleidingProvider>
        <div className="App">
          {/* <button onClick={() => this.setModalIsOpen(true)}>open</button> */}
          <Modal
            isOpen={this.state.modalIsOpen}
            className=" myshadowbut mimodal"
          >
            <div className="fixedheight55 exiter">
              <CloseRoundedIcon
                onClick={() => this.setModalIsOpen(false)}
                className="exit miexit"
              />
            </div>
            <div className="scroll centermodal">
              <div className="frame">
                <ModalContent course={this.state.course} />
              </div>
            </div>
          </Modal>
        </div>
        <div className="micourses">
          <CourseList
            setModalIsOpen={this.setModalIsOpen}
            setActiveCourse={this.setActiveCourse}
            className="Coursetemplate"
          />
        </div>
      </OpleidingProvider>
    );
  }
}

export default App;
