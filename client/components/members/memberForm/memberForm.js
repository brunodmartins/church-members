import PropTypes from 'prop-types';
import React from 'react';
import {TextField, FormControl, InputLabel, Select, Button, FormHelperText} from '@material-ui/core';
import {
	KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';



class MemberForm extends React.Component {

	constructor(props) {
		super(props);
		const error = {
			firstName:'',
			lastName:'',
			gender:'',
			fathersName: '',
			mothersName: '',
			civilStatus: '',
			spousesName: '',
		};
		if(props.member) {
			this.state = {...props.member.person, error};
		} else {
			this.state = {error};
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.validate = this.validate.bind(this);
	}

	handleInputChange(e) {
		const state = this.state;
		state[e.target.id] = e.target.value;
		this.setState(state);
	}

	handleDateChange(date, value, id) {
		const state = this.state;
		state[id] = moment(value, 'DD/MM/yyyy');
		this.setState(state);
	}

	validate(){
		const error = this.state.error;
		let valid = true;
		if(this.state.firstName === undefined || this.state.firstName === ''){
			error.firstName = 'Nome precisa ser preenchido';
			valid = false;
		} else {
			error.firstName = '';
		}
		if(this.state.lastName === undefined || this.state.lastName === ''){
			error.lastName = 'Sobrenome precisa ser preenchido';
			valid = false;
		} else {
			error.lastName = '';
		}
		if(this.state.gender === undefined || this.state.gender === ''){
			error.gender = 'Sexo precisa ser preenchido';
			valid = false;
		} else {
			error.gender = '';
		}
		this.setState({...this.state, error});
		if(valid) {
			let member = this.state;
			delete member.error;
			this.props.onSave(member);
		}
	}

	render() {
		const disableMarriageFields = this.state.civilStatus !== 'M';
		return (
			<FormControl>
				<TextField id="firstName" label="Nome" required={true} value={this.state.firstName} onChange={this.handleInputChange}  error={this.state.error.firstName !== ''} helperText={this.state.error.firstName}/>
				<TextField id="lastName" label="Sobrenome" required={true} value={this.state.lastName} onChange={this.handleInputChange} error={this.state.error.lastName !== ''} helperText={this.state.error.lastName}/>
				<FormControl>
					<InputLabel htmlFor="gender">Sexo</InputLabel>
					<Select
						native
						value={this.state.gender}
						onChange={this.handleInputChange}
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
				<KeyboardDatePicker
					disableFuture
					variant="inline"
					format="DD/MM/yyyy"
					margin="normal"
					id="birthDate"
					label="Data de Nascimento"
					value={this.state.birthDate}
					onChange={(date, value) => this.handleDateChange(date, value, 'birthDate')}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<TextField id="placeOfBirth" label="Local de Nascimento" value={this.state.placeOfBirth} onChange={this.handleInputChange} />
				<TextField id="fathersName" label="Nome do pai" required={true} value={this.state.fathersName} onChange={this.handleInputChange}  error={this.state.error.fathersName !== ''} helperText={this.state.error.fathersName}/>
				<TextField id="mothersName" label="Nome da mãe" required={true} value={this.state.mothersName} onChange={this.handleInputChange}  error={this.state.error.mothersName !== ''} helperText={this.state.error.mothersName}/>
				<TextField id="profession" label="Profissão" value={this.state.profession} onChange={this.handleInputChange}/>
				<TextField id="brothersQuantity" label="Qtd de Irmãos" value={this.state.brothersQuantity} onChange={this.handleInputChange} type='number' inputProps={ {min:0} } />
				<TextField id="childrensQuantity" label="Qtd de Filhos" value={this.state.childrensQuantity} onChange={this.handleInputChange} type='number' inputProps={ {min:0} } />
				<FormControl>
					<InputLabel htmlFor="civilStatus">Estado Civil</InputLabel>
					<Select
						native
						value={this.state.civilStatus}
						onChange={this.handleInputChange}
						inputProps={{
							name: 'civilStatus',
							id: 'civilStatus',
						}}
					>
						<option aria-label="None" value="" />
						<option value={'S'}>Solteiro</option>
						<option value={'M'}>Casado</option>
						<option value={'D'}>Divorciado</option>
						<option value={'W'}>Viuvo</option>
					</Select>
					<FormHelperText error={this.state.error.civilStatus !== ''}>{this.state.error.civilStatus}</FormHelperText>
				</FormControl>
				<KeyboardDatePicker
					disableFuture
					variant="inline"
					format="DD/MM/yyyy"
					margin="normal"
					id="marriageDate"
					label="Data do casamento"
					value={this.state.marriageDate}
					onChange={(date, value) => this.handleDateChange(date, value, 'marriageDate')}
					disabled={disableMarriageFields}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<TextField id="spousesName" label="Nome do conjuge" value={this.state.spousesName} onChange={this.handleInputChange} error={this.state.error.spousesName !== '' && !disableMarriageFields} helperText={this.state.error.spousesName} disabled={disableMarriageFields} />
				<Button variant="contained" color="primary" onClick={this.validate}>
					Salvar
				</Button>

			</FormControl>
		);
	}
}

MemberForm.propTypes = {
	member: PropTypes.PropTypes.object.isRequired,
	onSave: PropTypes.PropTypes.func.isRequired,
};

export default MemberForm;
