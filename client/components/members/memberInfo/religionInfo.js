import React from 'react';
import Container from 'components/container';
import {List, ListItem} from 'components/list';
import {Switch} from '@material-ui/core'


const ReligionInfo = ({baptismPlace, learnedGospelAge, acceptedJesus, baptized, catholicBaptized, acceptedJesusDate, baptismDate}) => {
    const renderSwitch = value => {
        return <Switch
            checked={value}
            color="primary"
        />
    }

    const formatDt = (date) => {
		const dateParsed = new Date(date);
		return dateParsed.getUTCDate() + '/' + (dateParsed.getUTCMonth() + 1) + '/' + dateParsed.getFullYear();
	};

    const items = [];
    if(baptismPlace) {
        items.push(<ListItem content={baptismPlace} title="Local do Batismo"/>);
    }
    if(learnedGospelAge != 0) {
        items.push(<ListItem content={learnedGospelAge} title="Idade que conheceu o Evangelho"/>)
    }

    items.push(<ListItem content="Aceitou Jesus?" title="Como seu único salvador" rightAction={renderSwitch(acceptedJesus)}/>)
    if(new Date(acceptedJesusDate).getYear() > 0) {
        items.push(<ListItem content={formatDt(acceptedJesusDate)} title="Data da aceitação"/>)
    }
    if(new Date(baptismDate).getYear() > 0) {
        items.push(<ListItem content={formatDt(baptismDate)} title="Data do batismo"/>)
    }
    items.push(<ListItem content="Batizado" title="Em uma igreja evangélica" rightAction={renderSwitch(baptized)}/>)
    items.push(<ListItem content="Batizado Católico" title="Em uma igreja católica" rightAction={renderSwitch(catholicBaptized)}/>)

	return(
		<Container title="Evangelho">
			<List items={items}/>
		</Container>
	);
}

export default ReligionInfo;
