import React from 'react';

require('./container.css');

const Container = ({children}) => {
	return (
		<div className="newcontainer">
			{children}
		</div>
	);
};

export default Container;
