import React, { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loading}
          alt={loading}
          style={{ width: "80px", height: "80px" }}
        />
      </div>
    );
  }
}

export default Spinner;
