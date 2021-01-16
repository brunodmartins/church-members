import PropTypes from 'prop-types';
import React from 'react';
import {Form, InputText} from 'components/form';

class MemberForm extends React.Component {

	constructor(props) {
		super(props);
		if(props.member) {
			this.state = {...props.member};
		} else {
			this.state = {};
		}
		this.setInputTextValue = this.setInputTextValue.bind(this);
	}

	setInputTextValue(e) {
		console.log(e.target.value);
		const state = this.state;
		state[e.target.id] = e.target.value;
		this.setState(state);
	}

	render() {
		return (
			<Form>
				<InputText id="firstName" placeholder="Nome" value={this.state.firstName} onChange={this.setInputTextValue}/>
				<InputText id="lastName" placeholder="Sobrenome" value={this.state.lastName} onChange={this.setInputTextValue}/>

				<label htmlFor="gender">Sexo</label>
				<select name="gender" id="genders">
					<option value="Masculino">Masculino</option>
					<option value="Feminino">Feminino</option>
				</select>
			</Form>
		);
	}
}

MemberForm.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberForm;
