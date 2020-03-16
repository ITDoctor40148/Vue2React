import React from "react";

import calcPropertyValue from "../helpers/calcPropertyValue";

import "./Loader.css";

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerStyle: {
        borderWidth: `0px`,
        borderColor: ``,
        animationDuration: 0
      }
    };
  }

  animDiv1() {
    return calcPropertyValue("animationDelay", 1.2, -0.375);
  }
  animDiv2() {
    return calcPropertyValue("animationDelay", 1.2, -0.25);
  }
  animDiv3() {
    return calcPropertyValue("animationDelay", 1.2, -0.125);
  }

  render() {
    return (
      <div className="full_width">
        <div
          className="lds-ring"
          style={{
            width: `${this.props.size}px`,
            height: `${this.props.size}px`
          }}
        >
          <div style={this.animDiv1()}></div>
          <div style={this.animDiv2()}></div>
          <div style={this.animDiv3()}></div>
        </div>
      </div>
    );
  }
}

export default Loader;
