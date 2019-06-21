import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './list.js';
import ListItem from './listItem.js';
import ListBreak from './listBreak';
import Container from 'components/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



storiesOf('List', module)
	.add('List with 4 elements', () => {
		const items = [
			<ListItem leftIcon={<FontAwesomeIcon icon='phone' />} title="Phone" content="(11) 9.5320-0587" key={1}/>,
			<ListItem title="Home" content="(11) 2943-5002" key={2}/>,
			<ListBreak key={5}/>,
			<ListItem leftIcon={<FontAwesomeIcon icon='envelope' />} title="Email" content="bdm2943@gmail.com" key={3}/>,
			<ListItem title="" content="bdm2943@protonmail.com" key={4}/>,
		];
		return (
			<Container>
				<List items={items}/>
			</Container>
		);
	});
