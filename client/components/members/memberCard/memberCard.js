import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
require("./memberCard.css");

const MemberCard = ({id,name, completeName, navigate}) => {

      const goToInfo = () => navigate(id)
  
      return <div className="member-card">
        <p>{name}</p>
        <div className="member-content">
          {completeName}
        </div>
        <footer className="member-footer">
          <div onClick={goToInfo}>
          <FontAwesomeIcon icon="user" color="#3399FF" />
          </div>
        </footer>
      </div>;
}

export default MemberCard;
