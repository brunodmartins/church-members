import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Menu from '../menu/menu';
import MembersPanel from '../members/membersPanel/membersPanel';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Pinggg..."
    };
  }

  componentDidMount() {
    Axios.get("https://disciples-api.herokuapp.com/ping")
      .then(res => {
        this.setState({
          msg: "Pinged!"
        });
      })
      .catch(err => {
        this.setState({
          msg: "Not pinged"
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Menu/>
          <Route exact path="/membros" component={MembersPanel} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
