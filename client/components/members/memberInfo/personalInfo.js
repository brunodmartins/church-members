import React from 'react';
require('./memberInfo.css');
import PropTypes from 'prop-types';
import Container from 'components/container';
import {List, ListItem,ListBreak} from 'components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const PersonalInfo = ({person}) => {
	const formatDt = (date) => {
		const dateParsed = new Date(date);
		return dateParsed.getUTCDate() + '/' + (dateParsed.getUTCMonth() + 1) + '/' + dateParsed.getFullYear();
	};
	const nomeCompleto = `${person.firstName} ${person.lastName}`;
	const items = [
		<ListItem title="Nome" content={nomeCompleto} key={1}/>,
		<ListItem title="Sexo" content={person.gender} key={2}/>,
		<ListBreak key={3}/>,
		<ListItem leftIcon={<FontAwesomeIcon icon='calendar-alt' />} title="Data de nascimento" content={formatDt(person.birthDate)} key={4}/>,
	];

	if(new Date(person.marriageDate).getYear() > 0) {
		items.push(<ListItem title="Data de Casamento" content={formatDt(person.marriageDate)} key={5}/>),
		items.push(<ListBreak key={7}/>),
		items.push(<ListItem title="Nome do Conjuge" content={person.spousesName} key={6}/>);
	}

	return(
		<Container>
			<List items={items}/>
		</Container>
	);
};

PersonalInfo.propTypes = {
	person: PropTypes.PropTypes.object.isRequired,
};

export default PersonalInfo;
