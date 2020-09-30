import React, { Component } from "react";
import "./ribbon.css";
import "bootstrap/dist/css/bootstrap.css";

class Redribbon extends React.Component {
  render() {
    return (
      <span class="ribbon top-left ribbon-warning">
        <small>warning</small>
      </span>
    );
  }
}

class orangeribbon extends React.Component {
  render() {
    return (
      <span class="ribbon top-left ribbon-danger">
        <small>warning</small>
      </span>
    );
  }
}
export default Redribbon;
