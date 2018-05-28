import React, { Component } from 'react';
require("./memberCard.css");

class MemberCard extends Component {
  render(){
    return (
      <div className="member-card">
        <p>{this.props.name}</p>
        <div className="member-content">
          {this.props.completeName}
          {this.props.dtNascimento}
        </div>
      </div>
    );
  }
}

export default MemberCard;
