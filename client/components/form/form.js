import React, { Component } from 'react';
require('./form.css');

const Form = ({children}) => {
	return (
		<form className="form">
			{children}
		</form>
	);
};

export default Form;
