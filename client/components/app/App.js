import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Menu from '../menu/menu';
import MembersPanel from '../members/membersPanel/membersPanel';
import MemberInfo from '../members/memberInfo/memberInfo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";

import Callback from "../callback/callback";
import Home from "../home/home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LoadingAPI from "../callback/loadingAPI";

class App extends Component {

  constructor(props){
    super(props);
    library.add(faUser)
    library.add(faBars)
  }

  goTo(route) {
    this.props.history.push(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }

  getMember = (id) => {
    const obj = {
      onComplete: (res) => <MemberInfo member={res.data} />,
      url: "/api/members/" + id,
    }
    return <LoadingAPI {...obj}/>
  };

  getMembers = () => {
    const obj = {
      onComplete: (res) => {
        const members = res.data.map((m) => {
          return {id: m.id, name: m.pessoa.nome, completeName: `${m.pessoa.nome} ${m.pessoa.sobrenome}`};
        })
        .sort( (m1, m2) => m1.name > m2.name);
        return <MembersPanel members={members}/>
      },
      url: "/api/members",
    }
    return <LoadingAPI {...obj}/>
  };



  render() {
    return (
      <div className="App">
        <Router history={this.props.history}>
          <div>
          <Menu/>
          <div className="container">
            <Route exact path="/" render={(props) => <Home auth={this.props.auth} />} />
            <Route exact path="/membros" render={(props) => {
              return this.getMembers()
            }} />
            <Route exact path="/membros/:id" render={(props) => {
              return this.getMember(props.match.params.id)
            }} />
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
