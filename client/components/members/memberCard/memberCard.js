import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
require("./memberCard.css");

const MemberCard = ({name, completeName, onClick}) => {


      return (<div className="member-card" onClick={onClick}>
        <p>{name}</p>
        <div className="member-content">
          {completeName}
        </div>
        <footer className="member-footer">
        </footer>
      </div>);
};


export default MemberCard;
