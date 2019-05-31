import React from 'react';
import { storiesOf } from '@storybook/react';
import MemberCard from './memberCard/memberCard';
import MembersPanel from './membersPanel/membersPanel';
import PersonalInfo from './memberInfo/personalInfo';
import ContactInfo from './memberInfo/contactInfo';
import MemberInfo from './memberInfo/memberInfo';


const MEMBERS = [
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
	{name:'Bruno', completeName:'Bruno Damasceno Martins'},
];

const MEMBRO = {
	pessoa: {
		nome: 'Bruno',
		sexo: 'M',
		sobrenome: 'Damasceno Martins',
		dtNascimento: {
			year:1995,
			month:5,
			day:10,
		},
		contato: {
			dddTelefone: 11,
			telefone: 29435002,
			dddCelular: 11,
			celular: 953200587,
			email: 'bdm2943@gmail.com'
		}
	},
};

storiesOf('Members', module)
	.add('card', () => (
		<MemberCard name="Bruno" completeName="Bruno Damasceno Martins" />
	))
	.add('Panel', () => (
		<MembersPanel members={MEMBERS} />
	))
	.add('Member info', () => (
		<MemberInfo member={MEMBRO} />
	))
	.add('Personal info', () => (
		<PersonalInfo person={MEMBRO.pessoa} />
	))
	.add('ContactInfo info', () => (
		<ContactInfo contact={MEMBRO.pessoa.contato} />
	));
