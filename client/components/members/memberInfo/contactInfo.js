import React from 'react';
require('./memberInfo.css');

const ContactInfo = ({contact}) => {
    const formatPhone = (ddd, number) => "(" + ddd + ") " + number;


    return(
      <div className="member-info-panel">
            <div className="member-info-box">
              <h3>Contato</h3>

              {contact.telefone && (
                <div>
                  <label>Telefone</label>
                  <span>{formatPhone(contact.dddTelefone, contact.telefone)}</span>
                </div>
              )}

              {contact.celular && (
                <div>
                  <label>Celular</label>
                  <span>{formatPhone(contact.dddCelular, contact.celular)}</span>
                </div>
              )}

              {contact.email && (
                <div>
                  <label>Email</label>
                  <span>{contact.email}</span>
                </div>
              )}

            </div>
      </div>
    );
};

export default ContactInfo;
