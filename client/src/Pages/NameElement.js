import React, { Component } from 'react';
import './cards.css';

class NameElement extends Component {
	render() {
		return (
			<div className="card-left">
				{this.props.name}
			</div>
		);
	}
}

export default NameElement;