import React, { Component } from 'react';

class NameElement extends Component {
	render() {
		return (
			<div className="left">
				{this.props.name}
			</div>
		);
	}
}

export default NameElement;