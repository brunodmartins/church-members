import React, { Component } from 'react';
require("./memberCard.css");

const MemberCard = ({name, completeName}) => {
      return <div className="member-card">
        <p>{name}</p>
        <div className="member-content">
          {completeName}
        </div>
      </div>;
}

export default MemberCard;
