import React from 'react';
import MenuItem from '../menuItem';
import MenuTitle from '../menuTitle';
require('./menuDesktop.css');

const MenuDesktop = ({}) => {
	return (
		<div className="menu-desktop">
			<MenuTitle/>
			<MenuItem  item="Membros" link="/membros" />
			<MenuItem  item="Relatorio" link="/reports" />
		</div>
	);
};

export default MenuDesktop;