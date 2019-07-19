import React from 'react';
import Card from 'components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingDialog from 'components/loadingDialog';

const ReportsUI = ({onPrintFile, uiLoadingJuridico, uiLoadingCasamento, uiLoadingNascimento}) => {

	const printCard = (title, text, onClick, loading) => {
		const body = loading ? <LoadingDialog loading/> : (
			<React.Fragment>
				{text} <FontAwesomeIcon icon="file-download" color="#08b2e3"/>
			</React.Fragment>
		);
		return (
			<Card title={title} onClick={onClick}>
				{body}
			</Card>
		);
	};

	return (
		<section>
			{printCard('Jurídico', 'Relatorio Juridico', () => onPrintFile('juridico'), uiLoadingJuridico)}
			{printCard('Nascimento', 'Lista de aniversariantes', () => onPrintFile('nascimento'), uiLoadingNascimento)}
			{printCard('Casamento', 'Lista de aniversariantes de Casamento', () => onPrintFile('casamento'), uiLoadingCasamento)}
		</section>
	);
};

export default ReportsUI;
