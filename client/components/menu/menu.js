import React from 'react';
import MenuDesktop from './menuDesktop';
import MenuMobile from './menuMobile';

require('./menu.css');

const Menu = () =>  {
	return (
		<div className="menu">
			<MenuDesktop/>
			<MenuMobile/>
		</div>
	);
};

export default Menu;
