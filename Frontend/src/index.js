import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import JobSources from "./JobSources";
import JobsSearch from "./JobsSearch";

function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path="/jobssearch" >
          <JobsSearch />
        </Route>
        <Route path="/" >
          <JobSources />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
