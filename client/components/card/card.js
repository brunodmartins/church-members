import React from 'react';
require("./styles.css");

const Card = ({title, onClick, children}) => {
    const onClickCard = e => {
        if(onClick) {
            onClick(e);
        }
    };
    return (
    <div className="card" onClick={onClickCard}>
		<p>{title}</p>
		<div className="content">
			{children}
		</div>
		<footer className="footer">
		</footer>
	</div>);
};

export default Card;