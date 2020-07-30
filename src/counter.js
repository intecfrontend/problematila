import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.state.count = this.state.count + 1;
    this.setState.count({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        count - {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default counter;
