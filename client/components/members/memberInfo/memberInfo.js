import React from 'react';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';

const MemberInfo = ({member}) => {
	return (
		<div>
			<PersonalInfo person={member.pessoa} />
			<ContactInfo contact={member.pessoa.contato} />
		</div>
	);
};

export default MemberInfo;
