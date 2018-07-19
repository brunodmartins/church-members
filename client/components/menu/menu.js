import React, { Component } from "react";
import MenuTitle from './menuTitle/menuTitle';
import MenuItem from './menuItem/menuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require("./menu.css");

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      menuClass: "menu-itens",
      menuOpen: false,
    };
  }

  openMenu = (e) => {
    console.log(e);
    const menuClass = this.state.menuOpen ? "menu-itens" : "menu-itens-opened";
    
    this.setState({
        menuClass,
        menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className="menu">
          <MenuTitle/>
          <div className="menu-icon" onClick={this.openMenu}>
            <FontAwesomeIcon icon="bars" />
          </div>
          <div className={this.state.menuClass}>
            <MenuItem  item="Membros" link="/membros" />
            <MenuItem  item="Relatorio" link="/relatorioMembros" />
          </div>
        

      </div>
    );
  }
}

export default Menu;
