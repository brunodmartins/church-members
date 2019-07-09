import React from 'react';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import AddressInfo from './addressInfo';
import PropTypes from 'prop-types';
import ChurchInfo from './churchInfo';
import TenthInfo from './tenthInfo';
import ReligionInfo from './religionInfo';

const MemberInfo = ({member}) => {
	return (
		<div>
			<PersonalInfo person={member.pessoa} />
			<ContactInfo contact={member.pessoa.contato} />
			<AddressInfo {...member.pessoa.endereco} />
			<ReligionInfo {...member.religiao} />
			<TenthInfo {...member.religiao} />
			<ChurchInfo {...member} />
			
		</div>
	);
};

MemberInfo.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberInfo;
