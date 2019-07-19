import React from 'react';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import AddressInfo from './addressInfo';
import PropTypes from 'prop-types';
import ChurchInfo from './churchInfo';
import TenthInfo from './tenthInfo';
import ReligionInfo from './religionInfo';
import MemberStatusChangeDialog from './memberStatusChange';

const MemberInfo = ({member}) => {
	const [showReason, setShowReason] = React.useState(false);
	return (
		<div>
			<PersonalInfo person={member.pessoa} active={member.active} changeStatus={(e) => setShowReason(true)} />
			<ContactInfo contact={member.pessoa.contato} />
			<AddressInfo {...member.pessoa.endereco} />
			<ReligionInfo {...member.religiao} />
			<TenthInfo {...member.religiao} />
			<ChurchInfo {...member} />
			{showReason && 
				<MemberStatusChangeDialog 
					handleClose={() => setShowReason(false)} 
				/>}
		</div>
	);
};

MemberInfo.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberInfo;
