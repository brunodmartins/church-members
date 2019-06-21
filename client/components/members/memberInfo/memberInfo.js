import React from 'react';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import PropTypes from 'prop-types';
import Container from 'components/container';

const MemberInfo = ({member}) => {
	return (
		<div>
			<Container>
				<PersonalInfo person={member.pessoa} />
			</Container>

			<ContactInfo contact={member.pessoa.contato} />
		</div>
	);
};

MemberInfo.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberInfo;
