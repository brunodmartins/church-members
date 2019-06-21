import React from 'react';
require('./memberInfo.css');
import Container from 'components/container';
import {List, ListItem, ListBreak} from 'components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddressInfo = ({logradouro, numero, bairro}) => {
	const items = [
		<ListItem leftIcon={<FontAwesomeIcon icon='map-marker-alt' />} title="Logradouro" content={logradouro} key={1}/>,
		<ListItem title="Número" content={numero} key={2}/>,
		<ListItem title="Bairro" content={bairro} key={3}/>,
	];

	return(
		<Container>
			<List items={items}/>
		</Container>
	);
};
export default AddressInfo;
