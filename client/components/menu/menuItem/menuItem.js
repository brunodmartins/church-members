import React, { Component } from "react";
import PropTypes from "prop-types";
require("./menu-item.css");

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item" onClick={this.props.onClick}>
        <h5>{this.props.item}</h5>
      </div>
    );
  }


}

MenuItem.PropTypes = {
  item: PropTypes.string.isRequired
};

export default MenuItem;
