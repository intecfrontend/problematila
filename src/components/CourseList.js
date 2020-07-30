import React, { useState, useContext } from "react";
import Course from "../Course";
import "./button.css";
import "../App.css";
import Buttoncontainer from "./Buttoncontainer";
import { OpleidingContext } from "../OpleidingContext";
import Button from "./button";
import Test from "./Test";

const CourseList = ({setModalIsOpen}) => {
  const [movies, setMovies] = useContext(OpleidingContext);
//  const [selected, setSelected] = useContext('test');




  return (
    <div className="Coursetemplate cardcont">
      <Buttoncontainer />
      <span className="cardwrap">
        {movies.map((movie) => (
          <Course
            
            setModalIsOpen={setModalIsOpen}
            img={movie.img}
            titel={movie.titel}

            modaltitel={movie.modaltitel}
            
            ondertitel={movie.ondertitel}
            periode={movie.periode}
            categorie={movie.categorie}
            _id={movie.id}
            key={movie.id}
         / >

        ))}
      </span>
      
    </div>
  );
};
export default CourseList;
