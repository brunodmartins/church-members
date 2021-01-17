import React from 'react';
import { storiesOf } from '@storybook/react';
import MemberCard from './memberCard/memberCard';
import MembersPanel from './membersPanel/membersPanel';
import PersonalInfo from './memberInfo/personalInfo';
import ContactInfo from './memberInfo/contactInfo';
import MemberInfo from './memberInfo/memberInfo';
import MemberForm from 'components/members/memberForm/memberForm';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';


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

const MEMBER = {
	person: {
		firstName: 'Bruno',
		gender: 'M',
		lastName: 'Damasceno Martins',
		birthDate: moment('1995-05-10'),
		contact: {
			phoneArea: 11,
			phone: 29435002,
			cellPhoneArea: 11,
			cellPhone: 953200587,
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
		<MemberInfo member={MEMBER} />
	))
	.add('Personal info', () => (
		<PersonalInfo person={MEMBER.person} />
	))
	.add('ContactInfo info', () => (
		<ContactInfo contact={MEMBER.person.contact} />
	))
	.add('Form New', () => (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<MemberForm onSave={(member) => console.log(member)}/>
		</MuiPickersUtilsProvider>
	))
	.add('Form Edit', () => (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<MemberForm member={MEMBER} onSave={(member) => console.log(member)}/>
		</MuiPickersUtilsProvider>
	));
