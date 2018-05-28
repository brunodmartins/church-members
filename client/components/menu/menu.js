import React, { Component } from "react";
import MenuTitle from './menuTitle/menuTitle';
import MenuItem from './menuItem/menuItem';

require("./menu.css");

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-itens">
          <MenuTitle/>
          <MenuItem item="Item 1" />
          <MenuItem item="Item 2" />
          <MenuItem item="Item 3" />
          <MenuItem item="Item 4" />
        </div>
      </div>
    );
  }
}

export default Menu;
