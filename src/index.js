import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from './history';



ReactDOM.render(
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>,

  document.getElementById("root")
);


reportWebVitals();
