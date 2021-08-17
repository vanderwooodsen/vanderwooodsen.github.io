import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import ScrollToTop from "./components/ScrollToTop";

class Routes extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop/>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default Routes;
