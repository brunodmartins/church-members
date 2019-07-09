import React from 'react';

require('./container.css');

const Container = ({title, children}) => {
	return (
		<div className="newcontainer">
			{title && <div className="container-title"> {title} </div>}
			{children}
		</div>
	);
};

export default Container;
