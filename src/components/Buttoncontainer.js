import React, { Component } from "react";
export default class Buttoncontainer extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,

      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  render() {
    return (
      <div
        className={
          this.state.show ? "active buttoncontainer" : "hidden buttoncontainer"
        }
      >
        <h1 className="networkstitels">Onze opleidingen</h1>
        <button
          className="myshadowbut minibutton greenborder"
          id="categoriegreen"
        >
          Alles
        </button>
        <button className="spacer" id="categoriegreen"></button>
        <button className="myshadowbut minibutton devmtborder" id="devmt">
          Development
        </button>
        <button className="myshadowbut minibutton devmtborder" id="networks">
          Netwerken
        </button>
        <button className="myshadowbut minibutton oriborder" id="ori">
          Orientatie
        </button>
        <button className="myshadowbut minibutton otherborder" id="other">
          Andere
        </button>
      </div>
    );
  }
}
