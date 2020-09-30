import React, { useState, useContext } from "react";
import Course from "../Course";
import ModalContent from "./modals/ModalContent";
import "./button.css";
import "../App.css";
import Buttoncontainer from "./Buttoncontainer";
import { OpleidingContext } from "../OpleidingContext";
import Button from "./button";

const CourseList = ({ setModalIsOpen, setActiveCourse }) => {
  const [courses, setCourses] = useContext(OpleidingContext);
  //  const [selected, setSelected] = useContext('test');

  return (
    <div className="Coursetemplate cardcont">
      <Buttoncontainer />
      <span className="cardwrap">
        {courses.map((course) => (
          <>
            <Course
              setModalIsOpen={setModalIsOpen}
              setActiveCourse={setActiveCourse}
              course={course}
              ribbon={course.ribbon}
              img={course.img}
              titel={course.titel}
              modaltitel={course.modaltitel}
              ondertitel={course.ondertitel}
              periode={course.periode}
              categorie={course.categorie}
              _id={course.id}
              key={course.id}
              modalondertitel={course.ondertitel}
            />
            {/* <ModalContent modalondertitel={course.modalondertitel} />*/}
          </>
        ))}
      </span>
    </div>
  );
};
export default CourseList;
