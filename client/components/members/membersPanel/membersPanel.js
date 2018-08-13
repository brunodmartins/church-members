import React from 'react';
require('./membersPanel.css');
import MemberCard from '../memberCard/memberCard';
const MembersPanel = ({members, onMemberClick}) => {

	const renderCards = () => {
		return members.map(m => {
			return <MemberCard key={m.id} {...m}  onClick={() => onMemberClick(m.id)} />;
		});
	};

	return (
		<div className="members-container">
			{renderCards()}
		</div>
	);
   
};

export default MembersPanel;
