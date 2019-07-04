import React from 'react';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import AddressInfo from './addressInfo';
import PropTypes from 'prop-types';

const MemberInfo = ({member}) => {
	return (
		<div>
			<PersonalInfo person={member.pessoa} />
			<ContactInfo contact={member.pessoa.contato} />
			<AddressInfo {...member.pessoa.endereco} />
		</div>
	);
};

MemberInfo.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberInfo;
