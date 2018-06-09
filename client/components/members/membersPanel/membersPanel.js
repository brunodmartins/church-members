import React, { Component } from 'react';
import MemberCard from '../memberCard/memberCard';
require("./membersPanel.css");

class MembersPanel extends Component {

  constructor(props){
    super(props);
    const MEMBERS = [
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bruno", completeName:"Bruno Damasceno Martins"},
      {name:"Bro", completeName:"Bruno Damasceno Martins"},
    ];

    this.state = {
      members:MEMBERS
    };
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
      return <MemberCard name={m.name} completeName={m.completeName} />;
    });
  }
}

export default MembersPanel;
