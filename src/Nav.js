import React, { useContext } from "react";
import { OpleidingContext } from "./OpleidingContext";
// class Course extends Component {

const Nav = () => {
  const [courses, setCourses] = useContext(OpleidingContext);
  return (
    <div className="navwrap">
      <p className="navdiv"></p>
      <p className="navp">{courses.length} geplande opleidingen: </p>
    </div>
  );
};

export default Nav;
