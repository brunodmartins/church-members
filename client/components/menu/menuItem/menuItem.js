import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
require('./menu-item.css');

class MenuItem extends Component {

	constructor(props){
		super(props);
		this.linkInput = React.createRef();
	}

	render() {
		return (
			<div className="menu-item" onClick={(e) => {this.linkInput.current.handleClick(e);}}>
				<Link to={this.props.link} ref={this.linkInput}><h5>{this.props.item}</h5></Link>
			</div>
		);


	}


}

MenuItem.propTypes = {
	link: PropTypes.string.isRequired,
	item: PropTypes.string.isRequired
};

export default MenuItem;
