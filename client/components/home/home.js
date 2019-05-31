import React from 'react';
import PropTypes from 'prop-types';

const Home = ({auth}) => {
	if(!auth.isAuthenticated()) {
		console.log('Usuario não autenticado');
		auth.login();
	}

	return (
		<div/>
	);
};

Home.propTypes = {
	auth: PropTypes.object.isRequired,
};

export default Home;
