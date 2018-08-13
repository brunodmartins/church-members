import React, { Component } from 'react';
import loadingIcon from './loading.svg';
import PropTypes from 'prop-types';
require('./loading.css');

const LoadingAPI = ({isLoading, children}) => {
	return (
		<div>
			{isLoading ? <div className="loading-div"><img src={loadingIcon}/></div> : children}
		</div>
	);
};


LoadingAPI.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	children: PropTypes.any,
};

export default LoadingAPI;
