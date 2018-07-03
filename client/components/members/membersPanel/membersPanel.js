import React from 'react';
import MemberCard from '../memberCard/memberCard';
import Axios from 'axios';
import {withRouter} from 'react-router';
require("./membersPanel.css");

const MembersPanel = ({history, members}) => {

  const navigate = (id) => {
    history.push("/membros/" + id);
  };

  const renderCards = () => {
    return members.map(m => {
      return <MemberCard id={m.id} name={m.name} completeName={m.completeName} navigate={navigate}/>;
    });
  };

  return (
      <div className="members-container">
        {renderCards()}
      </div>
  );

};

export default withRouter(MembersPanel);
