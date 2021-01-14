import React from 'react';
import Container from 'components/container';
import {List, ListItem} from 'components/list';
import {Switch} from '@material-ui/core'


const ChurchInfo = ({attendsFridayWorship, attendsSaturdayWorship, attendsSundayWorship, attendsSundaySchool}) => {
    const renderSwitch = value => {
        return <Switch
            checked={value}
            color="primary"
        />
    }

    const items = [
        <ListItem content="Culto de Sexta" title="Frequenta os cultos de Sexta?" rightAction={renderSwitch(attendsFridayWorship)} key={1}/>,
        <ListItem content="Culto de Sábado" title="Frequenta os cultos de Sábado?" rightAction={renderSwitch(attendsSaturdayWorship)} key={2}/>,
        <ListItem content="Culto de Domingo" title="Frequenta os cultos de Domingo?" rightAction={renderSwitch(attendsSundayWorship)} key={3}/>,
        <ListItem content="EBD"  title="Frequenta a EBD" rightAction={renderSwitch(attendsSundaySchool)} key={4}/>,

	];

	return(
		<Container title="Sobre a igreja">
			<List items={items}/>
		</Container>
	);
}

export default ChurchInfo;
