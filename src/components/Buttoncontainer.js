import React from "react";
import "./buttoncontainer.css"
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
        <h1  className="networkstitels" id="networkstitelsid">Onze opleidingen</h1>
        <button
          className="oplbtn myshadowbut minibutton greenborder"
          id="categoriegreen"
        >
          Alles
        </button>
        <button className="spacer" id="categoriegreen"></button>
        <button className="oplbtn myshadowbut minibutton devmtborder" id="devmt">
          <input
            checked
            type="checkbox"
            id="devid"
            name="dev"
            value="Development"
          />{" "}
          Development
        </button>
        <button className="oplbtn myshadowbut minibutton devmtborder" id="networks">
          <input 
            checked
            type="checkbox"
            id="netid"
            name="netw"
            value="Netwerken"
            
          />{" "}
          Netwerken
        </button>
        <button className="oplbtn myshadowbut minibutton oriborder" id="ori">
          <input
            checked
            type="checkbox"
            id="oriid"
            name="ori"
            value="Orientatie"
          />{" "}
          Orientatie
        </button>
        <span>
        <button className="oplbtn myshadowbut minibutton otherborder" id="other">
          <input
            checked
            type="checkbox"
            id="andid"
            name="andr"
            value="Andere"
          />{" "}
          Andere
        </button></span>
      </div>
    );
  }
}
