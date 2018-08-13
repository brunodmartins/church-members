import React from 'react';
require('./memberInfo.css');

const PersonalInfo = ({person}) => {
	const formatDtNascimento = (date) => {
		console.log(date);
		const dateParsed = new Date(date);
		return dateParsed.getUTCDate() + '/' + (dateParsed.getUTCMonth() + 1) + '/' + dateParsed.getFullYear();
	};


	return(
		<div className="member-info-panel">
			<div className="member-info-box">
				<h3>Dados pessoais</h3>
				<label>Nome</label>
				<span>{person.nome} {person.sobrenome}</span>

				<label>Sexo</label>
				<span>{person.sexo}</span>

				<label>Data de nascimento</label>
				<span>{formatDtNascimento(person.dtNascimento)}</span>
			</div>
		</div>
	);
};

export default PersonalInfo;
