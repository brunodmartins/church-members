import React from 'react';
require('./memberCard.css');
import PropTypes from 'prop-types';


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

MemberCard.propTypes = {
	name: PropTypes.string.isRequired,
	completeName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
export default MemberCard;
