import React from 'react';
import Container from 'components/container';
import {List, ListItem} from 'components/list';
import {Switch} from '@material-ui/core'


const ChurchInfo = ({frequentaCultoSexta, frequentaCultoSabado, frequentaCultoDomingo, frequentaEBD}) => {
    const renderSwitch = value => {
        return <Switch
            checked={value}
            color="primary"
        />
    }

    const items = [
        <ListItem content="Culto de Sexta" title="Frequenta os cultos de Sexta?" rightAction={renderSwitch(frequentaCultoSexta)} key={1}/>,
        <ListItem content="Culto de Sábado" title="Frequenta os cultos de Sábado?" rightAction={renderSwitch(frequentaCultoSabado)} key={2}/>,
        <ListItem content="Culto de Domingo" title="Frequenta os cultos de Domingo?" rightAction={renderSwitch(frequentaCultoDomingo)} key={3}/>,
        <ListItem content="EBD"  title="Frequenta a EBD" rightAction={renderSwitch(frequentaEBD)} key={4}/>,

	];

	return(
		<Container>
			<List items={items}/>
		</Container>
	);
}

export default ChurchInfo;