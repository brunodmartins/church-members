import PropTypes from 'prop-types';
import React from 'react';

class InputText extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: props.value
		};
	}

	render() {
		return(
			<section>
				<label htmlFor={this.props.id}>{this.props.placeholder}</label>
				<input type='text' value={this.state.value} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
			</section>
		);
	}
}

InputText.propTypes = {
	id: PropTypes.PropTypes.string.required,
	placeholder: PropTypes.PropTypes.string.required,
	value: PropTypes.PropTypes.string.required,
	onChange: PropTypes.PropTypes.func.required,
};

export default InputText;
