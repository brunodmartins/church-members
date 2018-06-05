import React, { Component } from 'react';
import MemberCard from '../memberCard/memberCard';
require("./membersPanel.css");

class MembersPanel extends Component {
  render(){
    return (
      <div className="members-container">
        {this.renderCards()}
      </div>
    );
  }

  renderCards(){
    return this.props.members.map(m => {
      return <MemberCard name={m.name} completeName={m.completeName} />;
    });
  }
}

export default MembersPanel;
