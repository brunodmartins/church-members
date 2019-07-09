import React from 'react';
import Container from 'components/container';
import {List, ListItem} from 'components/list';
import {Switch} from '@material-ui/core'


const ReligionInfo = ({localBatismo, idadeConheceuEvangelho, aceitouJesus, batizado,
    batizadoCatolica, dtAceitouJesus, dtBatismo}) => {
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
    if(localBatismo) {
        items.push(<ListItem content={localBatismo} title="Local do Batismo"/>);
    }
    if(idadeConheceuEvangelho != 0) {
        items.push(<ListItem content={idadeConheceuEvangelho} title="Idade que conheceu o Evangelho"/>)
    }

    items.push(<ListItem content="Aceitou Jesus?" title="Como seu único salvador" rightAction={renderSwitch(aceitouJesus)}/>)
    if(new Date(dtAceitouJesus).getYear() > 0) {
        items.push(<ListItem content={formatDt(dtAceitouJesus)} title="Data da aceitação"/>)
    }
    if(new Date(dtBatismo).getYear() > 0) {
        items.push(<ListItem content={formatDt(dtBatismo)} title="Data do batismo"/>)
    }
    items.push(<ListItem content="Batizado" title="Em uma igreja evangélica" rightAction={renderSwitch(batizado)}/>)
    items.push(<ListItem content="Batizado Católico" title="Em uma igreja católica" rightAction={renderSwitch(batizadoCatolica)}/>)

	return(
		<Container title="Evangelho">
			<List items={items}/>
		</Container>
	);
}

export default ReligionInfo;