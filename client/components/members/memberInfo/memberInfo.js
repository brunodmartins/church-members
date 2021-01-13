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
			<PersonalInfo person={member.person} />
			<ContactInfo contact={member.person.contact} />
			<AddressInfo {...member.person.address} />
			<ReligionInfo {...member.religion} />
			<TenthInfo {...member.religion} />
			<ChurchInfo {...member} />

		</div>
	);
};

MemberInfo.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberInfo;
