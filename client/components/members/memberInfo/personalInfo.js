import React from 'react';
require('./memberInfo.css');

const PersonalInfo = ({person}) => {
    const formatDate = (date) => {
      const dateParsed = new Date(date)
      return dateParsed.getUTCDate() + "/" + (dateParsed.getUTCMonth() + 1) + "/" + dateParsed.getFullYear();
    }

    return(
      <div className="member-info-panel">
            <div className="member-info-box">
              <h3>Dados pessoais</h3>
              <label>Nome</label>
              <span>{person.nome} {person.sobrenome}</span>

              <label>Sexo</label>
              <span>{person.sexo}</span>

              <label>Data de nascimento</label>
              <span>{formatDate(person.dtNascimento)}</span>

              {person.dtCasamento != '0001-01-01T00:00:00Z' && (
                <div>
                  <label>Data de Casamento</label>
                  <span>{formatDate(person.dtCasamento)}</span>
                </div>
              )}
              
            </div>
      </div>
    );
};

export default PersonalInfo;
