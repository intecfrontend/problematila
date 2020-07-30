import React, { Component } from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

class Child extends Component {
  render() {
    return (
      <div>

        <div
        >
          <CloseRoundedIcon className="exit miexit" />
        </div>
      </div>
      // onClick={() => this.setModalIsOpen(false)}
    );
  }
}

export default Child;
