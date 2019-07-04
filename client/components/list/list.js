import React from 'react';
require('./list.css');

const List = ({items}) => {
	const renderItems = () => {
		return items.map(i => {
			return i;
		});
	};
	return (
		<section className="list">
			{renderItems()}
		</section>
	);
};

export default List;
