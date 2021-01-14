import React from 'react';
import Container from 'components/container';
import {List, ListItem} from 'components/list';
import {Switch} from '@material-ui/core'

const TenthInfo = ({knowsTithe, agreesTithe, tithe}) => {
    const renderSwitch = value => {
        return <Switch
            checked={value}
            color="primary"
        />
    }

    const items = [
        <ListItem content="Conhece" title="Conheçe a doutrina?" rightAction={renderSwitch(knowsTithe)} key={1}/>,
        <ListItem content="Concorda" title="Concorda com a doutrina?" rightAction={renderSwitch(agreesTithe)} key={2}/>,
        <ListItem content="Dizimista" title="É Dizimista?" rightAction={renderSwitch(tithe)} key={3}/>,

	];

	return(
		<Container title="Dizimo">
			<List items={items}/>
		</Container>
	);
}

export default TenthInfo;
