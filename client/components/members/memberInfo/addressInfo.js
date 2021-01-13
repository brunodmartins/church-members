import React from 'react';
require('./memberInfo.css');
import Container from 'components/container';
import {List, ListItem, ListBreak} from 'components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddressInfo = ({address, number, district}) => {
	const items = [
		<ListItem leftIcon={<FontAwesomeIcon icon='map-marker-alt' />} title="Logradouro" content={address} key={1}/>,
		<ListItem title="Número" content={number} key={2}/>,
		<ListItem title="Bairro" content={district} key={3}/>,
	];

	return(
		<Container>
			<List items={items}/>
		</Container>
	);
};
export default AddressInfo;
