import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';

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
