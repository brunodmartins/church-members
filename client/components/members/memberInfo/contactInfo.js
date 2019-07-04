import React from 'react';
require('./memberInfo.css');
import PropTypes from 'prop-types';
import Container from 'components/container';
import {List, ListItem, ListBreak} from 'components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = ({contact}) => {
	const formatPhone = (ddd, number) => '(' + ddd + ') ' + number;


	const items = [
		<ListItem leftIcon={<FontAwesomeIcon icon='phone' />} title="Telefone" content={formatPhone(contact.dddTelefone, contact.telefone)} key={1}/>,
		<ListItem title="Celular" content={formatPhone(contact.dddCelular, contact.celular)} key={2}/>,
		<ListBreak key={3}/>,
		<ListItem leftIcon={<FontAwesomeIcon icon='envelope' />} title="Email" content={contact.email} key={4}/>,
	];

	return(
		<Container>
			<List items={items}/>
		</Container>
	);
};

ContactInfo.propTypes = {
	contact: PropTypes.PropTypes.object.isRequired,
};


export default ContactInfo;
