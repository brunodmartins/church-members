import React from 'react';
require('./membersPanel.css');
import MemberCard from '../memberCard/memberCard';
import PropTypes from 'prop-types';
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

MembersPanel.propTypes = {
	members: PropTypes.PropTypes.arrayOf(PropTypes.object),
	onMemberClick: PropTypes.func.isRequired,
};

export default MembersPanel;
