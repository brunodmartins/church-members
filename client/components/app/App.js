import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Menu from '../menu/menu';
import MembersPanel from '../members/membersPanel/membersPanel';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Menu/>
          <div className="container">
            <Route exact path="/membros" component={MembersPanel} />
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
