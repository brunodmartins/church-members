import React from 'react';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import AddressInfo from './addressInfo';

const MemberInfo = ({member}) => {
    return (
      <div>
        <PersonalInfo person={member.pessoa} />
        <ContactInfo contact={member.pessoa.contato} />
        <AddressInfo {...member.pessoa.endereco} />
      </div>
    );
};

export default MemberInfo;
