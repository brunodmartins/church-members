import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Menu from '../menu/menu';
import MembersPanel from '../members/membersPanel/membersPanel';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Callback from "../callback/callback";
import Home from "../home/home";


class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }
  


  render() {
    return (
      <div className="App">
        <Router history={this.props.history}>
          <div>
          <Menu/>
          <div className="container">
            <Route exact path="/" render={(props) => <Home auth={this.props.auth} />} />
            <Route exact path="/membros" component={MembersPanel} />
            <Route exact path="/callback_auth" render={(props) => {
              this.handleAuthentication(props);
              return <Callback {...props}/>
            }} />
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
