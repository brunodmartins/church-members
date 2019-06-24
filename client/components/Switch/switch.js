import React from 'react';

require('./switch.css');

class Switch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			switchStatus: props.value,
		};

		this.renderActive = this.renderActive.bind(this);
		this.buildStyle = this.buildStyle.bind(this);
		this.changeStatus = this.changeStatus.bind(this);
		this.buildLineStyle = this.buildLineStyle.bind(this);
	}

	renderActive(){
		return <div className="switch-active"/>;
	};

	buildStyle(){
		if(this.state.switchStatus){
			return {
				float: 'left',
				'background-color': 'grey',
			};
		} else {
			return {
				float: 'right',
				'background-color': 'green',
			};
		}
	};

	buildLineStyle(){
		if(this.state.switchStatus){
			return {
				'background-color': 'grey',
			};
		} else {
			return {
				'background-color': 'green',
			};
		}
	}

	changeStatus(){
		this.setState({switchStatus: !this.state.switchStatus});
		this.props.onChange(this.state.switchStatus);
	}

	render(){
		return (
			<div className="switch-div" onClick={this.changeStatus}>
				<div className="switch-line" style={this.buildLineStyle()}>
					<div
						className="switch"
						style={this.buildStyle()}/>
				</div>
			</div>
		);
	}
};

export default Switch;
