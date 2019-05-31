import React from 'react';
require('./memberInfo.css');
import PropTypes from 'prop-types';


const ContactInfo = ({contact}) => {
	const formatPhone = (ddd, number) => '(' + ddd + ') ' + number;


	return(
		<div className="member-info-panel">
			<div className="member-info-box">
				<h3>Contato</h3>

				<label>Telefone</label>
				<span>{formatPhone(contact.dddTelefone, contact.telefone)}</span>

				<label>Celular</label>
				<span>{formatPhone(contact.dddCelular, contact.celular)}</span>

				<label>Email</label>
				<span>{contact.email}</span>
			</div>
		</div>
	);
};

ContactInfo.propTypes = {
	contact: PropTypes.PropTypes.object.isRequired,
};


export default ContactInfo;
