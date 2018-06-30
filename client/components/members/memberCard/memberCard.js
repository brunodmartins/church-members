import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
require("./memberCard.css");

const MemberCard = ({name, completeName}) => {
      return <div className="member-card">
        <p>{name}</p>
        <div className="member-content">
          {completeName}
        </div>
        <footer className="member-footer">
          <FontAwesomeIcon icon="user" color="#3399FF" />
        </footer>
      </div>;
}

export default MemberCard;
