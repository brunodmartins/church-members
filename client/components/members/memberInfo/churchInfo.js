import React from 'react';
import Container from 'components/container';
import {List, ListItem} from 'components/list';
import {Switch} from '@material-ui/core'


const ChurchInfo = ({frequentaCultoSexta, frequentaCultoSabado, frequentaCultoDomingo, frequentaEBD}) => {
    const renderSwitch = value => {
        return <Switch
            checked={value}
            disabled
        />
    }

    const renderContent = value => {
        return value ? "Sim" : "Não";
    }
    const items = [
        <ListItem title="Vai ao culto de Sexta" content={renderContent(frequentaCultoSexta)} rightAction={renderSwitch(frequentaCultoSexta)} key={1}/>,
        <ListItem title="Vai ao culto de Sábado" content={renderContent(frequentaCultoSabado)} rightAction={renderSwitch(frequentaCultoSabado)} key={2}/>,
        <ListItem title="Vai ao culto de Domingo" content={renderContent(frequentaCultoDomingo)} rightAction={renderSwitch(frequentaCultoDomingo)} key={3}/>,
        <ListItem title="Vai a EBD"  content={renderContent(frequentaEBD)} rightAction={renderSwitch(frequentaEBD)} key={4}/>,

	];

	return(
		<Container>
			<List items={items}/>
		</Container>
	);
}

export default ChurchInfo;