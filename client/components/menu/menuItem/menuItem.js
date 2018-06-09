import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
require("./menu-item.css");

class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item" onClick={this.props.onClick}>
        <Link to={this.props.link}><h5>{this.props.item}</h5></Link>
      </div>
    );
  }


}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
};

export default MenuItem;
