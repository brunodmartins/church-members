import React, { Component } from 'react';
import MemberCard from '../memberCard/memberCard';
import Axios from 'axios';
require("./membersPanel.css");

class MembersPanel extends Component {

  constructor(props){
    super(props);


    this.state = {
      members:[]
    };
  }

  navigate = (id) => {
    console.log(this.props)
    this.props.history.push("/membros/" + id)
  }

  componentDidMount = () => {
    Axios.get("/api/members")
      .then((res) => {
        const members = res.data.map((m) => {
          return {id: m.id, name: m.pessoa.nome, completeName: `${m.pessoa.nome} ${m.pessoa.sobrenome}`};
        });
        this.setState({
          members: members
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){
    return (
      <div className="members-container">
        {this.renderCards()}
      </div>
    );
  }

  renderCards = () => {
    return this.state.members.map(m => {
      return <MemberCard id={m.id} name={m.name} completeName={m.completeName} navigate={this.navigate}/>;
    });
  }
}

export default MembersPanel;
