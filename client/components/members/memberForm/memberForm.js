import PropTypes from 'prop-types';
import React from 'react';
import {TextField, FormControl, InputLabel, Select, Button, FormHelperText} from '@material-ui/core';

class MemberForm extends React.Component {

	constructor(props) {
		super(props);
		const error = {
			firstName:'',
			lastName:'',
			gender:'',
		};
		if(props.member) {
			this.state = {...props.member, error};
		} else {
			this.state = {error};
		}
		this.setInputTextValue = this.setInputTextValue.bind(this);
		this.validate = this.validate.bind(this);
	}

	setInputTextValue(e) {
		const state = this.state;
		state[e.target.id] = e.target.value;
		this.setState(state);
	}

	validate(){
		const error = this.state.error;
		if(this.state.firstName === undefined || this.state.firstName === ''){
			error.firstName = 'Nome precisa ser preenchido';
		} else {
			error.firstName = '';
		}
		if(this.state.lastName === undefined || this.state.lastName === ''){
			error.lastName = 'Sobrenome precisa ser preenchido';
		} else {
			error.lastName = '';
		}
		if(this.state.gender === undefined || this.state.gender === ''){
			error.gender = 'Sexo precisa ser preenchido';
		} else {
			error.gender = '';
		}
		this.setState({...this.state, error});
	}

	render() {
		return (
			<FormControl>
				<TextField id="firstName" label="Nome" required={true} value={this.state.firstName} onChange={this.setInputTextValue}  error={this.state.error.firstName !== ''} helperText={this.state.error.firstName}/>
				<TextField id="lastName" label="Sobrenome" required={true} value={this.state.lastName} onChange={this.setInputTextValue} error={this.state.error.lastName !== ''} helperText={this.state.error.lastName}/>
				<FormControl>
					<InputLabel htmlFor="gender">Sexo</InputLabel>
					<Select
						native
						value={this.state.gender}
						onChange={this.setInputTextValue}
						inputProps={{
							name: 'gender',
							id: 'gender',
						}}
					>
						<option aria-label="None" value="" />
						<option value={'M'}>Masculino</option>
						<option value={'F'}>Feminino</option>
					</Select>
					<FormHelperText error={this.state.error.gender !== ''}>{this.state.error.gender}</FormHelperText>
				</FormControl>
				<Button variant="contained" color="primary" onClick={this.validate}>
					Salvar
				</Button>

			</FormControl>
		);
	}
}

MemberForm.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
};

export default MemberForm;
