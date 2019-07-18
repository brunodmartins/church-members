import React, {useState} from 'react';
require('./memberInfo.css');
import PropTypes from 'prop-types';
import Container from 'components/container';
import {List, ListItem,ListBreak} from 'components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Switch} from '@material-ui/core'



const PersonalInfo = ({person, active, changeStatus}) => {
	const formatDt = (date) => {
		const dateParsed = new Date(date);
		return dateParsed.getUTCDate() + '/' + (dateParsed.getUTCMonth() + 1) + '/' + dateParsed.getFullYear();
	};
	const nomeCompleto = `${person.nome} ${person.sobrenome}`;
	const renderSwitch  = () => {
        return <Switch
            checked={active}
			color="primary"
			onChange={(e) => {
				changeStatus(e.target.checked);
			}}
        />
    }
	const items = [
		<ListItem title="Nome" content={nomeCompleto} key={1}/>,
		<ListItem title="Sexo" content={person.sexo} key={2}/>,
		<ListBreak key={3}/>,
		<ListItem leftIcon={<FontAwesomeIcon icon='calendar-alt' />} title="Data de nascimento" content={formatDt(person.dtNascimento)} key={4}/>,
	];

	if(new Date(person.dtCasamento).getYear() > 0) {
		items.push(<ListItem title="Data de Casamento" content={formatDt(person.dtCasamento)} key={5}/>),
		items.push(<ListBreak key={7}/>),
		items.push(<ListItem title="Nome do Conjuge" content={person.nomeConjuge} key={6}/>);
	}
	items.push(<ListItem content="Ativo" title="Segue no rol de membros?" rightAction={renderSwitch()} key={10}/>);
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
