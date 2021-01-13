import React from 'react';
require('./memberInfo.css');
import PropTypes from 'prop-types';
import Container from 'components/container';
import {List, ListItem, ListBreak} from 'components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = ({contact}) => {
	const formatPhone = (area, number) => '(' + area + ') ' + number;
	let items = [];
	let key = 0;
	if(contact.phone) {
		items.push(<ListItem leftIcon={<FontAwesomeIcon icon='phone' />} title="Telefone" content={formatPhone(contact.phoneArea, contact.phone)} key={++key}/>)
	}
	items.push(<ListItem title="Celular" content={formatPhone(contact.cellPhoneArea, contact.cellPhone)} key={key}/>);
	items.push(<ListBreak key={key}/>);
	items.push(<ListItem leftIcon={<FontAwesomeIcon icon='envelope' />} title="Email" content={contact.email} key={key}/>);

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
