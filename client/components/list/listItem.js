import React from 'react';
require('./list.css');

const ListItem = ({leftIcon, title, content, rightIcon}) => {

	const renderIcon = (icon) => {
		if (icon) {
			return (
				<div className="list-item-icon">
					{icon}
				</div>
			);
		} else {
			return (
				<div className="list-item-icon" dangerouslySetInnerHTML={{__html:'&nbsp'}}/>
			);
		}
	};

	const renderInfo = (title, content) => {
		return (
			<div className="list-item-info">
				<h6>{content}</h6>
				<sub>{title}</sub>
			</div>
		);
	};

	return (
		<section className="list-item">
			{renderIcon(leftIcon)}
			{renderInfo(title, content)}
			{renderIcon(rightIcon)}
		</section>
	);
};

export default ListItem;
