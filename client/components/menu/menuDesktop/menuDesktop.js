import React from 'react';
import MenuItem from '../menuItem';
import MenuTitle from '../menuTitle';
require("./menuDesktop.css");

const MenuDesktop = ({}) => {
    return (
        <div className="menu-desktop">
            <MenuTitle/>
            <MenuItem  item="Membros" link="/membros" />
            <MenuItem  item="Pesquisar" link="/pesquisar" />
            <MenuItem  item="Relatorio" link="/relatorioMembros" />
          </div>
    );
};

export default MenuDesktop;