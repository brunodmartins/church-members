import React, { Component } from "react";
import MenuTitle from './menuTitle/menuTitle';
import MenuItem from './menuItem/menuItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

require("./menu.css");

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-itens">
          <MenuTitle/>
          <MenuItem item="Membros" link="/membros" />
          <MenuItem item="Relatorio" link="/relatorioMembros" />
        </div>
      </div>
    );
  }
}

export default Menu;
