import React, { useState, useContext } from "react";
import { OpleidingContext } from "./OpleidingContext";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [courses, setCourses] = useContext(OpleidingContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addCourse = (e) => {
    e.preventDefault();
    setCourses((preCourses) => [
      ...preCourses,
      { name: name, price: "$" + price },
    ]);
  };

  return (
    <form onSubmit={addCourse}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddCourse;
