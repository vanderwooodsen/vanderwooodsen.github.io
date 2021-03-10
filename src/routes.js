import React, { Component } from "react";
import { Route } from "react-router-dom";


class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default Routes;
