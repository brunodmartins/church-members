import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
require("./memberCard.css");

const MemberCard = ({id,name, completeName, navigate}) => {

      const goToInfo = () => navigate(id);

      return (<div className="member-card" onClick={goToInfo}>
        <p>{name}</p>
        <div className="member-content">
          {completeName}
        </div>
        <footer className="member-footer">
        </footer>
      </div>);
};

export default MemberCard;
